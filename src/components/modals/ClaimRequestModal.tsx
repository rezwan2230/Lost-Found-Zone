import React from "react";
import FxModal from "./FxModal";
import LostFoundForm from "../form/LostFoundForm";
import FXInput from "../form/FXInput";
import FXTextarea from "../form/FxTextArea";
import { Button } from "@heroui/button";

interface IProps {
  id: string;
  questions: string[];
}

const ClaimRequestModal = ({ id, questions }: IProps) => {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <FxModal
      buttonClassName="flex-1"
      buttonText="Claim Request"
      title="Claim Request"
    >
      <LostFoundForm onSubmit={onSubmit}>
        {questions.map((question, index) => (
          <div className="mb-4" key={index}>
            <p className="mb-1 ">{question}</p>
            <FXInput
              label={`Answer - ${index + 1}`}
              name={`answer-${index + 1}`}
            />
          </div>
        ))}
        <FXTextarea name="description" label="description" />
          <Button  className="w-full flex-1 mt-2 mb-4" size="lg" type="submit">Send</Button>
      </LostFoundForm>
    </FxModal>
  );
};

export default ClaimRequestModal;
