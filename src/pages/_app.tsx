import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Avanfardspb - только самые лучшие салфетки</title>
        <meta name='description' content='Avanfardspb - только самые лучшие салфетки' />
        <meta property='og:title' content='Avanfardspb - только самые лучшие салфетки' />
        <meta property='og:description' content='Avanfardspb - только самые лучшие салфетки' />
        <meta charSet="utf-8" />
        <link rel="icon" href="/vercel.svg" type='image/svg+xml' />
      </Head>
      <Component {...pageProps} />
    </>

  );
}
