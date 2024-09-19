import React, { ReactNode } from "react"

interface Props {
    children : ReactNode
}

const Container : React.FC<Props> = ({children} : Props) => {
  return (
    <div className='w-full lg:px-20 md:px-10 sm:px-4 px-2'>
      {children}
    </div>
  )
}

export default Container
