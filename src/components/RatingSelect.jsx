import {useState} from "react"

function RatingSelect({select}) {
    const [selected,setSelected] = useState(10)

    const handleChange = (e) => {
        setSelected(Number(e.currentTarget.value))
        select(Number(e.currentTarget.value))
        
    }

    let ratingItems = [];
    for (let i = 0; i <= 10; i++) {
        ratingItems.push(
            <li key={i}>
                <input type="radio" id={`num${i}`} name="rating" value={`${i}`} onChange={handleChange} checked={selected === i} />
                <label htmlFor={`num${i}`}>{i}</label>
            </li>
        )
    }


    return (
    <div>
        <ul className="rating">
            {ratingItems.map((item,index) => (
                item
            ))} 
        </ul>
    </div>
    )
}

export default RatingSelect