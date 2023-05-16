import React, { useEffect } from "react";
import { canUseDOM } from "vtex.render-runtime";

function LinkTrocaFacil() {
    function createLink() {
        if (canUseDOM) {
            const href = window.location.href;
            let timeOut;

            if (href.includes("/account#/orders") || href.includes("#/orders")) {
                timeOut = setInterval(function () {
                    const myOrderCard = Array.from(
                        document.querySelectorAll(
                            ".vtex-my-orders-app-3-x-orderBody .cf.fr.db.w-100.w-30-ns.pt0-xl.pt5"
                        )
                    );

                    if (myOrderCard.length) {
                        clearInterval(timeOut);
                        myOrderCard.forEach((element) => {
                            console.log("🚀 ~ file: LinkTrocaFacil.jsx ~ line 21 ~ myOrderCard.forEach ~ element", element)
                            const link = document.createElement("a");
                            link.setAttribute("href", "https://delrio.troquefacil.com.br/");
                            link.setAttribute("target", "_blank");
                            link.setAttribute("rel", "noopener noreferrer");
                            link.setAttribute("style", "line-height: 40px;");
                            link.classList.add(
                                "linkTrocaFacil",
                                "c-link",
                                "hover-c-link",
                                "c-link--visited",
                                "fw4",
                                "f6",
                                "f5-l",
                                "link"
                            );
                            link.innerHTML = "Solicitar Devolução";

                            if (element.innerHTML.indexOf("linkTrocaFacil") == -1) {
                                element.prepend(link);
                            }
                        });
                    }
                }, 500);
            }
        }
    }

    useEffect(() => {
        createLink();
        window.addEventListener("hashchange", createLink);

        return () => {
        window.removeEventListener("hashchange", createLink);
        };
    }, []);

    return <></>;
}

export default LinkTrocaFacil;
