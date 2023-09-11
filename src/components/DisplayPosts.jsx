import { Link } from 'react-router-dom'

function DisplayPosts({ posts }){
    return (
      <ul className="postList">
        {
          posts.map((post)=> {
            return (
              <Link to={`/posts/${post.id}`} key={post.id}>
                <li >{post.title}</li>
              </Link>
            )
          })
        }
      </ul>
    )
  }

  export default DisplayPosts