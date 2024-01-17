import React from "react";

const Forms = ({className, type, text, onChange}) => {

  return (
    <form method="post" className={className}>
      <input type={type} placeholder={text} onChange={onChange}/>
    </form>
  );
};

export default Forms;
