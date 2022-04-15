import * as React from 'react';

type Props = {
  children: React.ReactNode;
};

const Main: React.FC<Props> = (props) => {
  return <footer>{props.children}</footer>;
};

export default Main;
