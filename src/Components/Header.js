import Button from "./Button"

const Header = ({ title }) => {
    const onCLick = () => {
        console.log("Click");
    }
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button bg="green" text="Add" onClick={ onCLick } />
        </header>
    )
}

export default Header