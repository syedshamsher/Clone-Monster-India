import React from "react";

function Option({ label, handleChange, name,  }) {
  return (
    <div>
       <input name={name} type="checkbox" value={label} onChange={(event) => handleChange(event)} />
       <label> {label} </label>
    </div>
  );
}

export { Option }
