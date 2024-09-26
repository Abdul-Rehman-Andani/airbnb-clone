"use client"

import React, { ReactNode } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { RxCross2 } from "react-icons/rx";
import { close } from '@/hooks/modelSlice';


interface Props {
  children?: ReactNode;
  label : string
}

const Model: React.FC<Props> = ({ children, label }: Props) => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store: any) => store.model);
  
  return (
    <>
       
        <div className="fixed w-full h-screen z-50 top-0 left-0 bg-model flex place-items-center">
          <div className='bg-white rounded-md max-w-md mx-auto w-full'>
            <div className='model-header p-4 flex justify-between items-center'>
              <p>{label}</p>
              <RxCross2 className='font-bold cursor-pointer' onClick={() => dispatch(close())}/>
            
            </div>
            <hr />
            <div className="model-body p-4">
              {children}
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Model;
