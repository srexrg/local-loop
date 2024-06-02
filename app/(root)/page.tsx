import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Home() {
  return (
    <div>
      Home Page

      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default Home
