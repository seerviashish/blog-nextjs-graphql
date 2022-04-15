import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next/types';
import React, { ReactElement } from 'react';
import { NextPageWithLayout } from '../../@types';
import Layout from '../../layout';

const ProfilePage: NextPageWithLayout = (props) => {
  console.log('props ==> ', props);
  return <div>{'Profile'}</div>;
};

ProfilePage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default ProfilePage;

export const getServerSideProps: GetServerSideProps = async (props) => {
  return {
    props: {
      ...(await serverSideTranslations(props?.locale ?? 'en-US', ['common'])),
    },
  };
};
