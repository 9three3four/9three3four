import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/home.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={`${styles.main} ${inter.className}`}>
        <Header titlePre="Home"/>
        <div className={styles.title}>
          <h1> Chandrakanth Lanka</h1>
          <h3> DevOps Engineer | Systems Architect | Data Enthusiast </h3>
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

        <Footer />
      </div>
    </>
  );
}
