import Image from "next/image";
import Hero from "public/hero.png";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital product</h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global teach industry
        </p>
        <button className={styles.button}>See Our Works</button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="Hero" className={styles.img} />
      </div>
    </div>
  );
}
