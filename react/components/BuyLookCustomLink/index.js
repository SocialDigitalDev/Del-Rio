import React, {useState, useEffect} from "react";
import { useProduct } from "vtex.product-context";
import "../../css/BuyLookCustomLink/global.css";

const BuyLookCustomLink = () => {

    const productId = useProduct().product.productId;
    const [ suggestions, listSuggestions ] = useState();

    useEffect(() => {
        fetch(`/api/catalog_system/pub/products/crossselling/suggestions/${productId}`).then(resp => resp.json()).then((result) => {
            const products = result
            listSuggestions(products)
        })
    }, [])

    let formattedProducts = suggestions?.map(item => item.productId).toString();

    return suggestions?.length > 0 ?(
        <div className="buy-look--link-wrapper">
            <p className="like-it">Gostou da peça? Que tal completar o look</p>
            <a href={`/compre-o-look?mainProduct=${productId}&productIds=${formattedProducts}`} className="buy-look-link">Complete o Look</a>
        </div>
    ) : null;
}

export default BuyLookCustomLink;