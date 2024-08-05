'use client'
import React from 'react'

const MenuList = ({ open, handleClose }) => {
    return (
        <div className={`${open ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all fixed inset-0 bg-black/50 flex justify-end`}>

            <aside className={`${!open ? 'translate-x-48' : ''}transition-all w-48 bg-gray-500`}>

                <div onClick={handleClose} className="text-white text-right p-4 cursor-pointer">
                    X
                </div>
                <nav className="flex mt-4 flex-col gap-3 px-3">
                    <a href="#" className="text-white p-2">Enlace 1</a>
                    <a href="#" className="text-white p-2">Enlace 2</a>
                    <a href="#" className="text-white p-2">Enlace 3</a>


                </nav>

            </aside>


        </div>
    )
}

export default MenuList