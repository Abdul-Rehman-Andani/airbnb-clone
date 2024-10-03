"use client"

import React, { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { RxCross2 } from "react-icons/rx";

// Define the interface for props
interface Props {
  children?: ReactNode;
  label: string;
  close: () => { type: string };  // This should be an action creator
}

const Model: React.FC<Props> = ({ children, label, close }: Props) => {
  const dispatch = useDispatch(); // Use useDispatch to dispatch actions

  return (
    <div className="fixed w-full h-screen z-50 top-0 left-0 bg-model flex place-items-center">
      <div className="bg-white rounded-md max-w-md mx-auto w-full">
        <div className="model-header p-4 flex justify-between items-center">
          <p>{label}</p>
          {/* Dispatch the close action on click */}
          <RxCross2 className="font-bold cursor-pointer" onClick={() => dispatch(close())} />
        </div>
        <hr />
        <div className="model-body p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Model;
