import * as React from 'react';
import Head from 'next/head';

type Props = {
  title: string;
  description?: string;
};

const AppTitle: React.FC<Props> = (props) => {
  const { title, description } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default AppTitle;
