import { AboutPage } from "../../page_components/AboutPage/AboutPage";
import Head from 'next/head';
import { useRouter } from "next/router";
import { setLocale } from "../../helpers/locale.helper";


function About(): JSX.Element {
    const router = useRouter();
    
    return (
      <>
        {/* <Head>
            <title>{setLocale(router.locale).avangard + ' - ' + setLocale(router.locale).about}</title>
            <meta name='description' content={'Avanfardspb - ' + setLocale(router.locale).about} />
            <meta property='og:title' content={'Avanfardspb - ' + setLocale(router.locale).about} />
            <meta property='og:description' content={'Avanfardspb - ' + setLocale(router.locale).about} />
            <meta charSet="utf-8" />
        </Head>
        <AboutPage /> */}
      </>
    );
}

export default About;
