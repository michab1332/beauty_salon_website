import "./BreakSection.css"

export default function BreakSection({ text }) {
    return (
        <div className='breakSection'>
            <div className="breakSection__textWrapper">
                <p className="breakSection__textWrapper__text">{text}</p>
            </div>
        </div>
    )
}
