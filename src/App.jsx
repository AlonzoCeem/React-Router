import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useLocation, Routes, Route } from 'react-router-dom'
import DisplayUsers from './components/DisplayUsers'
import DisplayPosts from './components/DisplayPosts'
import DisplayUser from './components/DisplayUser'
import DisplayPost from './components/DisplayPost'

function App() {
  const [users, setUsers] = useState([]) // users consist of: "id", "name", "username", "email", "address", "phone", "website", & "company"
  const [posts, setPosts] = useState([]) // posts consist of: "userId", "id", "title", & "body".

  const location = useLocation()
  const pathName = location.pathname

  useEffect(()=> {
    const fetchUsers = async function(){
      const response = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
      const users = response.data
      setUsers(users)
    }
    fetchUsers()
  }, [])

  useEffect(()=> {
    const fetchPosts = async function(){
      const response = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts')
      const posts = response.data
      setPosts(posts)
    }
    fetchPosts()
  }, [])

  return (
    <>
      <nav>
        <Link to="/" className={pathName === "/" ? "selected" : ""}>Home</Link>
        <Link to="/users" className={pathName === "/users" ? "selected" : ""}>Users({ users.length })</Link>
        <Link to="/posts" className={pathName === "/posts:" ? "selected" : ""}>Posts({posts.length})</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="users" element={<DisplayUsers users={users}/>}/>
        <Route path="posts" element={<DisplayPosts posts={posts}/>}/>
        <Route path="users/:id" element={<DisplayUser users={users}/>}/>
        <Route path="posts/:id" element={<DisplayPost posts={posts}/>}/>
      </Routes>
    </>
  )
}

export default App
