import styles from "@/styles/home.module.css";
import Image from "next/image";
export default function Header() {
    return (
        <>
            <div className={styles.header}>
                 <ul>
                     <li>
                         <a href={"/"}>/home</a>
                         <a href={"/blog"}>/blog</a>
                         <a href={"/cv"}>/cv</a>
                     </li>
                 </ul>
             </div>
        </>
    )
}