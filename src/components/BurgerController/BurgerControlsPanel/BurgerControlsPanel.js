// This component displays the labels and buttons for each ingredient present in controls

import React from "react";
import styles from "./BurgerControlsPanel.module.css";
import { BurgerControl } from "../BurgerControl/BurgerControl";

const CONTROLS = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

export const BurgerControlsPanel = (props) => {
  return (
    <div className={styles.BuildControls}>
      {CONTROLS.map((ctrl) => (
        <BurgerControl
          key={ctrl.label}
          label={ctrl.label}
          add={() => props.addIngredients(ctrl.type)}
          remove={() => props.removeIngredients(ctrl.type)}
          disable={props.disabled[ctrl.type]}
        />
      ))}
    </div>
  );
};
