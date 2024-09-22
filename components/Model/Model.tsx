import React, { ReactNode } from 'react';

interface Props {
    children? : ReactNode
}

const Model: React.FC<Props> = ({children}: Props) => {
  return (
    <div className='fixed w-full h-screen z-50 top-0 left-0 bg-model'>
      {children}
    </div>
  )
}

export default Model;
