import React, { useState } from 'react'
import { canUseDOM } from 'vtex.render-runtime'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { FormattedCurrency } from "vtex.format-currency"
import './global.css'


const NewMiniCart = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [infoProd, setInfoProd] = useState();
    const { orderForm } = useOrderForm();
    const lengthCart = orderForm?.items?.length;

    function handleEvents(e) {
        switch (e.data.eventName) {
            case 'vtex:addToCart': {
                setIsOpen(true);
                const { items } = e.data;
                setInfoProd(items)
            }
        }

        setTimeout(() => {
            setIsOpen(false);
        }, 20000);
    }

    if (canUseDOM) {
        window.addEventListener('message', handleEvents)
    }

    return (
        <>
            <div className='miniCart__overlay' style={{display: isOpen ? "block" : "none"}}></div>
            <div className='miniCart' style={{display: isOpen ? "block" : "none"}}>
                <div className='miniCart__wrapper'>
                    <div className='miniCart__wrapper--top'>
                        <p className='miniCart__title'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15.0302 9.26934L10.9904 13.31L8.96982 11.2901L7.95986 12.3005L10.9907 15.3302L16.0404 10.2794L15.0302 9.26934Z" fill="#2D8656"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47694 2 2 6.47694 2 12C2 17.5231 6.47694 22 12 22C17.5231 22 22 17.5231 22 12C22 6.47694 17.5231 2 12 2ZM3.42857 12C3.42857 7.26592 7.26592 3.42857 12 3.42857C16.7341 3.42857 20.5714 7.26592 20.5714 12C20.5714 16.7341 16.7341 20.5714 12 20.5714C7.26592 20.5714 3.42857 16.7341 3.42857 12Z" fill="#2D8656"/></svg>
                            Adicionado ao carrinho
                        </p>

                        <button 
                            className='miniCart__closeBtn'
                            onClick={() => isOpen ? setIsOpen(false) : ""}
                        >
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#000"/>
                            </svg>
                        </button>
                    </div>

                    {
                        infoProd &&
                        (
                            <div className='miniCart__wrapper--middle'>
                                <img src={infoProd[0]?.imageUrl} alt={infoProd[0]?.variant} className='miniCart__img' />
                                
                                <div className='miniCart__wrapper--infoProduct'>
                                    <p className='miniCart__name'>{infoProd[0]?.name}</p>
                                    {
                                        orderForm?.items[lengthCart - 1].skuSpecifications.map((item) => (
                                            <p className='miniCart__variant'>{item.fieldName}: {item.fieldValues[0]}</p>
                                        ))
                                    }
                                    <p className='miniCart__price'><FormattedCurrency value={infoProd[0]?.price / 100} /></p>
                                </div>
                            </div>
                        )
                    }

                    <div className='miniCart__wrapper--bottom'>
                        <a className='miniCart__goToCheckout' href='/checkout/#/cart'>Ver Carrinho {`(${lengthCart})`}</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewMiniCart;