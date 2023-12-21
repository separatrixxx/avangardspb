import { ProductionPage } from "../../page_components/ProductionPage/ProductionPage";
import Head from 'next/head';
import { useRouter } from "next/router";
import { setLocale } from "../../helpers/locale.helper";


function Production(): JSX.Element {
    const router = useRouter();
    
    return (
      <>
        <Head>
            <title>{setLocale(router.locale).avangard + ' - ' + setLocale(router.locale).production}</title>
            <meta name='description' content={'Avanfardspb - ' + setLocale(router.locale).production} />
            <meta property='og:title' content={'Avanfardspb - ' + setLocale(router.locale).production} />
            <meta property='og:description' content={'Avanfardspb - ' + setLocale(router.locale).production} />
            <meta charSet="utf-8" />
        </Head>
        <ProductionPage />
      </>
    );
}

export default Production;
