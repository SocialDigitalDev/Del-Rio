import React, { useState, useEffect } from 'react'
import { ExtensionPoint, canUseDOM, useRuntime } from 'vtex.render-runtime'
import './institutional-main.css'

const InstitutionalPage = ({ children }) => {
  const { page } = useRuntime()
  const [isDesktop, setIsDesktop] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isMobile, setIsMobile] = useState(false)


  useEffect(() => {
    // smart start
    document.querySelector('body').classList.add("institutional-main")

    switch (page) {
      case "store.custom#atendimento":
        document.querySelector('.sy-institucional__main-left--item.atendimento').classList.add("active")
        break
      case "store.custom#formas-de-pagamento":
        document.querySelector('.sy-institucional__main-left--item.formas').classList.add("active")
        break
      case "store.custom#politica-de-privacidade":
        document.querySelector('.sy-institucional__main-left--item.privacidade').classList.add("active")
        break
      case "store.custom#trocas-e-devolucoes":
        document.querySelector('.sy-institucional__main-left--item.trocas').classList.add("active")
        break
      case "store.custom#politica-de-entrega":
        document.querySelector('.sy-institucional__main-left--item.entrega').classList.add("active")
        break
      default:
        break
    }


    if (window.screen.width > 1079) {
      setIsDesktop(true)
    } else if (window.screen.width > 766 && window.screen.width < 1080) {
      setIsTablet(true)
    } else if (window.screen.width <= 766) {
      setIsMobile(true)
    }

  }, [])

  return (
    <>
      <div className="sy-institucional">        
        <div className="sy-institucional__main">
          <ul className="sy-institucional__main-left">
            <li className="sy-institucional__main-left--item faq">
              <a href="/atendimento">Atendimento</a>
            </li>
            <li className="sy-institucional__main-left--item entrega">
              <a href="/politica-de-entrega">Política de entrega</a>
            </li>
            <li className="sy-institucional__main-left--item privacidade">
              <a href="/politica-de-privacidade">Política de privacidade</a>
            </li>
            <li className="sy-institucional__main-left--item sobre">
              <a href="/sobre-a-delrio">Sobre a DelRio</a>
            </li>
            <li className="sy-institucional__main-left--item trocas">
              <a href="/trocas-e-devolucoes">Trocas e devoluções</a>
            </li>
          </ul>
          <div className="sy-institucional__main-right">
            <div className="sy-institucional__main-right--title">
              {children[1]}
            </div>
            <div className="sy-institucional__main-right--text">
              {children[2]}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default InstitutionalPage