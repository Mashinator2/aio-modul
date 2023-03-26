import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.con}>
        <div className={styles.logo_con}>
            <div className={styles.logo}>AIO</div>
            <div className={styles.line}></div>
            <div className={styles.text}>Сервис подбора
банковских услуг</div>
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.nav_link}>Кредитные карты</a>
          <a href="#" className={styles.nav_link}>Кредиты</a>
          <a href="#" className={styles.nav_link}>Займы</a>
          <a href="#" className={styles.nav_link}>рко</a>
        </nav>
    </div>
  )
}

export default Header