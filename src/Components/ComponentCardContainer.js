import React  from "react";

const APODComp = (props) => {
    return (
        <div className="data">
        {/*JSON.stringify(props.data)*/}
        <h1>{props.data.title}</h1>
        <img className="space-img" src={props.data.url} alt={props.data.title}/>
        <p className="explanation">{props.data.explanation}</p>
        </div>
    );
}

export default APODComp;
  
  