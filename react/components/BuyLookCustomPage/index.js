import React, {useState, useEffect} from "react";

const BuyLookCustomPage = () => {

    let productArray = [];
    const [ product, setProduct ] = useState("");
    
    useEffect(()=>{
        
        let urlSearch = window.location.search;
        let prodIds = urlSearch.replace("?mainProduct=", "").replace("&productIds=", ",");
        let prodIdsArr = prodIds.split(',');
        
        let arrRequest = prodIdsArr?.map(item => 
            fetch(`/api/catalog_system/pub/products/search?fq=productId:${item}`, {
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": null,
                "method": "GET",
                "mode": "cors",
                "credentials": "include"
            })
            .then(resp => resp.json())
            .then((result) => {
                productArray.push(result[0]);
            })
            .catch((error) => {
                return error;
            })
        )

        const executeRequest = async () => {
            arrRequest();
        };
        
        executeRequest();
        
    })

    setTimeout(function(){
        let productMount = productArray?.map(item => 
            <a href={item.link}>{item.productName}</a>
        )
        setProduct(productMount);
    }, 2000)
    

    

    return (
        <div className="teste">
            {product}
        </div>
    );
}

export default BuyLookCustomPage;