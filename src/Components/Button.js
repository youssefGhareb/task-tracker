

const Button = ({ bg, text, onClick, pd }) => {
    return (
        <button onClick={onClick}
            className="btn"
            style={{ backgroundColor: bg, padding: pd }}>
            {text}
        </button>
    )
}

export default Button