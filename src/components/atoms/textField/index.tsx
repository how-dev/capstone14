import React from "react";
import "./index.css"

interface Props {
    placeholder: string,
    type: string,
    onChange?: any,
    func?: any,
    value?: any
}

const TextField:React.FC<Props> = ({ placeholder, type, onChange, value }) => {
    return (
        <input
            className="textFieldBox__input"
            placeholder={placeholder}
            name={placeholder}
            type={type}
            onChange={onChange}
            value={value}
        />
    )
}

export default TextField
