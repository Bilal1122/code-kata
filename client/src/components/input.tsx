import React from "react";

interface TextFieldProps {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  type?: string;
  value?: string | number;
  onChange: (e: any) => void;
}

const TextField = ({ label, name, value, placeholder, required = false, type = 'text', onChange }: TextFieldProps) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type={type}
        id={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        value={value}
      />
    </div>
  )
}

export default TextField
