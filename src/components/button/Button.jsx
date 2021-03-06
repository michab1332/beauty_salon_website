import { useState } from 'react'

export default function Button({ text, onClick }) {
    const [scale, setScale] = useState(1)
    const onMouseEnter = () => {
        setScale(1.05)
    }
    const onMouseLeave = () => {
        setScale(1)
    }
    return (
        <button onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={{
            width: 180,
            height: 40,
            backgroundColor: "#000",
            color: "#fff",
            outline: "none",
            border: "none",
            transition: "transform .1s ease-in",
            cursor: "pointer",
            transform: `scale(${scale})`
        }}>
            {text}
        </button>
    )
}
