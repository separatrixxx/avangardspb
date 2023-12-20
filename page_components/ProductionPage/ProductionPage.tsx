import styles from './ProductionPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Htag } from '../../components/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';
import { SideBlock } from '../../components/SideBlock/SideBlock';
import { ImageBlock } from '../../components/ImageBlock/ImageBlock';


export const ProductionPage = (): JSX.Element => {
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
                        {setLocale(router.locale).production}
                    </Htag>
                    <br />
                    <SideBlock text={setLocale(router.locale).production_page.text1} side='left' isDark={false}>
                        <ImageBlock image='/Production1.webp' text='Production Img' />
                    </SideBlock>
                    <br />
                    <Htag tag='xl' className={styles.text}>
                        {setLocale(router.locale).production_page.text2}
                    </Htag>
                    <Htag tag='xl' className={styles.text}>
                        {setLocale(router.locale).production_page.text3}
                    </Htag>
                    <br />
                    <SideBlock text={setLocale(router.locale).production_page.text4} side='left' isDark={false}>
                        <ImageBlock image='/Production2.webp' text='Production Img' />
                    </SideBlock>
                    <br />
                    <Htag tag='xl' className={styles.text}>
                        {setLocale(router.locale).production_page.text5}
                    </Htag>
                    <br />
                    <Htag tag='xxl' className={styles.text}>
                        {setLocale(router.locale).production_page.text6}
                    </Htag>
                    <br />
                    <SideBlock text={setLocale(router.locale).production_page.text7} side='left' isDark={false}>
                        <ImageBlock image='/Production3.webp' text='Production Img' />
                    </SideBlock>
                    <Htag tag='xl' className={styles.text}>
                        {setLocale(router.locale).production_page.text8}
                    </Htag>
                    <Htag tag='xl' className={styles.text}>
                        {setLocale(router.locale).production_page.text9}
                    </Htag>
                    <Htag tag='xl' className={styles.text}>
                        {setLocale(router.locale).production_page.text10}
                    </Htag>
                    <Htag tag='xl' className={styles.text}>
                        {setLocale(router.locale).production_page.text11}
                    </Htag>
                </div>
                <Footer />
            </div>
        </>
    );
};