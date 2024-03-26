import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="My personal site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>

        <div className={styles.title}>
          <h1> Chandrakanth Lanka</h1>
          <h3> DevOps Engineer</h3>
        </div>
          <p>
            I am a Senior DevOps Engineer at Ness Digital Engineering with 7 years of experience,
            driven by a passion to leverage technology for positive change.
            I bridge the gap between development and operations, ensuring smooth software delivery.
          </p>
          <p>
            Beyond the technical realm, I am fascinated by the intersection of data science and economics,
            constantly seeking ways to utilize these fields to make a real-world impact.
          </p>

        <div className={styles.footer}>
          <a
              href="https://www.github.com/9three3four"
              target="_blank"
              rel="noopener noreferrer"
          >
            <Image
                src="/images/github.svg"
                alt="github logo"
                className={styles.logo}
                width={23}
                height={23}
            />

          </a>
          <a
              href="https://www.linkedin.com/in/9three3four"
              target="_blank"
              rel="noopener noreferrer"
          >
            <Image
                src="/images/linkedin.svg"
                alt="Linkedin Logo"
                className={styles.logo}
                width={23}
                height={23}
            />
          </a>
          <a
              href="https://www.instagram.com/9three3four"
              target="_blank"
              rel="noopener noreferrer"
          >
            <Image
                src="/images/instagram.svg"
                alt="instagram logo"
                className={styles.logo}
                width={23}
                height={23}
            />
          </a>
          <a
              href="mailto:lanka.kv@icloud.com"
              target="_blank"
              rel="noopener noreferrer"
          >
            <Image
                src="/images/envelope.svg"
                alt="envelope logo"
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
