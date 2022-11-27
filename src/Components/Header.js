import Button from "./Button"
import { AiOutlineCloseSquare } from 'react-icons/ai'

const Header = ({ title, click, showAdd }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button bg={showAdd ? "white" : "green"} text={showAdd ? <AiOutlineCloseSquare className="close-icon" /> : "Show"} click={click} />
        </header>
    )
}

export default Header