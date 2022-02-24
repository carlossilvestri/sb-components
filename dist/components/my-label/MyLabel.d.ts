/// <reference types="react" />
import "./my-label.css";
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
export declare const MyLabel: ({ AllCaps, color, label, size, fontColor }: MyLabelProps) => JSX.Element;
