import styles from './HeaderLocaleChange.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import { setLocale } from '../../helpers/locale.helper';
import { en } from '../../locales/en.locale';
import { ru } from '../../locales/ru.locale';
import { Htag } from '../Htag/Htag';
import { Modal } from '../Modal/Modal';



export const HeaderLocaleChange = (): JSX.Element => {
    const router = useRouter();

    const [active, setActive] = useState<boolean>(false);

    const languages = [en, ru];
    const langIndex = languages.indexOf(setLocale(router.locale));

    if (langIndex !== -1) {
        languages.splice(langIndex, 1);
    }

    let locale: string;

    if (router.locale === 'ru') {
        locale = 'Рус';
    } else {
        locale = 'Eng';
    }

    return (
        <>
            <Htag tag='s' className={styles.lang} onClick={() => setActive(true)}>
                {locale}
            </Htag>
            <Modal active={active} setActive={setActive}>
                <div className={styles.blockLanguages}>
                    {languages.map(m => (
                        <Link key={m.locale} href={router.asPath} locale={m.locale}
                            onClick={() => setActive(false)}>
                            <Htag tag='l' className={styles.langLink}>{m.language}</Htag>
                        </Link>
                    ))}
                </div>
            </Modal>
        </>
    );
};