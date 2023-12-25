import styles from './ContactsBlock.module.css';
import { setLocale } from '../../helpers/locale.helper';
import { Htag } from '../Htag/Htag';
import { useRouter } from 'next/router';


export const ContactsBlock = (): JSX.Element => {
    const router = useRouter();
    
    return (
        <div id='contactsBlock' className={styles.contactsBlock}>
            <Htag tag='xxl'>
                {setLocale(router.locale).contacts}
            </Htag>
            <div className={styles.contactsDiv}>
                <Htag tag='xl'>
                    {setLocale(router.locale).contacts_text}
                </Htag>
                <Htag tag='l' className={styles.contact}>
                    +995 599 88 90 90 
                </Htag>
                <Htag tag='l' className={styles.contact}>
                    tamo7373@mail.ru
                </Htag>
                <Htag tag='l' className={styles.contact}>
                    {setLocale(router.locale).address}
                </Htag>
            </div>
        </div>
    );
};
