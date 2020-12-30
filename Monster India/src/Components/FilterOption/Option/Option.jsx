import React from "react";

function Option({ label, handleChange }) {
  return (
    <div>
       <input type="checkbox" value={label} onChange={(event) => handleChange(event)} />
       <label> {label} </label>
    </div>
  );
}

export { Option }
