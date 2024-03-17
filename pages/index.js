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
        <div className={styles.description}>
          <a
            href="/"
            rel="noopener noreferrer"
          >
            9three3four
          </a>
          <div>
            <a href="/about.js" rel="noopener noreferrer">
              About
            </a>
            <a href="/blog.js" rel="noopener noreferrer">
              Blog
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <h1> Heyo! </h1>
        </div>

        <div className={styles.description}>
          <a
              href="https://www.github.com/9three3four"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
                src="/images/github.svg"
                alt="GitHub Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
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
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
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
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
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
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
            />

          </a>
        </div>
      </main>
    </>
  );
}
