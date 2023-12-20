import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ImageBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	image: string,
    text: string,
}
