import styles from './BrandsBlock.module.css';
import { setLocale } from '../../helpers/locale.helper';
import { Htag } from '../Htag/Htag';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';


export const BrandsBlock = (): JSX.Element => {
    const router = useRouter();

    const [out, setOut] = useState<boolean>(true);
	const [active, setActive] = useState<boolean>(false);

	useEffect(() => {
		const body = document.getElementById('brandsBlock');
		const cursor = document.getElementById('cursor');
		const follower = document.getElementById('aura');

		body?.addEventListener('mousemove', e => {
			mouseCoords(e);
			setOut(false);
		});

		let mouseX = 0;
		let mouseY = 0;
		let posX = 0;
		let posY = 0;

		function mouseCoords(e: any) {
			mouseX = e.pageX;
			mouseY = e.pageY;
		}

		gsap.to({}, 0.01, {
			repeat: -1,

			onRepeat: () => {
				posX += (mouseX - posX) / 5;
				posY += (mouseY - posY) / 5;

				gsap.set(cursor, {
					css: {
						left: mouseX,
						top: mouseY,
					}
				});

				gsap.set(follower, {
					css: {
						left: posX - 20,
						top: posY - 20,
					}
				});

			}

		});

		body?.addEventListener('mouseout', () => {
			setOut(true);
		});
	}, []);

	const variantsCursor = {
		normal: {
			transform: 'scale(1)',
		},
		active: {
			transform: 'scale(0.0001)',
		},
	};

	const variantsAura = {
		normal: {
			transform: 'scale(1)',
			backdropFilter: 'blur(4px)',
		},
		active: {
			transform: 'scale(1.5)',
			backdropFilter: 'blur(0px)',
		},
		hidden: {
			transform: 'scale(0.0001)',
		},
	};
    
    return (
        <div id='brandsBlock' className={styles.brandsBlock}>
            <motion.span id='cursor' className={styles.cursor}
				variants={variantsCursor}
				initial={active || out ? 'active' : 'normal'}
				transition={{ duration: 0.3 }}
				animate={active || out ? 'active' : 'normal'} />
			<motion.span id='aura' className={styles.aura}
				variants={variantsAura}
				initial={!out ? (active ? 'active' : 'normal') : 'hidden'}
				transition={{ duration: 0.3 }}
				animate={!out ? (active ? 'active' : 'normal') : 'hidden'} />
			<div className={styles.textDiv}
				onMouseOver={() => setActive(true)}
				onMouseOut={() => setActive(false)}>
				<Htag tag='l' className={styles.brandsText}>
					{setLocale(router.locale).brands_text}
				</Htag>
			</div>
        </div>
    );
};