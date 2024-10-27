import style from './SliderComponent.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



export function FadeSlider() {
    {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            waitForAnimate: false
        };
        return (
            <>
                <div className={style.t}>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className={style.item}>
                                <img src='https://avatars.mds.yandex.net/i?id=06352551022dd4ace6dea192c901bafb_l-4055793-images-thumbs&n=13' />
                            </div>
                            <div className={style.item}>
                                <img src='https://avatars.mds.yandex.net/i?id=2ed90672d8f9f1a740199eb4b89796e1_l-3562367-images-thumbs&n=13' />
                            </div>
                            <div className={style.item}>
                                <img src='https://avatars.mds.yandex.net/i?id=06352551022dd4ace6dea192c901bafb_l-4055793-images-thumbs&n=13' />
                            </div>
                            <div className={style.item}>
                                <img src='https://avatars.mds.yandex.net/i?id=2ed90672d8f9f1a740199eb4b89796e1_l-3562367-images-thumbs&n=13' />
                            </div>
                        </Slider>
                    </div>
                </div>
            </>

        );
    }
}