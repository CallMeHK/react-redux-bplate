import React from "react";

const Form = props => {
  return (
    <div>
      {Object.keys(props.form).map((elt, i) => (
        <div key={elt + i}>
          <span>{elt} :</span>{" "}
          <input
            value={props.form[elt]}
            onChange={e => props.change(elt, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default Form;
