import React from "react";
import FormLayout from "../../components/FormLayout";
import AddJobForm from "../../components/AddJobForm";

function AddProject(props) {
  return (
    <FormLayout>
      <h1 className="text-center text-6xl bold">Make your offer real</h1>
      <AddJobForm />
    </FormLayout>
  );
}

export default AddProject;
