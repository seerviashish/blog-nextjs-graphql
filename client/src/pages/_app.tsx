import '../styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '../libs/store';
import { appWithTranslation } from 'next-i18next';
import { SessionProvider } from '../utils/provider/SessionProvider';
import AppTitleView from '../views/appTitleView';
import { AppPropsWithLayout } from '../@types';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <SessionProvider>
      <Provider store={store}>
        <AppTitleView />
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp);
