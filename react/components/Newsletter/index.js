import React, { useState } from "react";
import { canUseDOM } from 'vtex.render-runtime'
import defaultProps from "./defaultProps.json";
import schemaEditor from "./schemaEditor.json";
import axios from "axios";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

import { Container, SuccessMessage } from "./newsletter-styles";

// import "./styles.global.css";

// const MySwal = withReactContent(Swal);

function Newsletter(props) {
  const [termos, setTermos] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const placeEmail = props.placeholderemail;
  const placeName = props.placeholdername;
  const buttonForm = props.textbutton;

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name == "") {
      document.querySelector('.sy-inputs-newsletter input[name="name"]').focus();
      document.querySelector('.sy-inputs-newsletter input[name="name"]').placeholder = "Preencha o campo corretamente";

      return false;
    }

    if (!validateEmail(email) || email == "") {
      document.querySelector('.sy-inputs-newsletter input[name="email"]').value = "";
      document.querySelector('.sy-inputs-newsletter input[name="email"]').focus();
      document.querySelector('.sy-inputs-newsletter input[name="email"]').placeholder = "Email inválido";
      return false;
    }    
    
    if (!termos) {
      document.getElementById('termos').focus();
      return false;
    }        

    axios
    .patch(`/api/dataentities/NL/documents`, {
      name: name,
      email: email,
      accept: true,
    })
    .then(() => {
      setEmail("");
      setName("");
      setSuccess(true);
    });
  };

  return (
    <>
      {canUseDOM && (
        <>
          <Container className="vtex-hide-react">
            <div className="sy-newsletter-center">
              <h2>{props.title} <span>{props.subtitle}</span></h2>

              {success ? (
                <SuccessMessage ><span className="sy-success">Cadastro realizado com sucesso!</span></SuccessMessage>
              ) : (
                <form className="sy-form-newsletter" onSubmit={handleSubmit}>
                  <div className="sy-form-newsletter__container">
                    <div className="sy-inputs-newsletter">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="name"
                        name="name"
                        placeholder={placeName}
                      ></input>
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="email"
                        name="email"
                        placeholder={placeEmail}
                      ></input>

                    </div>
                    <div className="sy-termo-newsletter">
                      <input type="checkbox" id="termos"
                        className={termos ? "is--active" : ""}
                        onChange={() => setTermos(!termos)}
                      ></input>
                      <div>
                        {props.texttermo1} <a href="/politica-de-privacidade">{props.texttermo2}</a> e <a href="/politica-de-privacidade">{props.texttermo3}</a>
                      </div>
                    </div>
                  </div>
                  <input type="submit" className="sy-btn" value={buttonForm}></input>
                </form>
              )}
            </div>
          </Container>
        </>
      )}
    </>
  );
}

Newsletter.defaultProps = defaultProps;
Newsletter.getSchema = (_) => schemaEditor;

export default Newsletter;
