import Nav from "../Navbar";
import Footer from "../Footer";
import BookmarkBar from "../BookmarkBar";

import styles from "../../styles/Layout.module.css";
import Background from "../../styles/Backgrounds.module.css";

const Layout = ({ children }) => {
  return (
    <div className={Background.free}>
      <Nav />
      <BookmarkBar />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
