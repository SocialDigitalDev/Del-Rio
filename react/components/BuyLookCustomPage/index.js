import React, { useState, useEffect } from "react";
import axios from "axios";
import { FormattedCurrency } from "vtex.format-currency";
import { useOrderForm } from "vtex.order-manager/OrderForm";
import "../../css/BuyLookCustomPage/global.css";

const BuyLookCustomPage = () => {

    const { orderForm } = useOrderForm();
    const [listedProduct, setListedProduct] = useState([]);
    const [show, setShow] = useState(false);
    const [selectSize, setSelectSize] = useState(false);
    const [errorCart, setErrorCart] = useState(false);
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

    function ErrorSize() {
        return (
            <div className="compre-o-look--error" onClick={() => setSelectSize(false)}>
                <div className="compre-o-look--error-container">
                    <p className="compre-o-look--error-select">Selecione um tamanho</p>
                    <button className="compre-o-look--error-ok" onClick={() => setSelectSize(false)}>OK</button>
                </div>
            </div>
        )
    }

    function ErrorAddCart() {
        return (
            <div className="compre-o-look--error" onClick={() => setErrorCart(false)}>
                <div className="compre-o-look--error-container">
                    <p className="compre-o-look--error-select">Ocorreu um erro ao adicionar o produto ao carrinho! Por favor tente novamente mais tarde.</p>
                    <button className="compre-o-look--error-ok" onClick={() => setErrorCart(false)}>OK</button>
                </div>
            </div>
        )
    }

    function VerifyBuyButton(prod) {
        let verifiedSku = prod?.items?.find(item => item?.itemId === getSku)?.itemId;    
        if ( verifiedSku === getSku ){
            addToCart();
        } else {
            setSelectSize(true);
        }
    }


    const reloadPage = (e) => {
        e.preventDefault()
        window.location.reload()
    }


    const addToCart = () => {

        let t = ["items", "totalizers", "clientProfileData", "shippingData", "paymentData", "sellers", "messages", "marketingData", "clientPreferencesData", "storePreferencesData", "giftRegistryData", "ratesAndBenefitsData", "openTextField", "commercialConditionData", "customData"];
        let idOF = orderForm.id

        let data = {
            orderItems: sku,
            expectedOrderFormSections: t
        }

        console.log(data);

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
                if (response?.error) {
                    setSelectSize(true);
                } else {
                    setShow(currentShow => !currentShow)
                }
            })
            .catch(() => {
                setErrorCart(true);
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
                        {item?.items.map(secItem => secItem?.sellers[0]?.commertialOffer?.IsAvailable == true ?
                            <div className={`size-wrapper available`}>
                                <input
                                    type="radio"
                                    name={`sizeSelector${item?.productId}`}
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
                            :
                            <div className={`size-wrapper unavailable`}>
                                <input
                                    type="radio"
                                    name={`sizeSelector${item?.productId}`}
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
                    <button className="buy-button" onClick={function() {
                        VerifyBuyButton(item)
                    }}>
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
            {errorCart ? <ErrorAddCart /> : null}
            {selectSize ? <ErrorSize /> : null}
        </div>
    );
}

export default BuyLookCustomPage;