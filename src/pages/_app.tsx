import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { setLocale } from '../../helpers/locale.helper';


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>{setLocale(router.locale).avangard + ' - ' + setLocale(router.locale).slogan}</title>
        <meta name='description' content={setLocale(router.locale).avangard + ' - ' + setLocale(router.locale).slogan} />
        <meta property='og:title' content={setLocale(router.locale).avangard + ' - ' + setLocale(router.locale).slogan} />
        <meta property='og:description' content={setLocale(router.locale).avangard + ' - ' + setLocale(router.locale).slogan} />
        <meta charSet="utf-8" />
        <meta name="yandex-verification" content="5344a215c217462e" />
        <link rel="icon" href="/avangard.png" type='image/png' />
      </Head>
      <Component {...pageProps} />
    </>

  );
}
