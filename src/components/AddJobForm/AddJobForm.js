import React from "react";
import cx from "classnames";
import { Formik, Form } from "formik";
import { FaSpinner } from "react-icons/fa";
import * as Yup from "yup";
import Input from "../Input";
import Select from "../Select/Select";
import Checkbox from "../Checkbox/Checkbox";

const selectData = [
  { value: "remote", key: "Remote Job" },
  { value: "onsite", key: "On site Job" },
  { value: "flexible", key: "Flexible job" },
];

const checkBoxData = [
  { value: "frontend", key: "Front end" },
  { value: "backend", key: "Back end" },
  { value: "qa", key: "QA" },
  { value: "database", key: "Data Base" },
];

const initialValues = {
  companyName: "",
  companyPerson: "",
  companyEmail: "",
  companyPhone: "",
  positionName: "",
  workType: "",
  category: "",
  description: "",
  work_type: "",
  area: [],
};
const validationSchema = Yup.object({
  companyName: Yup.string().required("Required"),
  companyPerson: Yup.string().required("Required"),
  companyEmail: Yup.string().email("Invalid email format").required("Required"),
  companyPhone: Yup.number("A number is required")
    .positive("Invalid number format")
    .integer("Invalid number format")
    .required("Required"),
  positionName: Yup.string().required("Required"),
  workType: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function AddJobForm(props) {
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
          "border-gray-600 uppercase  mt-5 text-2xl px-5 py-2  text-white flex",
          formik.isSubmitting ? "bg-primary-100" : "bg-primary-200"
        );
        return (
          <Form className="border border-tertiary p-3 space-y-5">
            <h2 className="text-2xl mb-5">Company Information</h2>
            <div className="grid gap-x-10 gap-y-5 grid-cols-2">
              <Input name="companyName" label="Company Name" />

              <Input name="companyPerson" label="Company Representant" />
              <Input name="companyEmail" label="Company Email" />
              <Input name="companyPhone" label="Company Phone" />
            </div>
            <h2 className="text-2xl mt-5 mb-5">Position Information</h2>
            <div className="grid gap-x-10 gap-y-5 grid-cols-2">
              <Input name="positionName" label="Position Name" />
              <Input name="workType" label="Type of work" />
              <Input name="category" label="Position Category" />
              <Input name="description" label="Work Description" />
            </div>
            <div className="grid gap-x-10 gap-y-5 grid-cols-2 items-center">
              <Select
                name="work_type"
                label="Type of work"
                options={selectData}
              />
              <Checkbox name="area" label="Job area" options={checkBoxData} />
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

export default AddJobForm;
