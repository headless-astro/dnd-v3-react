import Link from "next/link";
import { useRef, useEffect, useState } from "react";

import formStyles from "../styles/Form.module.css";
import signBoxStyles from "../styles/SignBox.module.css";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}%/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{3,23}%/;

const SignInBox = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    console.log(result);
    console.log(pwd);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  return (
    <>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <box
        className={signBoxStyles.box}
        action="/my-handling-form-page"
        method="post"
      >
        <div
          className={`${signBoxStyles.gridButton} ${signBoxStyles.gridButtonFirst}`}
        >
          <Link href="/signin">Sign In</Link>
        </div>
        <div
          type="button"
          className={`${signBoxStyles.gridButton} ${signBoxStyles.gridButtonSecond} ${signBoxStyles.gridButtonInactive}`}
        >
          <Link href="/signup">Sign Up</Link>
        </div>
        <form className={signBoxStyles.gridForm}>
          <label className={formStyles.label}>
            <label htmlFor="username">
              Username:
              <span className={validName ? "valid" : "hide"}>Valid</span>
              <span className={validName || !user ? "hide" : "invalid"}>
                Invalid
              </span>
            </label>
          </label>
          <input
            className={formStyles.input}
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
          <p
            id="uidnote"
            className={
              userFocus && user && !validName ? "instructions" : "offscreen"
            }
          >
            4 to 24 characters
          </p>
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
            <label htmlFor="password">confirm password: </label>
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
        </form>
      </box>
    </>
  );
};

export default SignInBox;
