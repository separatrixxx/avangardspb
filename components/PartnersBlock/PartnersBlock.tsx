import styles from './PartnersBlock.module.css';
import { setLocale } from '../../helpers/locale.helper';
import { Htag } from '../Htag/Htag';
import { useRouter } from 'next/router';
import Tss from './DLElements/366.svg';
import Auchan from './DLElements/auchan.svg';
import Bashneft from './DLElements/bashneft.svg';
import Bp from './DLElements/bp.svg';
import Gazprom from './DLElements/gazprom.svg';
import Letoile from './DLElements/letoile.svg';
import Lukoil from './DLElements/lukoil.svg';
import Magnit from './DLElements/magnit.svg';
import Obi from './DLElements/obi.svg';
import Perekrestok from './DLElements/perekrestok.svg';
import Rosneft from './DLElements/rosneft.svg';
import Shell from './DLElements/shell.svg';
import { DynamicLine } from '../DynamicLine/DynamicLine';


export const PartnersBlock = (): JSX.Element => {
    const router = useRouter();

    const elements: any = [Letoile, Bp, Perekrestok, Tss, Rosneft, Shell, Bashneft, Auchan, Magnit, Obi, Lukoil, Gazprom];
    
    return (
        <div id='partnersBlock' className={styles.partnersBlock}>
            <Htag tag='xxl'>
                {setLocale(router.locale).partners}
            </Htag>
            <Htag tag='l' className={styles.partnersText}>
                {setLocale(router.locale).partners_text}
            </Htag>
            <div className={styles.partnersLinesBlock}>
                <DynamicLine type='1' direction='right' speed='medium' elements={elements} />
                <DynamicLine type='2' direction='left' speed='fast' elements={elements} />
                <DynamicLine type='3' direction='right' speed='slow' elements={elements} />
            </div>
        </div>
    );
};
