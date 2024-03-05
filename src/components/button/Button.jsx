import React from "react";
import "./Button.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMinus } from "react-icons/fi";


const Button = React.forwardRef((props, ref) => {
  const {
    // loading,
    btnType = "",
    children,
    id,
    onClick,
    className,
    type,
    // disabled,
    minusOnClick,
    plusOnClick,
    ...rest
  } = props;
  var classNames = "";

  if (btnType === "save") {
    classNames += "btn_save";
  }


  return (
    <button
      // disabled={disabled}
      ref={ref}
      id={id}
      onClick={onClick}
      className={`px-3  ${classNames} ${className}`}
      {...rest}
      type={type}
      // onKeyDown={onKeyDown}
    >
       
        <span className="button_right" onClick={minusOnClick} ><FiMinus /></span>
        
      <span ref={ref} className="">
        {children}
      </span>
      <span className="button_left" onClick={plusOnClick}><AiOutlinePlus/></span>
      
    </button>
  );
});

export default Button;
