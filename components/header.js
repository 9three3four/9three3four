import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/header.module.css";

const navItems= [
    {label: "Home", page: "/" },
    {label: "Blog", page: "/blog" },
    {label: "CV", page: "/cv" },
]

const Header = ({ titlePre = '' }) => {
    const { pathname } = useRouter()
    return (
        <header className={styles.header}>
            <Head>
                <title>{titlePre ? `$(titlePre} |` : ""} 9three3four</title>
            </Head>
            <ul>
                {navItems.map(({ label, page, link }) => (
                    <li key={label}>
                        {page ? (
                            <Link href={page} className={pathname === page ? 'active' : undefined}>
                                    {label}
                            </Link>
                          ) : (
                              <ExtLink href={link}>{label}</ExtLink>
                        )}
                    </li>
                ))}
            </ul>
        </header>
    )
}

export default Header