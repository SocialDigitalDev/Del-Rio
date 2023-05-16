import React, { useContext, useState, useEffect } from 'react'
import { canUseDOM } from 'vtex.render-runtime'
import { useProduct } from 'vtex.product-context'

const ProductInfo = () => {  
  const productContextValue = useProduct()
  const [url, setUrl] = useState('')


  const handleClick = (e) => {
    let arr = productContextValue?.product?.properties;
    for(var i=0; i<arr.length; i++) {
      if(arr[i].name === "Tabela de Medidas") {
        window.open(productContextValue?.product?.properties[i]?.values[0], "_blank");
      }
    }
  }

  return (
    <>
      <a onClick={handleClick} className="sy-guia-tamanho">Guia de tamanho e provador</a>
    </>
  )
  
}

export default ProductInfo