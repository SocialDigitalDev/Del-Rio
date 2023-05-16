import React, { useEffect, useState } from "react";
import { Link, canUseDOM} from "vtex.render-runtime";
import { useDevice } from "vtex.device-detector";
import axios from "axios";

import defaultProps from "./defaultProps.json";
import schemaEditor from "./schemaEditor.json";

import { Container } from "./newsletterPopup-styles";
import { PopUp } from "./newsletterPopup-styles";
import { PopInner } from "./newsletterPopup-styles";
import { CloseBtn } from "./newsletterPopup-styles";
import { TextContainer } from "./newsletterPopup-styles";
import { SubText } from "./newsletterPopup-styles";
import { ButtonEnviar } from "./newsletterPopup-styles";
import { InputContainer } from "./newsletterPopup-styles";
import { TextInput } from "./newsletterPopup-styles";

function NewsletterPopup(props) {
  const [hasPopupBeenOpened, setHasPopupBeenOpened] = useState(true);
  const [termos, setTermos] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [success, setSuccess] = useState("");
  const { device } = useDevice();
  // const device = useDevice();

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  function handlePopupSubmit(e) {
    e.preventDefault();

    
    if (userName == "") {
      document.querySelector('.sy-pop-inner-form input[name="name"]').focus();
      document.querySelector('.sy-pop-inner-form input[name="name"]').placeholder = "Preencha o campo corretamente";

      return false;
    }

    if (!validateEmail(userEmail) || userEmail == "") {
      document.querySelector('input[name="email"]').value = "";
      document.querySelector('input[name="email"]').focus();
      document.querySelector('input[name="email"]').placeholder = "Email inválido";
      return false;
    }    
    
    if (!termos) {
      document.querySelector('.sy-termo-popup input').focus();
      return false;
    }   

    axios
      .patch(`/api/dataentities/NL/documents`, {
        name: userName,
        email: userEmail,
        accept: true,
      })
      .then(() => {
        setUserEmail("");
        setUserName("");
        setSuccess(true);
        localStorage.setItem("show-newsletter-popup", true);

        setTimeout(() => {
          setHasPopupBeenOpened(true);
        }, 6000);
      });
  }

  useEffect(() => {
    const hasUserClosedPopup = !!localStorage.getItem("show-newsletter-popup");

    if (hasUserClosedPopup) return;

    setHasPopupBeenOpened(JSON.parse(hasUserClosedPopup));
  }, []);

  return (
    <>
      {canUseDOM && (
        <>
          <Container style={{ display: "none" }} show={!hasPopupBeenOpened}>
            <PopUp>
              <PopInner className="sy-pop-inner">
                <CloseBtn className="close-btn" 
                  onClick={() => {
                    setHasPopupBeenOpened(true);
                    localStorage.setItem("show-newsletter-popup", false);
                  }} >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="white"/>
                  </svg>
                </CloseBtn>
                {device == "phone" 
                  ? ""
                  : <div className className="sy-pop-inner-img"><img src={props["image"]} /></div>
                }
                <div className className="sy-pop-inner-form">
                  <TextContainer>
                    <SubText>
                      {success
                        ? <span className='sy-pop-success'>Obrigada por se cadastrar. <br/> Segue seu cupom BEMVINDO5</span>
                        : props["highlighted-title"]}
                    </SubText>
                  </TextContainer>

                  {!success && (
                    <>
                      <InputContainer>
                        <TextInput
                          placeholder="Nome"
                          name="name"
                          type="text"
                          onChange={(e) => setUserName(e.target.value)}
                        ></TextInput>
                        <TextInput
                          placeholder="Email"
                          name="email"
                          type="email"
                          onChange={(e) => setUserEmail(e.target.value)}
                        ></TextInput>
                        <label className="sy-termo-popup">
                          <input
                            type="checkbox"
                            className={termos ? "is--active" : ""}
                            onChange={() => setTermos(!termos)}
                          ></input>
                          <div>
                          Li e concordo com os <Link to="/institucional/termos-condicao"> Termos & Condições </Link> e <Link to="/institucional/politica-privacidade"> Políticas de Privacidade</Link></div>
                        </label>
                      </InputContainer>

                      <ButtonEnviar onClick={(e) => handlePopupSubmit(e)}>
                        {defaultProps.button}
                      </ButtonEnviar>
                    </>
                  )}
                </div>
              </PopInner>
            </PopUp>
          </Container>
        </>
      )}
    </>
  );
}

NewsletterPopup.defaultProps = defaultProps;
NewsletterPopup.getSchema = (_) => schemaEditor;

export default NewsletterPopup;
