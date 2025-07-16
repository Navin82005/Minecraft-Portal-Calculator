import "./MCButton.css";

const MCButton = ({ onClick, text, children }) => {
    return (
        <button onClick={onClick} className='mc-button'>{text || children}</button>
    )
}

export default MCButton