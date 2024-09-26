import React from 'react';

interface Props {
    label : string
}

const Heading : React.FC<Props> = ({label} : Props) => {
  return (
    <>
     <h1 className='text-2xl'>{label}</h1> 
    </>
  )
}

export default Heading;
