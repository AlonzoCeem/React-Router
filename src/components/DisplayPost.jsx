import { useParams } from "react-router-dom"

const DisplayPost = ({ posts })=> {
    const params = useParams()
    const id = params.id*1

    const post = posts.find( post => post.id === id)
    if(!post){
        return null
    }
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>

    )
  }

  export default DisplayPost