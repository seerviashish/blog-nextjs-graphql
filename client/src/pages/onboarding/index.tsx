import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next/types';
import React from 'react';

const OnboardingPage: React.FC = () => {
  return <></>;
};

export default OnboardingPage;

export const getServerSideProps: GetServerSideProps = async (props) => {
  return {
    props: {
      ...(await serverSideTranslations(props?.locale ?? 'en-US', ['common'])),
    },
  };
};
