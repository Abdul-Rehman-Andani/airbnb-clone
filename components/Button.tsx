import React from 'react';

interface Props {
    value : string | number
    full? :boolean;
    extra? : string
}

const Button : React.FC<Props> = ({full, value, extra} : Props) => {
  return (
    <>
      <button className={`${full && `w-full`} ${extra} bg-primary text-white rounded-md py-2` }  >{value}</button>
    </>
  )
}

export default Button;
