import React from "react";

interface SelectProps {
  label: string;
  name: string;
  placeholder: string;
  value?: string;
  options?: { label: string, value: string }[]
  selectedOption?: { label: string, value: string };
  onChange: (e: any) => void;
}

const Select = ({ label, name, placeholder, value, options, onChange }: SelectProps) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <select id={name} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>{options.find((opt) => opt.value === value)?.label || placeholder}</option>
        {
          options.map(({ label, value }) => (
            <option key={label} value={value}>{label}</option>
          ))
        }
      </select>
    </div>
  )
}

export default Select
