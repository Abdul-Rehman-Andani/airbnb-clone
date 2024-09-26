import React, { ReactNode } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface Props {
    name: string;
    type: string;
    placeholder?: string;
    icon?: ReactNode;
    register: UseFormRegister<any>;
    
}

const Input: React.FC<Props> = ({ name, type, placeholder, icon, register }) => {
  return (
    <div className='flex flex-col mt-4'>
      <div className='flex items-center gap-3 px-3 py-2 border rounded-md'>
        {icon}
        <input
          type={type}
          placeholder={placeholder}
          className='flex-1 outline-none'
          {...register(name, { required: `${name} is required` })} // Correctly spread register here
        />
      </div>
      <label htmlFor={name} className='text-sm text-red-500'>{/* Handle error message here */}</label>
    </div>
  );
}

export default Input;
