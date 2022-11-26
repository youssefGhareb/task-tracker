

const Button = ({ bg, text, click, pd }) => {
    return (
        <button onClick={click}
            className="btn"
            style={{ backgroundColor: bg, padding: pd }}>
            {text}
        </button>
    )
}

export default Button