import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface SideBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	text: string,
	side: 'right' | 'left',
	isDark: boolean,
	children: ReactNode,
}
