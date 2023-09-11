import { useParams } from 'react-router-dom'

const DisplayUser = ({ users })=> {
    const params = useParams()
    const id = params.id*1

    const user = users.find( user => user.id === id)
    if(!user){
        return null
    }
    return (
        <div>
            <h2>{user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone Number: {user.phone}</p>
        </div>
    )
  }

  export default DisplayUser