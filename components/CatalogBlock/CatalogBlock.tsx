import styles from './CatalogBlock.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, A11y, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useRouter } from 'next/router';
import { useResizeW } from '../../hooks/useResize';
import { Catalog } from '../../interfaces/catalog.interface';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import { Htag } from '../Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';


export const CatalogBlock = (): JSX.Element => {
    const router = useRouter();

    const width = useResizeW();

    const catalog1: Catalog = {
        image: '/CatalogImg1.webp',
        title: setLocale(router.locale).catalog_page.title1,
        art: 70900,
        barcode: 4607054709000,
        count: 80,
    };

    const catalog2: Catalog = {
        image: '/CatalogImg2.webp',
        title: setLocale(router.locale).catalog_page.title2,
        art: 48706,
        barcode: 4607091487060,
        count: 50,
    };

    const catalog3: Catalog = {
        image: '/CatalogImg3.webp',
        title: setLocale(router.locale).catalog_page.title3,
        art: 48119,
        barcode: 4607091481198,
        count: 3,
    };

    const catalog4: Catalog = {
        image: '/CatalogImg4.webp',
        title: setLocale(router.locale).catalog_page.title4,
        art: 30646,
        barcode: 4620016306468,
        count: 120,
    };

    const catalog5: Catalog = {
        image: '/CatalogImg5.webp',
        title: setLocale(router.locale).catalog_page.title5,
        art: 72178,
        barcode: 4610080721786,
        count: 100,
    };

    const catalog6: Catalog = {
        image: '/CatalogImg6.webp',
        title: setLocale(router.locale).catalog_page.title6,
        art: 48118,
        barcode: 4607091481181,
        count: 120,
    };

    const catalog7: Catalog = {
        image: '/CatalogImg7.webp',
        title: setLocale(router.locale).catalog_page.title7,
        art: 48330,
        barcode: 4607091483307,
        count: 15,
    };

    const catalog8: Catalog = {
        image: '/CatalogImg8.webp',
        title: setLocale(router.locale).catalog_page.title8,
        art: 72354,
        barcode: 4610080723544,
        count: 77,
    };

    const catalog9: Catalog = {
        image: '/CatalogImg9.webp',
        title: setLocale(router.locale).catalog_page.title9,
        art: 72786,
        barcode: 4610080727863,
        count: 120,
    };

    const catalog10: Catalog = {
        image: '/CatalogImg10.webp',
        title: setLocale(router.locale).catalog_page.title10,
        art: 30107,
        barcode: 4620016301074,
        count: 1,
    };

    const catalog11: Catalog = {
        image: '/CatalogImg11.webp',
        title: setLocale(router.locale).catalog_page.title11,
        art: 30107,
        barcode: 4620016301074,
        count: 64,
    };

    const catalog12: Catalog = {
        image: '/CatalogImg12.webp',
        title: setLocale(router.locale).catalog_page.title12,
        art: 30107,
        barcode: 4620016301074,
        count: 80,
    };

    const catalog13: Catalog = {
        image: '/CatalogImg13.webp',
        title: setLocale(router.locale).catalog_page.title13,
        art: 30107,
        barcode: 4620016301074,
        count: 20,
    };

    const catalog14: Catalog = {
        image: '/CatalogImg14.webp',
        title: setLocale(router.locale).catalog_page.title14,
        art: 30107,
        barcode: 4620016301074,
        count: 42,
    };

    const catalog15: Catalog = {
        image: '/CatalogImg15.webp',
        title: setLocale(router.locale).catalog_page.title15,
        art: 30107,
        barcode: 4620016301074,
        count: 60,
    };

    const catalog = [catalog1, catalog2, catalog3, catalog4, catalog5, catalog6, catalog7, catalog8, catalog9, catalog10];

    return (
        <div id='catalogBlock' className={styles.catalogBlock}>
            <Htag tag='xxl' className={styles.catalogTitle}>
                {setLocale(router.locale).catalog}
            </Htag>
            <Swiper className={styles.swiper} style={{ width: width * 0.99 }}
                modules={[Pagination, A11y, Autoplay, Navigation]}
                spaceBetween={20}
                slidesPerView={ width > 1024 ? 3 : width > 580 ? 2 : 1 }
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
            >
                {catalog.map(c => (
                    <SwiperSlide key={c.art}>
                        <div className={styles.swiperItem}>
                            <CatalogItem image={c.image} title={c.title} art={c.art} barcode={c.barcode} count={c.count} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};