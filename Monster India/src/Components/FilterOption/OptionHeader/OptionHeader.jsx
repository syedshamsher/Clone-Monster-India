import React from "react";
import styles from '../style.module.css';


function OptionHeader({ label, handleClick, open }) {
  return (
    <div className={styles.main}>
      <div>{label}</div>
      {
        !open ? 
        <div className={styles.plus} onClick={handleClick}>+</div> :
        <div className={styles.minus} onClick={handleClick}>-</div> 
      }

    </div>
  );
}

export { OptionHeader }