import React from "react";
import { Field, ErrorMessage } from "formik";
import cx from "classnames";

import TextError from "../TextError";
function Select({ name, label, options }) {
  return (
    <Field name={name}>
      {({ field, meta }) => {
        const inputClassName = cx(
          "border mt-3 px-5 py-2 bg-white",
          meta.error && meta.touched ? "border-red-500" : "border-gray-700"
        );
        return (
          <div className="flex flex-col space-y-2">
            {label ? <label htmlFor={name}>{label}</label> : null}
            <select name={name} id={name} {...field} className={inputClassName}>
              {options.map((option) => {
                return (
                  <option value={option.value} key={option.key}>
                    {option.key}
                  </option>
                );
              })}
            </select>
            <ErrorMessage name={name} component={TextError} />
          </div>
        );
      }}
    </Field>
  );
}

export default Select;
