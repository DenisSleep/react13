import style from './HomePage.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Banner } from '../../components/BannerComponent/BannerComponent';
import { Catalog } from '../../components/CatalogComponent/Catalog'
import { FadeSlider } from '../../components/SliderComponent/SliderComponent';
import { Accordeon } from '../../components/AcardionComponent/AcardionComponent';

export function HomePage() {
    return (
        <>
            <Banner />
            <div className='container'>
                <FadeSlider />
                <Accordeon />
                <div className="mt110">
                    <Catalog />
                </div>
            </div>
        </>
    )
}