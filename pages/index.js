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
          <h3> DevOps Engineer | Systems Architect </h3>
        </div>
          <p>
            I am a Principal DevOps Engineer at Seanergy Digital with close to 8 years of extensive experience in the
            tech industry. My role focuses on optimizing the collaboration between development and operations teams, ensuring seamless software delivery, and driving technical efficiency.
          </p>
          <p>
            Beyond the technical realm, I am deeply interested in the interplay between technology and economics. I am always exploring innovative ways to combine these disciplines to create meaningful, real-world impact, particularly in the areas where technology can drive economic advancement and societal progress.
          </p>

        <Footer />
      </main>
    </>
  );
}
