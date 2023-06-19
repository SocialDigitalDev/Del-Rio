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

        axios.get("/api/catalog_system/pub/products/crossselling/similars/" + prodID).then((response) => {
            const similars = response?.data
            similarsColors(similars)
        })
    }, [])

    const similarsColors = (item) => {

        let color = item.map((prod) => {

            let prodColor = prod?.Cor[0]
            let link = prod?.linkText

            return (
				{
					"cor":prodColor,
					"link": link
				}
            )
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
		console.log('elem', elem)

		let item = elem.map((prod) => {
			console.log('prod -->', prod)

			return (
				<li className={ "similar-colors--item-color similar-colors--item-color_" + prod.cor.replace(/\s+/, "-").toLowerCase() }>
					<a href={ "/" + prod.link + "/p" } className="link-similar" title={ prod.cor }></a>
				</li>
			)
		})

		setProductSimilar(item)
	}

	if (!isLoaded) {
		return null
	} else { 
		return (
			<div className="similar-colors--content">				
				<ul className="similar-colors--products">
					{ productSimilar }
				</ul>
			</div>
		)
	}
}

export default SimilarColor