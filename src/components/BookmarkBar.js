import Link from "next/link";

import barStyles from "../styles/BookmarkBar.module.css";

const BookmarkBar = () => {
  return (
    <bar className={barStyles.bar}>
      <ul>
        <li>
          {" "}
          <Link href="/profile/stories/mystory">Mystory</Link>
        </li>
      </ul>
    </bar>
  );
};

export default BookmarkBar;
