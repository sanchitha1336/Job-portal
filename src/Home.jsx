import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Home() {
    const location =useLocation();
  return (
    <div>Home {location.state.name} <Link to={"/signup"}>Back to signup</Link></div>
  )
}

export default Home