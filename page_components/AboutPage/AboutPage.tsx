import styles from './AboutPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Htag } from '../../components/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';


export const AboutPage = (): JSX.Element => {
    const router = useRouter();

    return (
        <>
            <Toaster
				position="top-center"
				reverseOrder={true}
				toastOptions={{
					duration: 2000,
				}}
			/>
            <div className={styles.wrapper}>
                <div className={styles.textDiv}>
                    <Header />
                    <br /><br /><br /><br />
                    <Htag tag='xxl' className={styles.text}>
                        {setLocale(router.locale).about}
                    </Htag>
                    <Htag tag='xl' className={styles.text}>
                        {setLocale(router.locale).about_page.text1}
                    </Htag>
                    <Htag tag='xl' className={styles.text}>
                        {setLocale(router.locale).about_page.text2}
                    </Htag>
                    <Htag tag='xl' className={styles.text}>
                        {setLocale(router.locale).about_page.text3}
                    </Htag>
                    <Htag tag='xl' className={styles.text}>
                        {setLocale(router.locale).about_page.text4}
                    </Htag>
                    <Htag tag='xl' className={styles.text}>
                        {setLocale(router.locale).about_page.text5}
                    </Htag>
                </div>
                <Footer />
            </div>
        </>
    );
};