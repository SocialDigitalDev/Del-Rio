import React, { useState, useEffect } from "react";
import axios from "axios";
import { FormattedCurrency } from "vtex.format-currency";
import { useOrderForm } from "vtex.order-manager/OrderForm";
import "../../css/BuyLookCustomPage/global.css";

const BuyLookCustomPage = () => {

    const { orderForm } = useOrderForm();
    const [listedProduct, setListedProduct] = useState([]);
    const [show, setShow] = useState(false);
    const [getSku, setSku] = useState();

    async function listProducts() {

        const urlSearch = window.location.search;
        const prodIds = urlSearch.replace("?mainProduct=", "").replace("&productIds=", ",");
        const prodIdsArr = prodIds.split(',');

        for (let i = 0; i < prodIdsArr.length; i++) {
            await axios(`/api/catalog_system/pub/products/search?fq=productId:${prodIdsArr[i]}`)
                .then(function (response) {
                    setListedProduct(prevArr => [...prevArr, response.data[0]]);
                });
        }
    }

    let sku = [
        {
            id: getSku,
            quantity: 1,
            seller: "1"
        }
    ]

    function PopUpSuccess() {
        return (
            <div className="compre-o-look--pop-up">
                <div className="compre-o-look--pop-up-content">
                    <p className="all-set">Tudo certo!</p>
                    <p className="message">Produto adicionado ao carrinho!</p>
                    <span onClick={reloadPage}>Continuar Comprando</span>
                    <a href="/checkout/#/cart" className="go-to-cart">Ir para o carrinho</a>
                </div>
            </div>
        )
    }

    const reloadPage = (e) => {
        e.preventDefault()
        window.location.reload()
    }


    const addToCart = (e) => {
        e.preventDefault()

        let t = ["items", "totalizers", "clientProfileData", "shippingData", "paymentData", "sellers", "messages", "marketingData", "clientPreferencesData", "storePreferencesData", "giftRegistryData", "ratesAndBenefitsData", "openTextField", "commercialConditionData", "customData"];
        let idOF = orderForm.id

        let data = {
            orderItems: sku,
            expectedOrderFormSections: t
        }

        fetch(`/api/checkout/pub/orderForm/${idOF}/items?sc=1`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((resp) => {
                return resp.json()
            })
            .then((response) => {
                console.log('deu bom?', response)
                setShow(currentShow => !currentShow)
            })
            .catch(err => {
                console.log('error', err);
            });
    }

    useEffect(() => {
        listProducts();
    }, [])


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
                    {item.items[0].sellers[0].commertialOffer.ListPrice !== item.items[0].sellers[0].commertialOffer.Price ? (
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
                    {item?.items[0]?.sellers[0]?.commertialOffer?.Installments !== null &&
                        item?.items[0]?.sellers[0]?.commertialOffer?.Installments[0]?.NumberOfInstallments > 1 ?
                        <div className="product-price-installments">
                            <span className="installments">
                                Em até {item?.items[0]?.sellers[0]?.commertialOffer?.Installments[0]?.NumberOfInstallments}x de <FormattedCurrency value={item?.items[0]?.sellers[0]?.commertialOffer?.Installments[0]?.NumberOfInstallments} /> sem juros
                            </span>
                        </div>
                        : null
                    }
                </div>
                <div className="compre-o-look--product-sizes-wrapper">
                    <p className="sizes-title">Tamanho</p>
                    <div className="compre-o-look--product-sizes-selector">
                        {item?.items.map(secItem =>
                            <div className="size-wrapper">
                                <input
                                    type="radio"
                                    name="sizeSelector"
                                    id={`sizeSelector${secItem?.itemId}`}
                                    className={`size-selector ${secItem?.Tamanho[0]}`}
                                    data-id={secItem?.itemId}
                                    onClick={() => setSku(secItem?.itemId)}
                                    value={secItem?.Tamanho[0]}
                                />
                                <label for={`sizeSelector${secItem?.itemId}`}>
                                    {secItem?.Tamanho[0]}
                                </label>
                            </div>
                        )}
                    </div>
                </div>
                <div className="compre-o-look--buy-button">
                    <button className="buy-button" onClick={addToCart}>
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    )


    return (
        <div className="compre-o-look--wrapper">
            {listArr}
            {show ? <PopUpSuccess /> : null}
        </div>
    );
}

export default BuyLookCustomPage;