import styles from './Footer.module.css';
import { setLocale } from '../../helpers/locale.helper';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import { Htag } from '../Htag/Htag';


export const Footer = (): JSX.Element => {
    const router = useRouter();
    
    return (
        <footer className={styles.footer}>
            <Htag tag='s' className={styles.footerBottomText}>
                {'© 2001 - ' + format(new Date(), 'yyyy') + ' Avangardspb ' + setLocale(router.locale).all_rights_reserved}
            </Htag>
        </footer>
    );
};