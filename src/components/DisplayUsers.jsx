import { Link } from "react-router-dom"

function DisplayUsers({ users }){
    return (
      <ul>
        {
          users.map((user)=> {
            return (
              <Link to={`/users/${user.id}`} key={user.id}>
                <li>{ user.name }</li>       
              </Link>
            )
          })
        }
      </ul>
    )
  }

  export default DisplayUsers