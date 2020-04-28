import React from 'react';
import styles from './TrainerHome.module.scss';

interface Props {
  myProp: string;
}

const TrainerHome: React.FC<Props> = ({ myProp }: Props) => {
  return (
    <div className={ styles.trainerHome }>
      TrainerHome
      {myProp}
    </div>
  );
};

export default TrainerHome;
