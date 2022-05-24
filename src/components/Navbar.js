import Link from "next/link";

import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/community">Community</Link>
        </li>
        <li>
          <Link href="/settigns">Settings</Link>
        </li>
        <li>
          <Link href="/signup">Sign Up</Link>
        </li>
        <li>
          <Link href="/signin">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

/* make community into dropdown */
