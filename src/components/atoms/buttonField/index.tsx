import React  from "react";
import { useHistory } from "react-router-dom"
import "./index.css"

interface Props {
    content: string,
    action?: any,
    func?: any
}

const ButtonField:React.FC<Props> = ({ content, action, func }) => {
    const history = useHistory()

    return (
        <input
            type="submit"
            onClick={() => {action ? history.push(action) : func()}}
            className="buttonBox__button"
            value={content}
        />
    )
}

export default ButtonField;
