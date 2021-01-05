import * as React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../TextError/TextError";

function TextArea({ name, label, className }) {
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <div className="flex flex-col space-y-2">
          {label ? <label htmlFor={name}>{label}</label> : null}
          <textarea id={name} {...field} className={className}></textarea>
          <ErrorMessage name={name} component={TextError}></ErrorMessage>
        </div>
      )}
    </Field>
  );
}

export default TextArea;
