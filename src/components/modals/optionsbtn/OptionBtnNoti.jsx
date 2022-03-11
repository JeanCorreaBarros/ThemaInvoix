import React from 'react'

export const OptionBtnNoti = ({color,menssages}) => {
  return (
    <div className={` w-11/12 h-10 rounded-xl   ${color}  ` }>
        <div className="h-full flex justify-center items-center ">
           <h3 className="text-white  text-lg">{menssages}</h3>
        </div>
    </div>
  )
}
