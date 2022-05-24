import Link from "next/link";

import formStyles from "../styles/Form.module.css";
import signBoxStyles from "../styles/SignBox.module.css";

const SignUpBox = () => {
  return (
    <box
      className={signBoxStyles.box}
      action="/my-handling-form-page"
      method="post"
    >
      <div
        className={`${signBoxStyles.gridButton} ${signBoxStyles.gridButtonFirst} ${signBoxStyles.gridButtonInactive}`}
      >
        <Link href="/signin">Sign In</Link>
      </div>
      <div
        type="button"
        className={`${signBoxStyles.gridButton} ${signBoxStyles.gridButtonSecond}`}
      >
        Sign Up
      </div>
      <ul className={signBoxStyles.gridForm}>
        <li className={formStyles.li}>
          <label htmlFor="name">username: </label>
        </li>
        <li className={formStyles.li}>
          <input
            type="text"
            className={formStyles.input}
            id="name"
            name="user_name"
          ></input>
        </li>
        <li className={formStyles.li}>
          <label htmlFor="mail">e-mail: </label>
        </li>
        <li className={formStyles.li}>
          <input
            type="email"
            className={formStyles.input}
            id="email"
            name="email"
          ></input>
        </li>
        <li className={formStyles.li}>
          <label htmlFor="password">password: </label>
        </li>
        <li className={formStyles.li}>
          <input
            type="password"
            className={formStyles.input}
            id="password"
            name="password"
          ></input>
        </li>
        <li className={formStyles.li}>
          <button type="submit">Submit</button>
        </li>
      </ul>
    </box>
  );
};

export default SignUpBox;
