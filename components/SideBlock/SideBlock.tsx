import { SideBlockProps } from './SideBlock.props';
import styles from './SideBlock.module.css';
import { Htag } from '../Htag/Htag';
import cn from 'classnames';


export const SideBlock = ({ text, side, isDark, children }: SideBlockProps): JSX.Element => {   
    return (
        <div className={cn(styles.sideBlock, {
            [styles.leftSide]: side === 'left',
        })}>
            <Htag tag='xl' className={cn(styles.text, {
                [styles.dark]: isDark,
            })}>
                {text}
            </Htag>
            {children}
        </div>
    );
};