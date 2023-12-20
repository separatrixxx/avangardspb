import styles from './ProductionBlock.module.css';
import { setLocale } from '../../helpers/locale.helper';
import { Htag } from '../Htag/Htag';
import { useRouter } from 'next/router';
import { SideBlock } from '../SideBlock/SideBlock';
import { ImageBlock } from '../ImageBlock/ImageBlock';


export const ProductionBlock = (): JSX.Element => {
    const router = useRouter();
    
    return (
        <div id='productionBlock' className={styles.productionBlock}>
            <Htag tag='xxl' className={styles.productionTitle}>
                {setLocale(router.locale).production}
            </Htag>
            <SideBlock text={setLocale(router.locale).production_text} side='left' isDark={true}>
                <ImageBlock image='/ProductionImg.webp' text='Production Img' />
            </SideBlock>
            <Htag tag='l' className={styles.learnMore} onClick={() => router.push('/production')}>
                {setLocale(router.locale).learn_more}
            </Htag>
            <span className={styles.square1} />
            <span className={styles.square2} />
            <span className={styles.square3} />
            <span className={styles.square4} />
            <span className={styles.square5} />
        </div>
    );
};