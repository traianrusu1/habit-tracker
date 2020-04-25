import React from "react";
import styles from "./Landing.module.scss";

interface Props {
  myProp: string;
}

const Landing: React.FC<Props> = ({ myProp }: Props) => {
  const handleSignInRegister = () => {
    console.log("yayyyy");
  };
  return (
    <div className={styles.landing}>
      Welcome to FitLife. Please press here to Sign In or Register.
      {/* <button>Sign In</button>
      <button>Register</button> */}
      <br />
      <a
        className="App-link"
        href="/auth/google?accountType=trainer"
        // target="_blank"
        rel="noopener noreferrer"
        onClick={handleSignInRegister}
      >
        Trainer Sign In / Register With Google
      </a>
      <br />
      <a
        className="App-link"
        href="/auth/google?accountType=trainee"
        // target="_blank"
        rel="noopener noreferrer"
        onClick={handleSignInRegister}
      >
        Trainee Sign In / Register With Google
      </a>
    </div>
  );
};

export default Landing;
