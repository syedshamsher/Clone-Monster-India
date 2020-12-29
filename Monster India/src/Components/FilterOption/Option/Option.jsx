import React from "react";

function Option({ label }) {
  return (
    <div>
       <input type="checkbox" />
       <label> {label} </label>
    </div>
  );
}

export { Option }
