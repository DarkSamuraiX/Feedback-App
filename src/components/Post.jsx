
import { useParams, Navigate,Link, Routes, Route } from "react-router-dom"
function Post() {
    const status = 200;
    const parmas = useParams();

    // const navigate = useNavigate()
    // const onClick = () => {
    //   navigate("/about")
    // }

    // if (status === 404) {
    //   return <Navigate to="/notfound" />
    // } else if (status === 500) {
    //   return <Navigate to="/500-Internal-Error"/>
    // }

  return (
    <div>
        <h1>You've been searching for Post</h1>
        <Link to={"/about"}>
          <button >Go to About Us Page</button>
        </Link>
        <Routes>
          <Route path='/show' element={<h1>Welcome to show page</h1>}/>
        </Routes>
        
    </div>
  )
}

export default Post
