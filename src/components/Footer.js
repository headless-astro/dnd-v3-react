import Link from "next/link";

import footerStyles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={footerStyles.foot}>
      <Link href="/contactus">Contact Us</Link>
    </footer>
  );
};

export default Footer;
