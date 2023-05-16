import React, { useEffect } from 'react'
import { canUseDOM } from 'vtex.render-runtime'
import { syAtendimento } from './atendimento-main.js';

const Atendimento = () => {  
  useEffect(() => {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://guide-delrio.netlify.app/guide.js";
    document.head.appendChild(s);

    var m = document.createElement("meta");
    m.name = "viewport";
    m.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    document.head.appendChild(m);
  }, []);

  return (
    <>
      <style>{syAtendimento}</style>
      <div className="sy-atendimento">
        <div id="guide-zendesk"></div>
      </div>
    </>
  )
}

export default Atendimento