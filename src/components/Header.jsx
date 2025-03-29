import { Link } from "react-router-dom"

function Header({text = "Feedback UI"}) {
  return (
    <header style={{backgroundColor: "rgba(0,0,0,0.4)", padding: "10px 0"}}>
        <div className="container">
            <Link to="/" style={{textDecoration: "none", color: "#ff6a95"}}>
              <h2>{text}</h2>
            </Link>
        </div>
    </header>
  )
}


export default Header