import * as React from "react";
import cx from "classnames";
import { Formik, Form, Field, FieldArray } from "formik";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { FaSpinner } from "react-icons/fa";
import * as Yup from "yup";

import Input from "../Input";
import Textarea from "../TextArea";
import RadioButton from "../RadioButton/RadioButton";

const radioOptions = [
  { key: "Boy", value: "boy" },
  { key: "Girl", value: "girl" },
  { key: "No binary", value: "nobinary" },
];

const initialValues = {
  name: "",
  email: "",
  phones: [""],
  country: "",
  bio: "",
  address: "",
  gender: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  // phone: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  bio: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
});
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function AddParticipantForm(props) {
  const inputClassName = cx(
    "border border-gray-700 mt-3 px-5 py-2 flex-grow w-full"
  );

  const onSubmit = async (values, onSubmitProps) => {
    await delay(3000);
    console.log(values);
    onSubmitProps.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        const buttonClassName = cx(
          "border-gray-600 uppercase mt-5 text-2xl px-5 py-2 text-white flex",
          formik.isSubmitting ? "bg-primary-100" : "bg-primary-200"
        );
        return (
          <Form className="border border-tertiary p-3 space-y-5">
            <h2 className="text-2xl mb-5">Personal Information</h2>
            <div className="grid gap-x-10 gap-y-5 grid-cols-2">
              <Input name="name" label="Name" />
              <Input name="email" label="Email" />
            </div>

            <div className="flex flex-col ">
              <label htmlFor="phone">Contact number</label>
              <FieldArray name="phones">
                {(props) => {
                  const { push, remove, form } = props;
                  const { values } = form;
                  const { phones } = values;
                  return (
                    <>
                      {phones.map((phone, index) => (
                        <div key={index} className="flex items-center">
                          <Field
                            name={`phones[${index}]`}
                            className={inputClassName}
                          />
                          {index > 0 && (
                            <button type="button" onClick={() => remove(index)}>
                              <MdRemoveCircle />
                            </button>
                          )}
                          <button
                            type="button"
                            className="ml-1"
                            onClick={() => push("")}
                          >
                            <MdAddCircle />
                          </button>
                        </div>
                      ))}
                    </>
                  );
                }}
              </FieldArray>
            </div>
            <div className="grid gap-x-10 gap-y-5 grid-cols-2">
              <Input name="country" label="Country" />
              <Input name="address" label="Address" />
            </div>
            <div className="flex flex-col ">
              <Textarea name="bio" label="Bio" className={inputClassName} />
            </div>
            <div className="grid gap-x-10 gap-y-5 grid-cols-2">
              <RadioButton
                name="gender"
                label="Gender"
                options={radioOptions}
              />
            </div>
            <button
              type="submit"
              className={buttonClassName}
              disabled={!formik.isValid || formik.isSubmitting}
            >
              {formik.isSubmitting ? (
                <FaSpinner className="animate-spin" />
              ) : (
                "Submit"
              )}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default AddParticipantForm;
