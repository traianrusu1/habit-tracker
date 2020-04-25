import React from 'react';
import styles from './SignIn.module.scss';

interface Props {
  myProp: string;
}

const SignIn: React.FC<Props> = ({ myProp }: Props) => {
  return (
    <div className={ styles.signIn }>
      SignIn
      {myProp}
    </div>
  );
};

export default SignIn;
