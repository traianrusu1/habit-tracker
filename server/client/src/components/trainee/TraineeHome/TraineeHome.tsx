import React from 'react';
import styles from './TraineeHome.module.scss';

interface Props {
  myProp: string;
}

const TraineeHome: React.FC<Props> = ({ myProp }: Props) => {
  return (
    <div className={ styles.traineeHome }>
      TraineeHome
      {myProp}
    </div>
  );
};

export default TraineeHome;
