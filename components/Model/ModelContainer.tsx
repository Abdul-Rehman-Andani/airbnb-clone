"use client"

import { useSelector } from 'react-redux';
import Model from './Model';

const ModelContainer = () => {
    const {isOpen} = useSelector((store : any) => store.model);

  return (
    <>
     {
        isOpen && <Model />
     } 
    </>
  )
}

export default ModelContainer;
