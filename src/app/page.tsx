"use client";
import Image from 'next/image'
import { Inter } from '@next/font/google'
import portrait from '../assets/homeArjun.jpg'
import styles from './page.module.css'
import '../app/globals.css';
import bg from '../assets/patternBackground.png'
import Link from 'next/link'
import { useState } from 'react';


export default function Home() {



  return (
    
    <body className={styles.everything}>
    <main className={styles.main}>
      <div className={styles.menuDiv}>
        <div className={styles.menuBar}>
        <Link href="/contact" className={styles.menuButtons}>
            Contact
        </Link>
        <Link href="/projects" className={styles.menuButtons}>       
            Projects
        </Link>
        <Link href="/aboutMe" className={styles.menuButtons}>
            About Me
        </Link>
        <Link href="/" className={styles.menuButtons}>
            Home 
        </Link>
        </div>
      </div>
      <div className={styles.texts}>
        <div className={styles.description}>
          <h1 className={styles.name}>
            Arjun Rawal
          </h1>
            <h3 className={styles.headline}>
              Passion for Computer Science and Education
            </h3>
            {/* <Image 
            className={styles.homeImage}
            src={portrait}
            alt="Picture of Arjun"
            width={506.7}
            height={722.34}
            />      */}
        </div>
      </div>

    </main>
    </body>


  )
}
