import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import { AiFillHeart } from 'react-icons/ai'
import { BsFillBalloonHeartFill } from 'react-icons/bs'
import Me from '@/sussets/me.png'
import Dima from '@/sussets/dima.png'

export function KissingMeAndDima() {
  const [scrollPosition, setScrollPosition] = React.useState(0)
  const [windowHeight, setWindowHeight] = React.useState(1080)
  const progress = Math.max(0, Math.min(1, (scrollPosition - windowHeight * 0) / (windowHeight * (4 - 1))))

  React.useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    }
    window.addEventListener('scroll', updatePosition)
    updatePosition()
    return () => window.removeEventListener('scroll', updatePosition)
  }, [setScrollPosition])

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight)
    }
  }, [typeof window, window.innerHeight])

  return (
    <section className={styles.kissingMeAndDima} style={{ '--progress': progress }}>
      <Image src={Me} className={styles.me} alt='Виктор Щелочков' />
      <Image src={Dima} className={styles.dima} alt='Дмитрий новоселов' />
      <div className={styles.heart}>
        <AiFillHeart />
      </div>
    </section>
  )
}