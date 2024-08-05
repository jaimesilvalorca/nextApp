import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 border-t mt-10">
      <div className="container m-auto py-2 text-sm text-gray-700 flex justify-between items-center">
        <p>Desarrollado por Jaime</p>
        <div>

        <p>Powered by</p>
        <Image src={'/next.svg'} alt="logo" height={50} width={50}/>
        </div>
      </div>


    </footer>
  )
}

export default Footer