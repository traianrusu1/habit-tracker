import React from 'react';
import styles from './SignUp.module.scss';

interface Props {
  myProp: string;
}

const SignUp: React.FC<Props> = ({ myProp }: Props) => {
  return (
    <div className={ styles.signUp }>
      SignUp
      {myProp}
    </div>
  );
};

export default SignUp;
