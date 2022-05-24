import Head from "next/Head";
import SignUpBox from "../components/SignUpBox";
import LayoutLimited from "../components/layouts/LayoutSign";

import signupStyles from "../styles/container.module.css";

SignUp.Layout = LayoutLimited;

export default function SignUp() {
  return (
    <div className={signupStyles.container}>
      <Head>
        <title>Sign Up</title>
      </Head>
      <SignUpBox />
    </div>
  );
}
