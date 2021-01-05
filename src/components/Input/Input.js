import * as React from "react";
import { Field, ErrorMessage } from "formik";
import cx from "classnames";

import TextError from "../TextError/TextError";

export default function Input({ name, label, type }) {
  return (
    <Field name={name}>
      {({ field, meta }) => {
        const inputClassName = cx(
          "border mt-3 px-5 py-2",
          meta.error && meta.touched ? "border-red-500" : "border-gray-700"
        );
        return (
          <div className="flex flex-col space-y-2">
            {label ? <label htmlFor={name}>{label}</label> : null}
            <input
              className={inputClassName}
              id={name}
              {...field}
              type={type ? type : "text"}
            />
            <ErrorMessage name={name} component={TextError} />
          </div>
        );
      }}
    </Field>
  );
}
