import React, {useEffect} from 'react'
import './global.css'


const BlackFriday = () => {

    useEffect(() => {
        // smart start
        document.querySelector('body').classList.add("estilo-bf")
    }, []);
    return <></>;
}

export default BlackFriday;