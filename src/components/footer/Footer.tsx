import React from 'react'
import styles from "./footer.module.css";
import Image from 'next/image';

function Footer() {
  return (
    <div className={styles.container}>
      <div>@2025 Rizapranata. All rights reserved</div>
      <div className={styles.social}>
        <Image src={"/1.png"} width={15} height={15} className={styles.icon} alt={"Riza Pranata Facebook"} />
        <Image src={"/2.png"} width={15} height={15} className={styles.icon} alt={"Riza Pranata Instagram"} />
        <Image src={"/3.png"} width={15} height={15} className={styles.icon} alt={"Riza Pranata X"} />
        <Image src={"/4.png"} width={15} height={15} className={styles.icon} alt={"Riza Pranata Yt"} />
      </div>
    </div>
  )
}

export default Footer