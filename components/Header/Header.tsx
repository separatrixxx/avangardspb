import styles from './Header.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from './logo.svg';
import Arrow from './arrow.svg';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { Links } from '../../interfaces/components.interface';
import { setLocale } from '../../helpers/locale.helper';
import { useResizeW } from '../../hooks/useResize';
import { Htag } from '../Htag/Htag';
import { BurgerMenu } from '../BurgerMenu/BurgenMenu';
import { HeaderLocaleChange } from '../HeaderLocaleChange/HeaderLocaleChange';
import cn from 'classnames';
import { useScrollY } from '../../hooks/useScrollY';


export const Header = (): JSX.Element => {
	const router = useRouter();

	const [hiddenLinks, setHiddenLinks] = useState<boolean>(true);

	const [productionE, setProductionE] = useState<Element | null>(null);
	const [brandsE, setBrandsE] = useState<Element | null>(null);
	const [achievementsE, setAchievementsE] = useState<Element | null>(null);
	const [partnersE, setPartnersE] = useState<Element | null>(null);
	const [contactsE, setContactsE] = useState<Element | null>(null);

    useEffect(() => {
		setProductionE(document.getElementById('productionBlock'));
		setBrandsE(document.getElementById('brandsBlock'));
		setAchievementsE(document.getElementById('achievementsBlock'));
		setPartnersE(document.getElementById('partnersBlock'));
		setContactsE(document.getElementById('contactsBlock'));
	}, []);

    const scrollIntoView = require('scroll-into-view');

	const [open, setOpen] = useState<boolean>(false);
	const [hidden, setHidden] = useState<boolean>(false);

	const links: Links[] = [
		{ title: setLocale(router.locale).about, more: true },
		{ title: setLocale(router.locale).partners, onClick: () => {
			scrollIntoView(partnersE, {time: 1500});
			setOpen(false);
			setHidden(false);
		} },
		{ title: setLocale(router.locale).contacts, onClick: () => {
			scrollIntoView(contactsE, {time: 1500});
			setOpen(false);
			setHidden(false);
		} },
		{ title: setLocale(router.locale).shop, onClick: () => {
			router.push('https://www.ozon.ru/seller/ooo-avangard-91321/products/', '_blank');
			setOpen(false);
			setHidden(false);
		} },
	];

	const scrollPosition = useScrollY();
	const width = useResizeW();

	const [lastScroll, setLastScroll] = useState<number>(0);

	if (scrollPosition - lastScroll >= 200 && scrollPosition > lastScroll) {
		setOpen(false);
		setLastScroll(scrollPosition);
	} else if (scrollPosition < lastScroll) {
		setLastScroll(scrollPosition);
	}

	const variantsBlock = {
		visible: {
			height: 'fit-content',
			opacity: 1,
			display: 'grid',
			transition: {
				duration: 0.3,
			}
		},
		hidden: {
			height: 0,
			opacity: 0,
			display: 'none',
			transition: {
				duration: 0.3,
			}
		}
	};

	const variantsHiddenArrow = {
		active: {
			transform: 'rotate(180deg)',
		},
		passive: {
			transform: 'rotate(0deg)',
		}
	};

	const variantsHiddenDiv = {
		active: {
			display: 'none',
		},
		passive: {
			display: 'grid',
		}
	};

	if (width > 1024) {
		variantsBlock.visible.transition.duration = 0;
		variantsBlock.hidden.transition.duration = 0;
	}

	return (
		<header className={styles.header}>
			<Link href='/' className={styles.logo} aria-label="Go Home"><Logo /></Link>
			<motion.div className={styles.headerBlock}
				variants={variantsBlock}
				initial={open || width > 1024 ? 'visible' : 'hidden'}
				animate={open || width > 1024 ? 'visible' : 'hidden'}
				style={width > 1024 ? { gridTemplateColumns: `repeat(${links.length}, auto)` } : { gridTemplateRows: `repeat(${links.length}, auto)` }}>
				{links.map(l => (
					!l.more ?
						<Htag tag='m' className={styles.text} key={l.title} style={hidden ? { display: 'none' } : { display: 'block' }}
							onClick={l.onClick}>
							{l.title}
						</Htag>
						:
						<div key={'u' + l.link} className={styles.moreDiv}
							onMouseOver={() => {
								if (width >= 1024) {
									setHiddenLinks(false);
								}
							}} onMouseOut={() => {
								if (width >= 1024) {
									setHiddenLinks(true);
								}
							}}>
							<Htag tag='m' className={cn(styles.text, styles.textArrow)}
								style={hidden ? { display: 'none' } : { display: 'block' }}>{l.title}

								<motion.span className={styles.arrow}
									variants={variantsHiddenArrow}
									initial={!hiddenLinks ? 'active' : 'passive'}
									transition={{ duration: 0.3 }}
									animate={!hiddenLinks ? 'active' : 'passive'}>
									<Arrow />
								</motion.span>
								<motion.div className={styles.hiddenLinks}
									variants={variantsHiddenDiv}
									initial={hiddenLinks ? 'active' : 'passive'}
									transition={{ duration: 0.3 }}
									animate={hiddenLinks ? 'active' : 'passive'}>
									<Htag tag='m' className={styles.hiddenText} onClick={() => {
										scrollIntoView(productionE, {time: 1500});
										setOpen(false);
										setHidden(false);
									}}>
										{setLocale(router.locale).production}
									</Htag>
									<Htag tag='m' className={styles.hiddenText} onClick={() => {
										scrollIntoView(brandsE, {time: 1500});
										setOpen(false);
										setHidden(false);
									}}>
										{setLocale(router.locale).brands}
									</Htag>
									<Htag tag='m' className={styles.hiddenText} onClick={() => {
										scrollIntoView(achievementsE, {time: 1500});
										setOpen(false);
										setHidden(false);
									}}>
										{setLocale(router.locale).achievements}
									</Htag>
								</motion.div>
							</Htag>
						</div>
				))}
			</motion.div>
			<div className={styles.openOrLang}>
				<HeaderLocaleChange />
				<BurgerMenu open={open} setOpen={setOpen} setHidden={setHidden} />
			</div>
		</header>
	);
};