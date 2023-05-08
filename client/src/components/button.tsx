import React from "react";
import cn from 'classnames'
// component
import Loading from './loading'

type Props = {
  label: string;
  disabled?: boolean;
  loading?: boolean;
  classname?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: any) => void;
}

const Button = ({ label, disabled = false, type = "button", loading = false, classname, onClick }: Props) => {
  return (
    <button
      className={cn([" text-white font-bold py-2 px-4 rounded", classname], {
        'bg-blue-500 hover:bg-blue-700': !disabled,
        'bg-gray-300': disabled
      })}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
    >
      <div className="flex">
        {loading && <Loading />}
        {label}
      </div>
    </button>
  )
}

export default Button;