import React from "react";
import useCount from "../hooks/useCount";
import useForm from "../hooks/useForm";
import Form from "./Form";

const CustomHookCount = () => {
  const [count, increase] = useCount();
  const [form, change] = useForm();
  const onChange = (field, e) => {
    change({ [field]: e });
  };
  return (
    <div>
      <h3>CustomHookCount: {count}</h3>
      <button onClick={increase}>increaseCount</button>
      <Form form={form} change={onChange} />
    </div>
  );
};

export default CustomHookCount;
