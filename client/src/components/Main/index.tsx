import * as React from 'react';

type Props = {
  children: React.ReactNode;
};

const UFooter: React.FC<Props> = (props) => {
  return <footer>{props.children}</footer>;
};

export default UFooter;
