import React, { useState, useEffect } from "react";
import { canUseDOM } from 'vtex.render-runtime'
import defaultProps from "./defaultProps.json";
import schemaEditor from "./schemaEditor.json";

import { Container, Overlay, Content } from "./lgpd-styles";

function ModalLGPD(props) {
  const [open, setOpen] = useState(false);

  const handleClick = function (e) {
    localStorage.setItem("lgpd-accept", "true");
    setOpen(false);
  };

  useEffect(() => {
    if (localStorage.getItem("lgpd-accept") == null) {
      setOpen(true);
    }
  }, []);

  return open ? (
    <Container>
      <Content>
        <img src={props.imagem} />
        <p>
          {props.texto}<br />
          {props.texto2}{" "}
          <a href="/politica-de-privacidade">Mais Informações.</a>
        </p>
        <button className="sy-btn-lgpd" onClick={handleClick}>
          {props.textoButton}
        </button>
      </Content>
    </Container>
  ) : null;
}

ModalLGPD.defaultProps = defaultProps;
ModalLGPD.getSchema = (_) => schemaEditor;

export default ModalLGPD;
