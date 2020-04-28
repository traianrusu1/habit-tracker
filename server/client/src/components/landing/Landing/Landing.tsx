import React from "react";

import styles from "./Landing.module.scss";

interface Props {
  myProp: string;
}

const Landing: React.FC<Props> = ({ myProp }: Props) => {
  return (
    <div className={styles.landing + " " + "container center"}>
      <h1>HabitPro</h1>
      <p>The best habit tracking app!</p>
    </div>
  );
};

export default Landing;
