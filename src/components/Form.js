import React from "react";

const Form = props => {
    console.log(props)
  return (<div>
    {Object.keys(props.form).map((elt, i) => (
      <div key={elt + i}>
        <span>{elt} :</span> <span>{props.form[elt]}</span>
      </div>
    ))}
  </div>)
};

export default Form;
