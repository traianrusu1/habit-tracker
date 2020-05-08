import React from 'react';
// import styles from './Badge.module.scss';
import { Badge as AntBadge } from 'antd';

interface Props {
  show: boolean;
  children: React.ReactNode;
}

const Badge: React.FC<Props> = ({ show, children }: Props) => {
  return show ? <AntBadge count="!">{children}</AntBadge> : <>{children}</>;
};

export default Badge;
