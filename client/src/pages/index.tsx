import type { NextPage } from 'next'
import AppTitleView from '../views/appTitleView'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home: NextPage = () => {
  return (
    <div>
      <main>Content</main>
    </div>
  )
}

export default Home

export const getServerSideProps = async (props: any) => {
  return {
    props: {
      ...(await serverSideTranslations(props.locale, ['common'])),
    },
  }
}
