import type { GetServerSideProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: NextPage = () => {
  return (
    <div>
      <main>Content</main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (props) => {
  return {
    props: {
      ...(await serverSideTranslations(props?.locale ?? 'en-US', ['common'])),
    },
  };
};
