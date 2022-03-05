import React from 'react'

const OptionBtnPlus = (props) => {
  return (
    <button className=" w-full hover:bg-gray-200 flex justify-center item-center mt-1 ">
        <div className="w-full border  flex justify-start item-center">
          <props.icon className="mt-1 ml-5 text-blue-400"/> 
          <h3 className="ml-2 hover:underline">{props.title}</h3>
        </div> 
      </button>
  )
}

export default OptionBtnPlus