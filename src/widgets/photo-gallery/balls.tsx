import React from 'react'
import styles from './styles.module.scss'
import { BsFillBalloonHeartFill } from 'react-icons/bs'

export function Balls() {
  const balls = 250

  const ballsSvgs = React.useMemo(() => (
    new Array(balls).fill(null).map((_, i) => (
      <BsFillBalloonHeartFill
        key={i}
        className={styles.heart}
        style={{
          top: `${(Math.random() * 125 - 5).toFixed(2)}%`,
          left: `${(Math.random() * 105 - 5).toFixed(2)}%`,
          fontSize: `${(Math.random()*4) + 2}rem`,
          opacity: `${(Math.random() * 0.7 + 0.3).toFixed(1)}`,
          '--multiplier': `${Math.random()*300 - 500}%`
        }}
      />
    ))
  ), [])

  return (
    <div className={styles.hearts}>
      {ballsSvgs}
    </div>
  )
}