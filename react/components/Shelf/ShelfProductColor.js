import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from 'vtex.product-context'

const ShelfProductColor = ({ children }) => {

	const productContext = useContext(ProductContext);
	const product = productContext;
	const prodId = product.product.productId;
	const colorProduct = product?.product?.properties.filter(
		property => property.name === 'Cor'
	)[0]
	
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
	const [itemsContent, setItemsContent] = useState(true);

	const verifyResult = (result) => {
		
		let arrResult = result.length ? true : false;

		if (arrResult) {
			const createArrayOnlyColors = result.map(item => {
				return item.Cor[0]
			})
			let removeDuplicatesFromArrayColors = [...new Set(createArrayOnlyColors)];
			removeDuplicatesFromArrayColors.push(colorProduct.values[0])

			setItems(removeDuplicatesFromArrayColors);
		}

		verifyItems();
	}

	const verifyItems = () => {
		let arrItems = items.length ? true : false;

		if (!arrItems) {
			console.log('setItemsContent')
			setItemsContent(false);
		}
	}

	useEffect(() => {
		fetch("/api/catalog_system/pub/products/crossselling/similars/" + prodId)
		.then(res => res.json())
		.then(
		(result) => {
			setIsLoaded(true);
			verifyResult(result);
		},
		(error) => {
			setIsLoaded(true);
			setError(error);
		})
	}, [])
	
	if (error) {
		return <div className="delrio--error-msg">Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div className="delrio--load-colors">Loading...</div>;
	} else {	
		
		return (			
		<div className="delrio--content-colors">
			<ul className="delrio--list-colors">
				{items.map(color => (			
					color != undefined || color != null
					? <li className={`circle-color ${color}`}>
						{color}
						</li>							
					: ''
				))}
			</ul>
			{items.length >= 4  
				? <span className="delrio--list-qtd">+{items.length- 3}</span>
				: ''
			}
		</div>
		);
	}
	
}

export default ShelfProductColor