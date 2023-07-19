import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import Me from '@/sussets/me.png'
import Dima from '@/sussets/dima.png'
import { BsArrowThroughHeartFill } from 'react-icons/bs'

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
      const listener = () => {
        setWindowHeight(window.innerHeight)
      }
      window.addEventListener('resize', listener)
      return () => window.removeEventListener('resize', listener)
    }
  }, [typeof window])

  return (
    <section className={styles.kissingMeAndDima} style={{ '--progress': progress }}>
      <BsArrowThroughHeartFill className={styles.heartScroll} />
      <Image src={Me} className={styles.me} alt='Виктор Щелочков' />
      <Image src={Dima} className={styles.dima} alt='Дмитрий новоселов' />
      <div className={styles.heart} />
    </section>
  )
}