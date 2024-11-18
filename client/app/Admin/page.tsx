'use client'
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import type { AppProps } from 'next/app';
import AdminCrud from '../components/adminCrud';
import PrelineScript from "../components/prelineScript";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AdminCrud {...pageProps} />
    </Provider>
  );
}

export default MyApp;
