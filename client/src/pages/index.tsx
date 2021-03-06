import type { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { ReactElement } from 'react';
import { NextPageWithLayout } from '../@types';
import Layout from '../layout';

const HomePage: NextPageWithLayout = (props) => {
  console.log('props ==> ', props);
  return <>{'HomePage Content'}</>;
};

HomePage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (props) => {
  return {
    props: {
      ...(await serverSideTranslations(props?.locale ?? 'en-US', ['common'])),
    },
  };
};
