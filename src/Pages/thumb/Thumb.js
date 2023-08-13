// import React, { Component } from "react";
import Slider  from "react-slick";
import React, { Component } from 'react';
import '../thumb/Thumb.scss';


export default class Thumb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null,

        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2,
        });
    }
    render() {
        var settings = {
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
          };
        function SampleNextArrow(props) {
            const { className, style, onClick } = props;
            return (
              <div
                className={className}
                style={{ ...style, display: "block", backgroundImage: `url("./imgs/right3.svg")`   }}
                onClick={onClick}
              />
            );
          }
          function SamplePrevArrow(props) {
            const { className, style, onClick } = props;
            return (
              <div
                className={className}
                style={{ ...style, display: "block",  backgroundImage: `url("./imgs/left3.svg")` }}
                onClick={onClick}
              />
            );
          }
    
        return (
            <>

                <div className="main__about">
                    <div className="about__head">
                        <h3 className="about__title">О компании</h3>
                        <p className="about__info">Компания «Sportova» специализируется на продаже шведских стенок, детских  площадок и тренажеров. Мы являемся официальными дилерами ведущих производителей шведских стенок и детских площадок.</p>
                    </div>
                    <a href="#navmenu">Подробнее </a>
              </div>
                <div className="about">
                    <div className="slider">
                        <Slider
                            asNavFor={this.state.nav2}
                            ref={slider => (this.slider1 = slider)}
                            className='sl1'
                            {...settings}
                        >
                            <div>
                                <img src="https://hozyain.by/wp-content/uploads/2020/02/Koza1.jpg" alt="" />
                            </div>
                            <div>
                                <img src="./imgs/hen.png" alt="" />
                            </div>
                            <div>
                                <img src="https://www.5.ua/media/pictures/original/228166.jpg?t=1630480093" alt="" />
                            </div>
                            <div>
                                <img src="https://meatinfo.ru/data/news/441769/sam-carter-ghoiyov2tsq-unsplash.webp" alt="" />
                            </div>
                        </Slider>
                        <Slider
                            asNavFor={this.state.nav1}
                            ref={slider => (this.slider2 = slider)}
                            slidesToShow={3}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            arrows={false}
                            className='sl2'
                        >
                            <div className="sl3">
                                <img src="https://hozyain.by/wp-content/uploads/2020/02/Koza1.jpg" alt="" />
                            </div>
                            <div className="sl3">
                                <img src="./imgs/hen.png" alt="" />
                            </div>
                            <div className="sl3">
                                <img src="https://www.5.ua/media/pictures/original/228166.jpg?t=1630480093" alt="" />
                            </div>
                            <div className="sl3">
                                <img src="https://meatinfo.ru/data/news/441769/sam-carter-ghoiyov2tsq-unsplash.webp" alt="" />
                            </div>
                        </Slider>
                    </div>
                    <div className="texto">
                        <p>Узкая специализация. Мы знаем больше нюансов и потребностей клиента, чем магазины, которые продают все подряд. Соответственно, сможем лучше проконсультировать и подобрать необходимый Вам комплекс;
                            90% ассортимента держим в наличии на складе в Нижнем Новгороде и Москве;
                            Выставочный зал, где все оборудование надежно закреплено. Вы можете протестировать комплексы еще до покупки;
                            Если Вам необходима сборка шведской стенки, детской площадки или турника – мы предоставляем такую услугу. В компании работают опытные и аккуратные специалисты. Также мы оказываем услугу по укорачиванию шведской стенки;
                            Если товар не подошел, Вы можете его обменять или вернуть в течение расширенного срока в 30 дней;</p>
                    </div>
                </div>
            </>
        );
    }
}