import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from './logo_icon.svg';
import Arrow from './arrow.svg';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { Links } from '../../interfaces/components.interface';
import { setLocale } from '../../helpers/locale.helper';
import { useScrollY } from '../../hooks/useScrollY';
import { useResizeW } from '../../hooks/useResize';
import { Htag } from '../Htag/Htag';
import { BurgerMenu } from '../BurgerMenu/BurgenMenu';
import { HeaderLocaleChange } from '../HeaderLocaleChange/HeaderLocaleChange';


export const Header = ({ count }: HeaderProps): JSX.Element => {
	const router = useRouter();

	const [hiddenLinks, setHiddenLinks] = useState<boolean>(true);

	const links: Links[] = [
		{ title: 'Title1', more: true },
		{ title: 'Title2', link: '' },
		{ title: 'Title3', link: '' },
		{ title: 'Title4', link: '' },
		{ title: 'Title4', link: '' },
	];

	const [open, setOpen] = useState<boolean>(false);
	const [lastScroll, setLastScroll] = useState<number>(0);
	const [flag, setFlag] = useState<boolean>(false);
	const [hidden, setHidden] = useState<boolean>(false);

	const scrollPosition = useScrollY();
	const width = useResizeW();

	if (scrollPosition - lastScroll >= 200 && scrollPosition > lastScroll) {
		setOpen(false);
		setFlag(true);
		setLastScroll(scrollPosition);
	} else if (scrollPosition < lastScroll) {
		setFlag(false);
		setLastScroll(scrollPosition);
	}

	const variants = {
		visible: {
			transform: 'translate(0%, 0%)',
		},
		hidden: {
			transform: 'translate(0%, -100%)',
		}
	};

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
		<motion.header className={styles.header}
			variants={variants}
			initial={flag ? 'hidden' : 'visible'}
			transition={{ duration: 0.3 }}
			animate={flag ? 'hidden' : 'visible'}>
			<Link href='/' className={styles.logo} aria-label="Go Home"><Logo /></Link>
			<motion.div className={styles.headerBlock}
				variants={variantsBlock}
				initial={open || width > 1024 ? 'visible' : 'hidden'}
				animate={open || width > 1024 ? 'visible' : 'hidden'}
				style={width > 1024 ? { gridTemplateColumns: `repeat(${links.length}, auto)` } : { gridTemplateRows: `repeat(${links.length}, auto)` }}>
				{links.map(l => (
					!l.more ?
						<Link href={"/" + l.link} key={l.link} style={hidden ? { display: 'none' } : { display: 'block' }}>
							<Htag tag='m' className={styles.text}>{l.title}</Htag>
						</Link>
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
									< Arrow />
								</motion.span>
								<motion.div className={styles.hiddenLinks}
									variants={variantsHiddenDiv}
									initial={hiddenLinks ? 'active' : 'passive'}
									transition={{ duration: 0.3 }}
									animate={hiddenLinks ? 'active' : 'passive'}>
									<Link href='/about'>
										<Htag tag='m' className={styles.hiddenText}>{'Title1'}</Htag>
									</Link>
									<Link href='/kiwi_farm'>
										<Htag tag='m' className={styles.hiddenText}>{'Title2'}</Htag>
									</Link>
									<Link href='/culture'>
										<Htag tag='m' className={styles.hiddenText}>{'Title3'}</Htag>
									</Link>
								</motion.div>
							</Htag>
						</div>
				))}
			</motion.div>
			<div className={styles.openOrLang}>
				<HeaderLocaleChange />
				<BurgerMenu open={open} setOpen={setOpen} setHidden={setHidden} />
			</div>
		</motion.header>
	);
};