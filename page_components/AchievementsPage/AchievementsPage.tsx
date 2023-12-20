import styles from './AchievementsPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Htag } from '../../components/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';
import Image from 'next/image';


export const AchievementsPage = (): JSX.Element => {
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
                        {setLocale(router.locale).achievements}
                    </Htag>
                    <br />
                    <div className={styles.imagesList}>
                    <div className={styles.imageBlock}>
                            <Image className={styles.img} draggable='false'
                                loader={() => '/Award1.webp'}
                                src={'/Award1.webp'}
                                alt='Award Img'
                                width={1}
                                height={1}
                                unoptimized={true}
                                priority={true}
                            />
                        </div>
                        <div className={styles.imageBlock}>
                            <Image className={styles.img} draggable='false'
                                loader={() => '/Award2.webp'}
                                src={'/Award2.webp'}
                                alt='Award Img'
                                width={1}
                                height={1}
                                unoptimized={true}
                                priority={true}
                            />
                        </div>
                        <div className={styles.imageBlock}>
                            <Image className={styles.img} draggable='false'
                                loader={() => '/Award3.webp'}
                                src={'/Award3.webp'}
                                alt='Award Img'
                                width={1}
                                height={1}
                                unoptimized={true}
                            />
                        </div>
                        <div className={styles.imageBlock}>
                            <Image className={styles.img} draggable='false'
                                loader={() => '/Award4.webp'}
                                src={'/Award4.webp'}
                                alt='Award Img'
                                width={1}
                                height={1}
                                unoptimized={true}
                            />
                        </div>
                        <div className={styles.imageBlock}>
                            <Image className={styles.img} draggable='false'
                                loader={() => '/Award5.webp'}
                                src={'/Award5.webp'}
                                alt='Award Img'
                                width={1}
                                height={1}
                                unoptimized={true}
                            />
                        </div>
                        <div className={styles.imageBlock}>
                            <Image className={styles.img} draggable='false'
                                loader={() => '/Award7.webp'}
                                src={'/Award7.webp'}
                                alt='Award Img'
                                width={1}
                                height={1}
                                unoptimized={true}
                            />
                        </div>
                        <div className={styles.imageBlock}>
                            <Image className={styles.img} draggable='false'
                                loader={() => '/Award10.webp'}
                                src={'/Award10.webp'}
                                alt='Award Img'
                                width={1}
                                height={1}
                                unoptimized={true}
                            />
                        </div>
                        <div className={styles.imageBlock}>
                            <Image className={styles.img} draggable='false'
                                loader={() => '/Award11.webp'}
                                src={'/Award11.webp'}
                                alt='Award Img'
                                width={1}
                                height={1}
                                unoptimized={true}
                            />
                        </div>
                        <div className={styles.imageBlock}>
                            <Image className={styles.img} draggable='false'
                                loader={() => '/Award6.webp'}
                                src={'/Award6.webp'}
                                alt='Award Img'
                                width={1}
                                height={1}
                                unoptimized={true}
                            />
                        </div>
                        <div className={styles.imageBlock}>
                            <Image className={styles.img} draggable='false'
                                loader={() => '/Award8.webp'}
                                src={'/Award8.webp'}
                                alt='Award Img'
                                width={1}
                                height={1}
                                unoptimized={true}
                            />
                        </div>
                        <div className={styles.imageBlock}>
                            <Image className={styles.img} draggable='false'
                                loader={() => '/Award9.webp'}
                                src={'/Award9.webp'}
                                alt='Award Img'
                                width={1}
                                height={1}
                                unoptimized={true}
                            />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};