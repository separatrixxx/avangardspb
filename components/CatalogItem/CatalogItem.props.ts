import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CatalogItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	image: string,
    title: string,
    art: number,
    barcode: number,
    count: number,
}