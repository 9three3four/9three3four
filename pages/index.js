import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>9three3four</title>
        <meta name="description" content="My personal site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.header}>
          <a href="/" rel="noopener noreferrer" className={styles.card}>
            Home
          </a>
          <a href="/blog.js" rel="noopener noreferrer" className={styles.card}>
            Blog
          </a>
          <a href="/cv_lanka.pdf" rel="noopener noreferrer" className={styles.card}>
            CV
          </a>
        </div>

        <div className={styles.center}>
          <h1> Heyo! </h1>
        </div>

        <div className={styles.footer}>
          <a
              href="https://www.github.com/9three3four"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
          >
            <Image
                src="/images/github.svg"
                alt="GitHub Logo"
                className={styles.logo}
                width={23}
                height={23}
            />

          </a>
          <a
              href="https://www.linkedin.com/in/9three3four"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
          >
            <Image
                src="/images/linkedin.svg"
                alt="LinkedIn Logo"
                className={styles.logo}
                width={23}
                height={23}
            />
          </a>
          <a
              href="https://www.instagram.com/9three3four"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
          >
            <Image
                src="/images/instagram.svg"
                alt="Instagram Logo"
                className={styles.logo}
                width={23}
                height={23}
            />
          </a>
          <a
              href="mailto:lanka.kv@icloud.com"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
          >
            <Image
                src="/images/envelope.svg"
                alt="Mail Logo"
                className={styles.logo}
                width={23}
                height={23}
            />
          </a>
        </div>
      </main>
    </>
  );
}
