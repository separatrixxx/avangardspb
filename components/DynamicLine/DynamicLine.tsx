import { DynamicLineProps } from './DynamicLine.props';
import styles from './DynamicLine.module.css';
import cn from 'classnames';


export const DynamicLine = ({ type, direction, speed, elements }: DynamicLineProps): JSX.Element => {
	const E0: any = elements[0];
	const E1: any = elements[1];
	const E2: any = elements[2];
	const E3: any = elements[3];
	const E4: any = elements[4];
	const E5: any = elements[5];
	const E6: any = elements[6];
	const E7: any = elements[7];
	const E8: any = elements[8];
	const E9: any = elements[9];
	const E10: any = elements[10];
	const E11: any = elements[11];

	if (type === '1') {
		return (
			<div className={styles.lineWrapper}>
				<span className={cn(styles.line, {
					[styles.right]: direction === 'right',
					[styles.left]: direction === 'left',
					[styles.fast]: speed === 'fast',
					[styles.medium]: speed === 'medium',
					[styles.slow]: speed === 'slow',
				})}>
					<E0 />
					<E1 />
					<E2 />
					<E3 />
					<E4 />
					<E5 />
				</span>
				<span className={cn(styles.line, {
					[styles.line2Right]: direction === 'right',
					[styles.line2Left]: direction === 'left',
					[styles.fast]: speed === 'fast',
					[styles.medium]: speed === 'medium',
					[styles.slow]: speed === 'slow',
				})}>
					<E6 />
					<E7 />
					<E8 />
					<E9 />
					<E10 />
					<E11 />
				</span>
				<span className={cn(styles.line, {
					[styles.line3Right]: direction === 'right',
					[styles.line3Left]: direction === 'left',
					[styles.fast]: speed === 'fast',
					[styles.medium]: speed === 'medium',
					[styles.slow]: speed === 'slow',
				})}>
					<E0 />
					<E1 />
					<E2 />
					<E3 />
					<E4 />
					<E5 />
				</span>
			</div>
		);
	} else if (type === '2') {
		return (
			<div className={styles.lineWrapper}>
				<span className={cn(styles.line, {
					[styles.right]: direction === 'right',
					[styles.left]: direction === 'left',
					[styles.fast]: speed === 'fast',
					[styles.medium]: speed === 'medium',
					[styles.slow]: speed === 'slow',
				})}>
					<E2 />
					<E3 />
					<E0 />
					<E1 />
					<E6 />
					<E7 />
				</span>
				<span className={cn(styles.line, {
					[styles.line2Right]: direction === 'right',
					[styles.line2Left]: direction === 'left',
					[styles.fast]: speed === 'fast',
					[styles.medium]: speed === 'medium',
					[styles.slow]: speed === 'slow',
				})}>
					<E4 />
					<E10 />
					<E5 />
					<E11 />
					<E8 />
					<E9 />
				</span>
				<span className={cn(styles.line, {
					[styles.line3Right]: direction === 'right',
					[styles.line3Left]: direction === 'left',
					[styles.fast]: speed === 'fast',
					[styles.medium]: speed === 'medium',
					[styles.slow]: speed === 'slow',
				})}>
					<E2 />
					<E3 />
					<E0 />
					<E1 />
					<E6 />
					<E7 />
				</span>
			</div>
		);
	} else {
		return (
			<div className={styles.lineWrapper}>
				<span className={cn(styles.line, {
					[styles.right]: direction === 'right',
					[styles.left]: direction === 'left',
					[styles.fast]: speed === 'fast',
					[styles.medium]: speed === 'medium',
					[styles.slow]: speed === 'slow',
				})}>
					<E0 />
					<E1 />
					<E2 />
					<E3 />
					<E9 />
					<E11 />
				</span>
				<span className={cn(styles.line, {
					[styles.line2Right]: direction === 'right',
					[styles.line2Left]: direction === 'left',
					[styles.fast]: speed === 'fast',
					[styles.medium]: speed === 'medium',
					[styles.slow]: speed === 'slow',
				})}>
					<E5 />
					<E4 />
					<E8 />
					<E7 />
					<E6 />
					<E10 />
				</span>
				<span className={cn(styles.line, {
					[styles.line3Right]: direction === 'right',
					[styles.line3Left]: direction === 'left',
					[styles.fast]: speed === 'fast',
					[styles.medium]: speed === 'medium',
					[styles.slow]: speed === 'slow',
				})}>
					<E0 />
					<E1 />
					<E2 />
					<E3 />
					<E9 />
					<E11 />
				</span>
			</div>
		);
	}
};