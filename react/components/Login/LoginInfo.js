import React, { useState, useEffect } from 'react'
import { Helmet, canUseDOM } from 'vtex.render-runtime'
  
const LoginInfo = () => {  
  const [isHidden, setToggle] = useState(false);
  const [txtUser, setTxt] = useState("");
  
  const toggleHidden = () => {
    setToggle(!isHidden)
  }
  
  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    setTimeout(() => {  
      verifyLogin()
    }, 250);
  }, [])
  
  const verifyLogin = () => {
    let user = !document.querySelector('.vtex-login-2-x-profile');
    if (!user) {
      console.log(user)
      let name = document.querySelector('.vtex-login-2-x-profile').textContent;
      setTxt(name)
      document.querySelector('.vtex-modal-layout-0-x-triggerContainer--sy-modal-login__trigger').style.display = 'none';
    }else {
      document.querySelector('.sy-login-DropDown').style.display = 'none';
    }
  }

  return (
    <>
      {canUseDOM && (
        <>
          <div className="sy-login-DropDown">
            <span onClick={toggleHidden}  className={isHidden ? "dropDownLogin dropDownLogin--active" : "dropDownLogin"}>{txtUser}</span>
            {isHidden && <Child />}          
          </div>
        </>
      )}
    </>
  )
}

const Child = () => (
  <div className="dropOptionsLogin">
    <ul>
      <li><a href="/account">Minha Conta</a></li>
      <li><a href="/account#/orders">Meus Pedidos</a></li>
      <li><a href="/logout">Sair</a></li>
    </ul>
  </div>
)

export default LoginInfo