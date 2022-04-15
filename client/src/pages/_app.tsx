import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../libs/store'
import AppTitleView from '../views/appTitleView'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppTitleView />
      <Component {...pageProps} />
    </Provider>
  )
}

export default appWithTranslation(MyApp)
