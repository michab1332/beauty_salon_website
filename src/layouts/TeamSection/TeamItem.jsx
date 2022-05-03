import "./TeamSection.css"

export default function TeamItem({ imgSrc, name, desc }) {
    return (
        <div className="teamItem">
            <figure className="teamItem__figure">
                <img src={imgSrc} alt={name} className="teamItem__figure__img" />
                <figcaption className="teamItem__figure__figcaption">{name}</figcaption>
            </figure>
            <p className="teamItem__desc">{desc}</p>
        </div>
    )
}
