import React, { useRef } from 'react'
import styles from '../styles/Layout.module.css'
import Navbar from './Navbar/index'
import Projects from './Projects';
import About from './About';

const Layout = ({ children }) => {

  const executeScroll = (ref) => {
    ref.current.scrollIntoView()
  }

  return (
    <>
      <Navbar />
      <div id='about' className={styles.container}>
        <main className={styles.main}>
          {children}
          <About />
        </main>
      </div>
      <div id='projects' className={styles.container}>
        <main className={styles.main}>
          <Projects />
        </main>
      </div>
   </>
  )
}

export default Layout;