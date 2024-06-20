import React, { useState, useContext, useEffect } from "react"
import axios from "axios"
import { ProductContext } from "vtex.product-context"

import "./global.css"

const SimilarColor = () => {
	
	const [isLoaded, setIsLoaded] = useState(false)
    const [productSimilar, setProductSimilar] = useState()
    const productContext = useContext(ProductContext)
    const product = productContext?.product
    const prodID = product?.productId
	
	let cor = product?.properties?.find(item => item.name === 'Cor')?.values[0]
	let link = product?.linkText
	
    useEffect(() => {
		const prodID2 = product?.productId

		console.log(prodID, "prodID");
		console.log(prodID2, "prodID2");

        axios.get("/api/catalog_system/pub/products/crossselling/similars/" + prodID).then((response) => {
            const similars = response?.data
            similarsColors(similars)
        })
    }, [productContext, prodID])

    const similarsColors = (item) => {

        let color = item.map((prod) => {

            let prodColor = prod?.Cor;
            let link = prod?.linkText;
			let prodFormatted = prodColor.join("--");
			let prodLength = Object.keys(prodColor).length;
			
			if(prodLength > 1){
				return (
					{
						"cor": prodFormatted,
						"link": link
					}
				)
			}else {
				return (
					{
						"cor": prodColor[0],
						"link": link
					}
				)
			}
        })
		
		!color ? setIsLoaded(false) : setIsLoaded(true)
	
		let result = color.filter(
			(item, index) => index === color.findIndex(
			  other => item.cor === other.cor
				&& item.link === other.link
			))
		
			setElem(result)
    }

	const setElem = (elem) => {

		let item = elem.map((prod) => {

			return (
				<li className={ "similar-colors--item-color similar-colors--item-color_" + prod.cor.replace(/\s+/, "-").toLowerCase() }>
					<a href={ "/" + prod.link + "/p" } className="link-similar" title={ prod.cor }></a>
				</li>
			)
		})
		setProductSimilar(item)
	}
	
	if (!productSimilar || !productSimilar.length) return null

	if (!isLoaded) {
		return null
	} else { 
		return (
			<div className="similar-colors--content">
				<h3 className="similar-color--label">Cor</h3>		
				<ul className="similar-colors--products">
					{ productSimilar }
				</ul>
			</div>
		)
	}
}

export default SimilarColor