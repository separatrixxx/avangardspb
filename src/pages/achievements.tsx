import { AchievementsPage } from "../../page_components/AchievementsPage/AchievementsPage";
import Head from 'next/head';
import { useRouter } from "next/router";
import { setLocale } from "../../helpers/locale.helper";


function Achievements(): JSX.Element {
    const router = useRouter();
    
    return (
      <>
        <Head>
            <title>{setLocale(router.locale).avangard + ' - ' + setLocale(router.locale).achievements}</title>
            <meta name='description' content={'Avanfardspb - ' + setLocale(router.locale).achievements} />
            <meta property='og:title' content={'Avanfardspb - ' + setLocale(router.locale).achievements} />
            <meta property='og:description' content={'Avanfardspb - ' + setLocale(router.locale).achievements} />
            <meta charSet="utf-8" />
        </Head>
        <AchievementsPage />
      </>
    );
}

export default Achievements;
