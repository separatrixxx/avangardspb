import styles from './AboutBlock.module.css';
import { setLocale } from '../../helpers/locale.helper';
import { Htag } from '../Htag/Htag';
import { useRouter } from 'next/router';
import Arrow from './arrow.svg';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


export const AboutBlock = (): JSX.Element => {
    const router = useRouter();

    const [element, setElement] = useState<Element | null>(null);

    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
		setElement(document.getElementById('productionBlock'));

        var i = 0;
        var txt = setLocale(router.locale).about_text;
        var speed = 50;

        const htag = document.getElementById('htag');

        typeWriter(); 
        

        function typeWriter() {
            if (i < txt.length && htag) {
                htag.innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }

        setTimeout(() => setIsVisible(true), 4000);
	}, [router]);

    const scrollIntoView = require('scroll-into-view');

    const variants = {
		visible: {
			opacity: 1,
		},
		hidden: {
			opacity: 0,
		}
	};
    
    return (
        <div className={styles.aboutBlock}>
            <div className={styles.textDiv}>
                <h1 id='htag' className={styles.aboutText} />
                <motion.h1 className={styles.learnMore} onClick={() => router.push('/about')}
                    variants={variants}
                    initial={isVisible ? 'visible' : 'hidden'}
                    transition={{ duration: 0.5 }}
                    animate={isVisible ? 'visible' : 'hidden'}>
                    {setLocale(router.locale).learn_more}
                </motion.h1>
            </div>
            <span className={styles.arrow} onClick={() => scrollIntoView(element, {time: 1500})}>
                <Arrow />
            </span>
            <span className={styles.square1} />
            <span className={styles.square2} />
            <span className={styles.square3} />
        </div>
    );
};