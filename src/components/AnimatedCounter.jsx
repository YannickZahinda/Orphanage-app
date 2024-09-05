import React from 'react'
import useCountAnimation from '../hooks/useCountAnimation'

const AnimatedCounter = ({start, end, duration = 7000, label}) => {
  const count = useCountAnimation(start, end, duration);

  return (
   <div className="text-center">
      <div className="text-6xl font-bold mb-2">{count.toLocaleString()}</div>
      <div className="uppercase tracking-wide">{label}</div>
    </div>
  )
}

export default AnimatedCounter