import Link from "next/link";
import { signIn, signOut } from "next/auth/client";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <Link href="api/auth/signin" passHref>
        <a
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          Sign in
        </a>
      </Link>
      <Link href="api/auth/signin" passHref>
        <a
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
        >
          Sign out
        </a>
      </Link>
      <h1>header</h1>
    </div>
  );
}

export default Header;
