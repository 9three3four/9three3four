import styles from "@/styles/home.module.css";
import Image from "next/image";
export default function Footer() {
    return (
        <>
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
        </>
    )
}