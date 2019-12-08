import React from "react";
import styles from "./FormsControls.module.css"
import {placeholder} from "@babel/types";
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";


export const FormsControl = ({input, meta: {touched, error}, children}) => {

    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
               {children}
            </div>
            {touched && error && <span>{error}</span>}
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

export const createField = (placeholder, name, validators, component, props={}, text="") => (
    <div>
    <Field placeholder={placeholder} name={name}
           validate={validators}
           component={component}
        {...props}
    /> {text}
    </div>
);