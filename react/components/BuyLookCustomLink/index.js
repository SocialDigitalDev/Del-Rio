import React, {useState, useEffect} from "react";
import { useProduct } from "vtex.product-context";

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

    return (
        <div className="buy-look--link-wrapper">
            <a href={`/compre-o-look?mainProduct=${productId}&productIds=${formattedProducts}`} className="">Compre o Look</a>
        </div>
    );
}

export default BuyLookCustomLink;