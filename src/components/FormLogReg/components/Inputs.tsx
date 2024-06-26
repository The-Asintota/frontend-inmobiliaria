import React from 'react'
import InputComponent from './InputComponent'

interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  icon?: string;
}

interface InputsProps {
  inputs: InputProps[];
}

const Inputs: React.FC<InputsProps> = ({ inputs }) => {
  return (
    <>
      {inputs.map((input) => (
        <InputComponent key={input.id} input={input} />
      ))}
    </>
  )
}

export default Inputs
