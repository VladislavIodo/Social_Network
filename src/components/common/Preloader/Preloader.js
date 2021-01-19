import preLoader from "../../../assets/images/2.gif";
import React from "react";

export let Preloader = (props) => {                //компонента которая показывает гифку закрузки
    return <div style={ {backgroundColor: 'white'}}>
        <img src={preLoader}/>
    </div>
}