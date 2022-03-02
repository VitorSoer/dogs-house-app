import React from 'react'
import { SkeletonStyle, SkeletonWrapper } from './styles/skeleton.styles'

function Skeleton() {
  return (
      <SkeletonWrapper>
        { 
            [...Array(6)].map((_, i) => <SkeletonStyle key={i}/>)
        }
    </SkeletonWrapper>
  )
}

export default Skeleton