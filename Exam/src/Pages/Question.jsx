import React from 'react'
import { useParams } from 'react-router-dom'
function Question() {
    const{subid} = useParams()
  return (
    <div>{subid}</div>
  )
}

export default Question