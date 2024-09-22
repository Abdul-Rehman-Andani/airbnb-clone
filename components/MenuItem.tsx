"use client";

import React from "react";

interface Props {
    label : string,
    onClick : () => void
}

const MenuItem : React.FC<Props> = ({label} : Props) => {
  return (
    <div className='hover:bg-neutral-200 transition cursor-pointer'>
        <div className="p-2">
        {label}
        </div>
    </div>
  )
}

export default MenuItem;
