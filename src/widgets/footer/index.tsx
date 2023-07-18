import Link from 'next/link'
import styles from './styles.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href='https://instagram.com/vityaczech'>🐱 я</Link>
      ❤️
      <Link href='https://instagram.com/devio.10'>ты 🐰</Link>
    </footer>
  )
}