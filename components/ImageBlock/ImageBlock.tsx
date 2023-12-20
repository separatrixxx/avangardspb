import { ImageBlockProps } from './ImageBlock.props';
import styles from './ImageBlock.module.css';
import Image from 'next/image';


export const ImageBlock = ({ image, text }: ImageBlockProps): JSX.Element => {   
    return (
        <div className={styles.imageBlock}>
            <Image className={styles.img} draggable='false'
                loader={() => image}
                src={image}
                alt={text}
                width={1}
                height={1}
                unoptimized={true}
            />
        </div>
    );
};