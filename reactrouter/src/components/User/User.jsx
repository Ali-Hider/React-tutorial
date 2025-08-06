import React from 'react'
import { useParams } from 'react-router'
function User() {
    const {userid} = useParams()
  return (
     <div className='bg-gray-500 w-full'>
      <div className='text-white text-3xl p-4 text-center max-w-screen-xl mx-auto'>
      User: {userid}
    </div>
    </div>
  )
}

export default User
