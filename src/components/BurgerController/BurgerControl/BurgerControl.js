//This is a re-usable component for the burger controller

import React from "react";
import styles from "./BurgerControl.module.css";

export const BurgerControl = (props) => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.label}</div>
      <button
        className={styles.Less}
        onClick={props.remove}
        disabled={props.disable}
      >
        Less
      </button>
      <button className={styles.More} onClick={props.add}>
        More
      </button>
    </div>
  );
};
