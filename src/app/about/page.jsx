import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};


const AboutPage = () => {

  // console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Extended Producer Responsibility</h2>
        <h1 className={styles.title}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className={styles.desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>70 +</h1>
            <p>Employees</p>
          </div>
          <div className={styles.box}>
            <h1>12 +</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>200 +</h1>
            <p>Clients Served</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;