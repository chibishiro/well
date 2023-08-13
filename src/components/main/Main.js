import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from "react-slick";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import React, { useRef, useState } from 'react'
import {Accordion, eventKey} from 'react-bootstrap'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import '../main/Main.scss'
import { Pagination} from 'swiper/modules';
import { Link } from 'react-router-dom';
import Thumb from "../../Pages/thumb/Thumb";

export default function Main() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 700,
          infinite: true,
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 700,
          infinite: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 700,
          infinite: true,
        }
      },
    ]
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  


  return (
    <>
          <main>
              <div className="main__menu__cards">
                <div className="vaccine__cards" id="vaccines">
                  <h2>Вакцины</h2>
                <Slider {...settings}>
                <div className="Provak">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/bursaplex.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>
                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak2">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/laringo.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>
                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak3">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/bursin.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info'  className='card-btn'>Подробнее...</Link>
                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak4">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/BursaP.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info'  className='card-btn'>Подробнее...</Link>
                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak5">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/ib.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>
                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak6">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/primer.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>
                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak7">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/qx.jpg' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>
                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak8">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/trt.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>
                          </div>
                      </div>
                    </div>
                    

                  </div>
                  <div className="Provak9">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/back.jpg' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>
                          </div>
                      </div>
                    </div>
                    

                  </div>
                  <div className="Provak10">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/mg.jpg' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>
                          </div>
                      </div>
                    </div>
                    

                  </div>

                </Slider>
                  
                </div>
                <div className="vaccine__cards" id="vitamines">
                  <h2>Витамины</h2>
                <Slider {...settings}>
                <div className="Provak">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/laringo.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>
                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak2">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/bursaplex.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>
                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak3">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/bursin.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>
                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak4">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/BursaP.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>
                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak5">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/ib.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>
                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak6">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/primer.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>
                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak7">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/qx.jpg' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>
                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak8">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/trt.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>
                          </div>
                      </div>
                    </div>
                    

                  </div>
                  <div className="Provak9">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/back.jpg' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>
                          </div>
                      </div>
                    </div>
                    

                  </div>
                  <div className="Provak10">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/mg.jpg' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>
                          </div>
                      </div>
                    </div>
                    

                  </div>

                </Slider>
                  
                </div>
                <div className="vaccine__cards" id="corms">
                  <h2>Кормовые добавки</h2>
                <Slider {...settings}>
                <div className="Provak">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/bursin.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>
                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak2">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/laringo.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>
                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak3">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/bursaplex.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>
                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak4">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/BursaP.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>
                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak5">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/ib.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>
                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak6">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/primer.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak7">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/qx.jpg' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak8">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/trt.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>                          </div>
                      </div>
                    </div>
                    

                  </div>
                  <div className="Provak9">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/back.jpg' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>                          </div>
                      </div>
                    </div>
                    

                  </div>
                  <div className="Provak10">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/mg.jpg' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>                          </div>
                      </div>
                    </div>
                    

                  </div>

                </Slider>
                  
                </div>
                <div className="vaccine__cards" id="dezinfix">
                  <h2>Дезинфекция</h2>
                <Slider {...settings}>
                <div className="Provak">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/bursaplex.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak2">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/BursaP.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak3">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>
                          <img className='card__tovar' src='./imgs/bursin.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak4">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>                          <img className='card__tovar' src='./imgs/laringo.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak5">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>                          <img className='card__tovar' src='./imgs/ib.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak6">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>                          <img className='card__tovar' src='./imgs/primer.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak7">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>                          <img className='card__tovar' src='./imgs/qx.jpg' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak8">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>                          <img className='card__tovar' src='./imgs/trt.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>                          </div>
                      </div>
                    </div>
                    

                  </div>
                  <div className="Provak9">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>                          <img className='card__tovar' src='./imgs/back.jpg' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>                          </div>
                      </div>
                    </div>
                    

                  </div>
                  <div className="Provak10">
                    <div className="card">
                      <div className="card-body">
                          <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>                          <img className='card__tovar' src='./imgs/mg.jpg' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>                          </div>
                      </div>
                    </div>
                    

                  </div>

                </Slider>
                  
                </div>
                <div className="vaccine__cards" id="machines">
                  <h2>Оборудования</h2>
                <Slider className="slider__prev" {...settings}>
                <div className="Provak">
                    <div className="card">
                      <div className="card-body">
                      <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>                          <img className='card__tovar' src='./imgs/bursaplex.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak2">
                    <div className="card">
                      <div className="card-body">
                      <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>                          <img className='card__tovar' src='./imgs/bursin.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak3">
                    <div className="card">
                      <div className="card-body">
                      <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>                          <img className='card__tovar' src='./imgs/laringo.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak4">
                    <div className="card">
                      <div className="card-body">
                      <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>                          <img className='card__tovar' src='./imgs/BursaP.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak5">
                    <div className="card">
                      <div className="card-body">
                      <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>                          <img className='card__tovar' src='./imgs/ib.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak6">
                    <div className="card">
                      <div className="card-body">
                      <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>                          <img className='card__tovar' src='./imgs/primer.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak7">
                    <div className="card">
                      <div className="card-body">
                      <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>                          <img className='card__tovar' src='./imgs/qx.jpg' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>                          </div>
                      </div>
                    </div>

                  </div>
                  <div className="Provak8">
                    <div className="card">
                      <div className="card-body">
                      <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>                          <img className='card__tovar' src='./imgs/trt.png' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>                          </div>
                      </div>
                    </div>
                    

                  </div>
                  <div className="Provak9">
                    <div className="card">
                      <div className="card-body">
                      <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>                          <img className='card__tovar' src='./imgs/back.jpg' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>                          </div>
                      </div>
                    </div>
                    

                  </div>
                  <div className="Provak10">
                    <div className="card">
                      <div className="card-body">
                      <div className="card__logo">
                            <img className='card__vector' src='./imgs/zoe.png' alt="" />
                            <div className="item"></div>
                          </div>                          <img className='card__tovar' src='./imgs/mg.jpg' alt="" />
                          <div className="card__menu">
                            <p>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</p>
                            <Link to='/Info' className='card-btn'>Подробнее...</Link>                          </div>
                      </div>
                    </div>
                    

                  </div>

                </Slider>
                  
                </div>
              </div>

              <h2 class="collapse__title">Часто задаваемые вопросы</h2>
                            <div class="tabs">
                                <section>
                                    <div class="tab">
                                        <input type="checkbox" id="chck1" />
                                        <label class="tab-label" for="chck1">Item 1</label>
                                        <div class="tab-content">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
                                        </div>
                                    </div>
                                    <div class="tab">
                                        <input type="checkbox" id="chck2" />
                                        <label class="tab-label" for="chck2">Item 2</label>
                                        <div class="tab-content">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                                        </div>
                                    </div>
                                    <div class="tab">
                                        <input type="checkbox" id="chck3" />
                                        <label class="tab-label" for="chck3">Item 3</label>
                                        <div class="tab-content">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <div class="tab">
                                        <input type="checkbox" id="chck4" />
                                        <label class="tab-label" for="chck4">Item 4</label>
                                        <div class="tab-content">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
                                        </div>
                                    </div>
                                    <div class="tab">
                                        <input type="checkbox" id="chck5" />
                                        <label class="tab-label" for="chck5">Item 5</label>
                                        <div class="tab-content">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                                        </div>
                                    </div>
                                    <div class="tab">
                                        <input type="checkbox" id="chck6" />
                                        <label class="tab-label" for="chck6">Item 6</label>
                                        <div class="tab-content">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                                        </div>
                                    </div>
                                </section>
                            </div>

              {/* <div className="main__about">
                <div className="about__head">
                  <h3 className="about__title">О компании</h3>
                  <p className="about__info">Компания «Sportova» специализируется на продаже шведских стенок, детских  площадок и тренажеров. Мы являемся официальными дилерами ведущих производителей шведских стенок и детских площадок.</p>
                </div>
                <a href="#navmenu">Подробнее </a>
              </div> */}


              {/* <div className="thumb__menu">
                  <div className="thumb__swiper">
                    <Swiper
                        style={{
                          '--swiper-navigation-color': '#fff',
                          '--swiper-pagination-color': '#fff',
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        
                        className="mySwiper2"
                      >
                        <SwiperSlide>
                        <img className='hen__koke' src="./imgs/hen.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img className='hen__koke' src='./imgs/baran.webp' alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img className='hen__koke' src="./imgs/moo.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img className='hen__koke' src="./imgs/goat.jpg" alt="" />
                        </SwiperSlide>
                    </Swiper>
                      
                    <Swiper
                      // onSwiper={setThumbsSwiper}
                      spaceBetween={20}
                      slidesPerView={3}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper"  
                    >   

                      <SwiperSlide>
                      <img className='hen__koko' src="./imgs/hen.png" alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                      <img className='hen__koko' src='./imgs/baran.webp' alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                      <img className='hen__koko' src="./imgs/moo.jpg" alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                      <img className='hen__koko' src="./imgs/goat.jpg" alt="" />
                      </SwiperSlide>
                    </Swiper> 
                  </div>

                  <div className="thumb__info">
              <p className="thumb__pr">Узкая специализация. Мы знаем больше нюансов и потребностей  клиента, чем магазины, которые продают все подряд. Соответственно, сможем лучше проконсультировать и подобрать необходимый Вам  комплекс; 90% ассортимента держим в наличии на складе в Нижнем  Новгороде и Москве; Выставочный зал, где все оборудование надежно  закреплено. Вы можете протестировать комплексы еще до покупки;  Если Вам необходима сборка шведской стенки, детской площадки или турника – мы предоставляем такую услугу. В компании работают  опытные и аккуратные специалисты. Также мы оказываем услугу по укорачиванию шведской стенки; Если товар не подошел, Вы можете его обменять или вернуть в течение расширенного срока в 30 дней;</p>
                  </div>

              </div> */}
              <Thumb/>


              <div className="our__services">
                  <h2 className="service__title">Преимущества</h2>
                  <p className="service__quest">Почему наши клиенты выбирают именно нас?</p>

                <div className="services__cards">
                  <div className="card1">
                      <img src="./imgs/mix-almaz.svg" alt="" />
                      <h3 className="card__title1">Сервисное и гарантийное обслуживание</h3>
                      <p>В нашем интернет магазине SPORTMIX предусмотрено сервисное и гарантийное обслуживание после приобретения товара. Подробности можете найти на странице сервис и гарантии</p>
                      <h5 className="card__number1">01</h5>
                    
                  </div>
                  <div className="card2">
                      <img src="./imgs/mix-gruz.svg" alt="" />
                      <h3 className="card__title2">Сервисное и гарантийное обслуживание</h3>
                      <p>В нашем интернет магазине SPORTMIX предусмотрено сервисное и гарантийное обслуживание после приобретения товара. Подробности можете найти на странице сервис и гарантии</p>
                      <h5 className="card__number2">02</h5>
                    
                  </div>
                  <div className="card3">
                      <img src="./imgs/mix-world.svg" alt="" />
                      <h3 className="card__title3">Сервисное и гарантийное обслуживание</h3>
                      <p>В нашем интернет магазине SPORTMIX предусмотрено сервисное и гарантийное обслуживание после приобретения товара. Подробности можете найти на странице сервис и гарантии</p>
                      <h5 className="card__number3">03</h5>
                    
                  </div>
                  <div className="card4">
                      <img src="./imgs/mix-world.svg" alt="" />
                      <h3 className="card__title4">Сервисное и гарантийное обслуживание</h3>
                      <p>В нашем интернет магазине SPORTMIX предусмотрено сервисное и гарантийное обслуживание после приобретения товара. Подробности можете найти на странице сервис и гарантии</p>
                      <h5 className="card__number4">04</h5>
                    
                  </div>
                </div>
            
              </div>


               <div className="spouncers__swiper">
               <h2>Наши партнёры</h2>
              <Swiper
                slidesPerView={4}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  425: {
                    slidesPerView: 1,
                    spaceBetween: 5,
                  },
                  1440: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  // 768: {
                  //   slidesPerView: 4,
                  //   spaceBetween: 40,
                  // },
                  577: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="zoe"><img src="./imgs/zoe.png" alt="" /></SwiperSlide>
        <SwiperSlide className="rice"><a href="#"><img className="wellrice" src="./imgs/rice__swipe.svg" alt="" /></a></SwiperSlide>
        <SwiperSlide className="zoe2"><img src="./imgs/zoe.png" alt="" /></SwiperSlide>
        <SwiperSlide className="rice2"><a href="#"><img className="wellrice" src="./imgs/rice__swipe.svg" alt="" /></a></SwiperSlide>
        <SwiperSlide className="zoe3"><img src="./imgs/zoe.png" alt="" /></SwiperSlide>
            </Swiper>
              </div>
             
             
          </main>
    </>
  )
}

