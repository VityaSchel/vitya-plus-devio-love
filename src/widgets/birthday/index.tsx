import React from 'react'
import styles from './styles.module.scss'
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown'
import Cat1 from '@/sussets/love14.jpeg'
import Cat2 from '@/sussets/love15.jpeg'
import Image from 'next/image'
import cx from 'classnames'
import Arrow1 from './arrow1.svg'

export function Birthday() {
  const AUGUST = 8-1

  const age = React.useMemo(() => {
    const years = new Date().getFullYear() - 2004
    if(new Date().getMonth() >= AUGUST) return years
    else return years - 1
  }, [])

  const isBirthday = true//new Date().getMonth() === AUGUST && new Date().getDate() < 7

  const newBirthday = React.useMemo(() => {
    const d = new Date()
    d.setFullYear(new Date().getMonth() < AUGUST ? d.getFullYear() : d.getFullYear() + 1)
    d.setMonth(AUGUST)
    d.setDate(1)
    d.setHours(0)
    d.setMinutes(0)
    d.setSeconds(0)
    return d
  }, [])

  const [scrollPosition, setScrollPosition] = React.useState(0)
  const [windowHeight, setWindowHeight] = React.useState(1080)
  const progress = Math.max(0, Math.min(1, (scrollPosition - windowHeight * 3.5) / (windowHeight * 0.75)))

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
    <section className={styles.birthday} style={{ '--progress': progress }}>
      {!isBirthday && (
        <div className={styles.timer}>
          <FlipClockCountdown 
            to={newBirthday} 
          />
        </div>
      )}
      {isBirthday && (
        <div className={styles.cat}>
          <Image src={Cat1} alt='котик' priority />
          <div className={styles.content}>
            <Arrow1 />
            <span>котик это ты</span>
          </div>
          <Image src={Cat2} alt='котик' priority />
        </div>
      )}
      <span className={cx(styles.label, { [styles.translateAnimation]: !isBirthday })}>
        {isBirthday
          ? `Happy ${age}st birthday, Dima!!!`
          : `until your ${age+1}st birthday`}
      </span>
    </section>
  )
}

