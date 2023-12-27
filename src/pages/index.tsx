import { MainPage } from "../../page_components/MainPage/MainPage";
import Head from 'next/head';
import { useRouter } from "next/router";
import { setLocale } from "../../helpers/locale.helper";


function Main(): JSX.Element {
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
      <MainPage />
    </>
  );
}

export default Main;
