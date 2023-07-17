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
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" width={'1em'} height={'1em'} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id='g1'>
              <stop stop-color='#ed2224' />
              <stop offset='.068' stop-color='#f35b22' />
              <stop offset='.135' stop-color='#f99621' />
              <stop offset='.203' stop-color='#f5c11e' />
              <stop offset='.27' stop-color='#f1eb1b' />
              <stop offset='.3' stop-color='#f1eb1b' />
              <stop offset='.33' stop-color='#f1eb1b' />
              <stop offset='.442' stop-color='#63c720' />
              <stop offset='.553' stop-color='#0c9b49' />
              <stop offset='.665' stop-color='#21878d' />
              <stop offset='.777' stop-color='#3954a5' />
              <stop offset='.888' stop-color='#61379b' />
              <stop offset='1' stop-color='#93288e' />
            </linearGradient>
            <clipPath id="heart-mask">
              <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"></path>
            </clipPath>
          </defs>
          {/* <mask id='heart-mask'>
            <polygon fill="#ffffff" points="100,10 40,198 190,78 10,78 160,198"></polygon>
            {/* <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"></path> */}
          {/* </mask> */}
          <rect width='1024px' height='1024px' fill='url(#g1)' clipPath="url(#heart-mask)" />
        </svg>
      </div>
    </section>
  )
}