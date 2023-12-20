import styles from './AchievementsBlock.module.css';
import { setLocale } from '../../helpers/locale.helper';
import { Htag } from '../Htag/Htag';
import { useRouter } from 'next/router';
import { SideBlock } from '../SideBlock/SideBlock';
import { ImageBlock } from '../ImageBlock/ImageBlock';


export const AchievementsBlock = (): JSX.Element => {
    const router = useRouter();
    
    return (
        <div id='achievementsBlock' className={styles.achievementsBlock}>
            <Htag tag='xxl' className={styles.achievementsTitle}>
                {setLocale(router.locale).achievements}
            </Htag>
            <SideBlock text={setLocale(router.locale).achievements_text} side='right' isDark={true}>
                <ImageBlock image='/AchievementsImg.webp' text='Achievements Img' />
            </SideBlock>
            <Htag tag='m' className={styles.learnMore} onClick={() => router.push('/achievements')}>
                {setLocale(router.locale).learn_more}
            </Htag>
        </div>
    );
};