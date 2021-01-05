import React from "react";
import FormLayout from "../../components/FormLayout";
import AddParticipantForm from "../../components/AddParticipantForm";

function AddParticipant(props) {
  return (
    <FormLayout>
      <h1 className="text-center text-6xl bold">Add your information</h1>
      <AddParticipantForm />
    </FormLayout>
  );
}

export default AddParticipant;
