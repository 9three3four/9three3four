import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/home.module.css";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="My personal site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> 9three3four </title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>

        <div className={styles.title}>
          <h1> Chandrakanth Lanka</h1>
          <h3> DevOps Engineer | Systems Architect | Data Enthusiast </h3>
        </div>
          <p>
            I am a Principal Engineer at Seanergy Digital with nearly 8 years of experience,
            driven by a passion to leverage technology for positive change.
            I bridge the gap between development and operations, ensuring smooth software delivery.
          </p>
          <p>
            Beyond the technical realm, I am fascinated by the intersection of technology and economics,
            constantly seeking ways to utilize these fields to make a real-world impact.
          </p>

        <Footer />
      </main>
    </>
  );
}
