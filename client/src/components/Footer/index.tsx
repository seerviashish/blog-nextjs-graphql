import * as React from 'react';

type Props = {
  children: React.ReactNode;
};

const Footer: React.FC<Props> = (props) => {
  return <main>{props.children}</main>;
};

export default Footer;
