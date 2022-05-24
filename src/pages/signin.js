import Head from "next/Head";
import SignInBox from "../components/SignInBox";
import LayoutLimited from "../components/layouts/LayoutSign";

import signupStyles from "../styles/container.module.css";

SignIn.Layout = LayoutLimited;

export default function SignIn() {
  return (
    <div className={signupStyles.container}>
      <Head>
        <title>Sign In</title>
      </Head>
      <SignInBox />
    </div>
  );
}
