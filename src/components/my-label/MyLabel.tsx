import React from "react";
import "./my-label.css";
import { AllCaps } from "../../stories/components/MyLabel.stories";

export interface MyLabelProps {
  /**
   * Este es el mensaje a mostrar en la etiqueta
   */
  label: string;
  /**
   * Si quiere todo capitalizado
   */
  AllCaps?: boolean;
  /**
   * Colores basicos
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Este es el tamaño de la etiqueta
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Color personalizado de la fuente
   */
  fontColor?: string;
}

export const MyLabel = ({
  AllCaps = false,
  color = "primary",
  label = "No Label",
  size = "normal",
  fontColor
}: MyLabelProps) => {
  return (
    <>
      <span style={{ color: fontColor}} className={`label ${size} text-${color}`}>
        {AllCaps ? label.toUpperCase() : label}
      </span>
    </>
  );
};
export default MyLabel;
