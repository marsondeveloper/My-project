import React from "react";
import styles from "./FormsControls.module.css"


export const FormsControl = ({input, meta, child, ...props}) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
               {props.children}
            </div>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    )
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
  return  <FormsControl {...props}><textarea {...input} {...restProps}  /></FormsControl>


};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormsControl {...props}><input {...input} {...restProps}  /></FormsControl>


};