import React, {useState, useEffect} from "react";
import axios from "axios";
import { FormattedCurrency } from "vtex.format-currency";
import { useOrderForm } from "vtex.order-manager/OrderForm"

const BuyLookCustomPage = () => {

    const [ listedProduct, setListedProduct ] = useState([]);
    
    async function listProducts() {
        
        const urlSearch = window.location.search;
        const prodIds = urlSearch.replace("?mainProduct=", "").replace("&productIds=", ",");
        const prodIdsArr = prodIds.split(',');

        for (let i = 0; i < prodIdsArr.length; i++){
            await axios({
                url: `/api/catalog_system/pub/products/search?fq=productId:${prodIdsArr[i]}`
            }).then(function(response){
                setListedProduct(prevArr => [...prevArr, response.data[0]]);
            });
        }
    }
    
    useEffect(()=>{
        listProducts();
    }, [])

    console.log(listedProduct);

    const listArr = listedProduct?.map(item =>
        <div className="compre-o-look--product-container">
            <div className="compre-o-look--product-image-container">
                <a href={item.link} className="compre-o-look--product-image-link">
                    <img src={item.items[0].images[0].imageUrl} className="compre-o-look--product-image" />
                </a>
            </div>
            <div className="compre-o-look--product-info-container">
                <div className="compre-o-look--product-name-container">
                    <a href={item.link} className="compre-o-look--product-name-link">
                        <span className="compre-o-look--product-name">
                            {item.productName}
                        </span>
                    </a>
                </div>
                <div className="compre-o-look--product-price-container">
                    { item.items[0].sellers[0].commertialOffer.ListPrice !== item.items[0].sellers[0].commertialOffer.Price ? (
                            <div className="product-prices">
                                <span className="preco-de">
                                    <FormattedCurrency value={item.items[0].sellers[0].commertialOffer.ListPrice} />
                                </span>
                                <span className="preco-por">
                                    <FormattedCurrency value={item.items[0].sellers[0].commertialOffer.Price} />
                                </span>
                            </div>
                         ) : (
                            <div className="product-prices">
                                <span className="preco-por">
                                    <FormattedCurrency value={item.items[0].sellers[0].commertialOffer.Price} />
                                </span>
                            </div>
                        )
                    }
                    { item.items[0].sellers[0].commertialOffer.Installments[0].NumberOfInstallments > 1 ? (
                            <div className="product-price-installments">
                                <span className="installments">
                                    Em até {item.items[0].sellers[0].commertialOffer.Installments[0].NumberOfInstallments}x <FormattedCurrency value={item.items[0].sellers[0].commertialOffer.Installments[0].Value} /> sem juros
                                </span>
                            </div>
                        ) : (
                            null
                        )
                    }
                </div>
            </div>
        </div>
    )


    return (
        <div className="compre-o-look--wrapper">
            {listArr}
        </div>
    );
}

export default BuyLookCustomPage;