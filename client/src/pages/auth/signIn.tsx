import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next/types';
import * as React from 'react';

const SignInPage: React.FC = () => {
  return <>Sign In</>;
};

export default SignInPage;

export const getServerSideProps: GetServerSideProps = async (props) => {
  return {
    props: {
      ...(await serverSideTranslations(props?.locale ?? 'en-US', ['common'])),
    },
  };
};
