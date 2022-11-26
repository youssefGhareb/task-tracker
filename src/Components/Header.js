import Button from "./Button"

const Header = ({ title, click, showAdd }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button bg={showAdd ? "red" : "green"} text={showAdd ? "Close" : "Show"} click={click} />
        </header>
    )
}

export default Header