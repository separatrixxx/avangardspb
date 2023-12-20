import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { Header } from '../../components/Header/Header';
import { AboutBlock } from '../../components/AboutBlock/AboutBlock';
import { ProductionBlock } from '../../components/ProductionBlock/ProductionBlock';
import { BrandsBlock } from '../../components/BrandsBlock/BrandsBlock';
import { AchievementsBlock } from '../../components/AchievementsBlock/AchievementsBlock';
import { PartnersBlock } from '../../components/PartnersBlock/PartnersBlock';
import { ContactsBlock } from '../../components/ContactsBlock/ContactsBlock';
import { Footer } from '../../components/Footer/Footer';


export const MainPage = (): JSX.Element => {
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
                <Header />
                <AboutBlock />
                <ProductionBlock />
                <BrandsBlock />
                <AchievementsBlock />
                <PartnersBlock />
                <ContactsBlock />
                <Footer />
            </div>
        </>
    );
};