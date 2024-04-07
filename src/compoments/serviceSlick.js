import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import './Slick.scss';
import xit1 from './img/xit1.jpg';
import xit2 from './img/xit2.jpg';
import xit3 from './img/xit3.jpg';
export const Slickservice = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
    };
    return (
        <div className="slider-container">
            <div className="slider-header">
                <div className="header-items d-flex">
                    <h3>Dich vu </h3>
                    <button className=" btn btn-outline-secondary" type="">Xem thêm</button>
                </div>
            </div>
            <div className="slider-content">
                <Slider {...settings}>
                    <div className="slider-image">
                        <img className="img-fluid" src={xit1} alt="" />
                        <h3>Cat toc nam</h3>
                    </div>
                    <div className="slider-image">
                        <img className="img-fluid" src={xit2} alt="" />
                        <h3>Cat toc nu</h3>
                    </div>
                    <div className="slider-image">
                        <img className="img-fluid" src={xit3} alt="" />
                        <h3>Cat toc nam</h3>
                    </div>
                    <div className="slider-image">
                        <img className="img-fluid" src={xit2} alt="" />
                        <h3>Cat toc nam</h3>
                    </div>
                    <div className="slider-image">
                        <img className="img-fluid" src={xit3} alt="" />
                        <h3>Cat toc nam</h3>
                    </div>
                    <div className="slider-image">
                        <img className="img-fluid" src={xit2} alt="" />
                        <h3>Cat toc nam</h3>
                    </div>
                    <div className="slider-image">
                        <img className="img-fluid" src={xit1} alt="" />
                        <h3>Cat toc nam</h3>
                    </div>
                    <div className="slider-image">
                        <img className="img-fluid" src={xit2} alt="" />
                        <h3>Cat toc nam</h3>
                    </div>
                    <div className="slider-image">
                        <img className="img-fluid" src={xit2} alt="" />
                        <h3>Cat toc nam</h3>
                    </div>
                    <div className="slider-image">
                        <img className="img-fluid" src={xit1} alt="" />
                        <h3>Cat toc nam</h3>
                    </div>
                    <div className="slider-image">
                        <img className="img-fluid" src={xit1} alt="" />
                        <h3>Cat toc nam</h3>
                    </div>
                </Slider>
            </div>
        </div>

    );
}