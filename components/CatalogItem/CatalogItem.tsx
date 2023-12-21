import { CatalogItemProps } from './CatalogItem.props';
import styles from './CatalogItem.module.css';
import Image from 'next/image';
import { Htag } from '../Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';
import { useRouter } from 'next/router';


export const CatalogItem = ({ image, title, art, barcode, count }: CatalogItemProps): JSX.Element => {
	const router = useRouter();
	
	return (
		<div className={styles.catalogItem}>
			<div className={styles.imageDiv}>
				<Image className={styles.image} draggable='false'
					loader={() => image}
					src={image}
					alt='image'
					width={1}
					height={1}
					unoptimized={true}
					priority={true}
				/>
			</div>
			<Htag tag='l' className={styles.title}>{title}</Htag>
			<Htag tag='m' className={styles.text}>
				{setLocale(router.locale).catalog_page.art + ': ' + art}
			</Htag>
			<Htag tag='m' className={styles.text}>
				{setLocale(router.locale).catalog_page.barcode + ': ' +barcode}
			</Htag>
			<Htag tag='m' className={styles.text}>
				{setLocale(router.locale).catalog_page.packages_in_box + ': ' + count}
			</Htag>
        </div>
	);
};