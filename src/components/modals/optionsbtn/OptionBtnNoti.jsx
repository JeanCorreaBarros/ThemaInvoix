import React from 'react'

export const OptionBtnNoti = ({color,menssages}) => {
  return (
    <div className={` w-11/12 h-full rounded-xl mt-2   ${color} flex fle` }>
        <div className="text-center ">
           <h3 className="text-white">{menssages}</h3>
        </div>
    </div>
  )
}
