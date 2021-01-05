import * as React from "react";
import { Field, ErrorMessage } from "formik";

import TextError from "../TextError";

function Checkbox({ name, label, options }) {
  return (
    <Field name={name}>
      {({ field }) => {
        return (
          <div className="">
            <label htmlFor="">{label}</label>
            <div className="flex space-x-5">
              {options.map((option) => {
                return (
                  <div key={option.key} className="flex space-x-3 items-center">
                    <input
                      type="checkbox"
                      id={option.value}
                      {...field}
                      value={option.value}
                      checked={field.value.includes(option.value)}
                    />
                    <label htmlFor={option.value}>{option.key}</label>
                  </div>
                );
              })}
            </div>
            <ErrorMessage name={name} component={TextError} />
          </div>
        );
      }}
    </Field>
  );
}

export default Checkbox;
