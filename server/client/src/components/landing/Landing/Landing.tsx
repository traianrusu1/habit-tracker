import React from "react";
import styles from "./Landing.module.scss";

interface Props {
  myProp: string;
}

const Landing: React.FC<Props> = ({ myProp }: Props) => {
  return (
    <div className={styles.landing}>
      Welcome to FitLife. Please press here to Sign In or Register.
      <button>Sign In</button>
      <button>Register</button>
      <a
        className="App-link"
        href="/auth/google"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sign In / Register With Google
      </a>
    </div>
  );
};

export default Landing;
