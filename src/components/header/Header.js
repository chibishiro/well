import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import './Header.scss'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { BallTriangle } from 'react-loader-spinner'
import {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick} = props;
    return (
      <div
        className={className}
        style={{ ...style,}}
        onClick={onClick}
      />

    );
  }

export default function Header() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const settinges = {
        fade: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        
    }

    

  return (
    <>


          <header>
 
      <div className="header__menu">
              <input id="test" type="checkbox" />
        <label for="test">
            <svg class="burger" width="86" height="60" viewbox="0 0 150 150">
                <g stroke-width="2">   
                    <line x1="1" y1="1" x2="40" y2="1"></line>
                    <line x1="1" y1="15" x2="40" y2="15"></line>
                    <line x1="1" y1="28" x2="40" y2="28"> </line>
                </g>
            </svg>
        </label>
        <div class="menu">
          <input id="test" type="checkbox" />
            <label for="test">
                <svg className='close' xmlns="http://www.w3.org/2000/svg" fill='#fff' viewBox="0 0 32 32" width="64px" height="64px"><path d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z"/></svg>
            </label>
          <h2 class="cont__name">Список товаров</h2>
            <div className="vaccines">
                <div className="tabletki">
                  <h3>Вакцины</h3>
                  <div className="tabletka">
                      <a href="#">
                        <img src="./imgs/bursaplex.png" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p>
                  </div>
                  <div className="tabletka">
                      <a href="#">
                      <img src="./imgs/laringo.png" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p>      
                  </div>
                  <div className="tabletka">
                      <a href="#">
                      <img src="./imgs/col1.png" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p> 
                  </div>
                  <div className="tabletka">
                      <a href="#">
                      <img src="./imgs/bursaP.png" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p> 
                  </div>
                  <div className="tabletka">
                      <a href="#">
                        <img src="./imgs/ib.png" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p> 
                  </div>
                  <div className="tabletka">
                      <a href="#">
                      <img src="./imgs/col2.png" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p> 
                  </div>
                  <div className="tabletka">
                      <a href="#">
                        <img src="./imgs/col3.jpg" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p> 
                  </div>
                  <div className="tabletka">
                      <a href="#">
                        <img src="./imgs/trt.png" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p> 
                  </div>
                  <div className="tabletka">
                      <a href="#">
                      <img src="./imgs/back.jpg" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p> 
                  </div>
                  <div className="tabletka">
                      <a href="#">
                        <img src="./imgs/mg.jpg" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p> 
                  </div>
                  
                  
                </div>
                <div className="tabletki">
                  <h3>Вакцины</h3>
                  <div className="tabletka">
                      <a href="#">
                        <img src="./imgs/bursaplex.png" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p>
                  </div>
                  <div className="tabletka">
                      <a href="#">
                      <img src="./imgs/laringo.png" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p>      
                  </div>
                  <div className="tabletka">
                      <a href="#">
                      <img src="./imgs/col1.png" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p> 
                  </div>
                  <div className="tabletka">
                      <a href="#">
                      <img src="./imgs/bursaP.png" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p> 
                  </div>
                  <div className="tabletka">
                      <a href="#">
                        <img src="./imgs/ib.png" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p> 
                  </div>
                  <div className="tabletka">
                      <a href="#">
                      <img src="./imgs/col2.png" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p> 
                  </div>
                  <div className="tabletka">
                      <a href="#">
                        <img src="./imgs/col3.jpg" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p> 
                  </div>
                  <div className="tabletka">
                      <a href="#">
                        <img src="./imgs/trt.png" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p> 
                  </div>
                  <div className="tabletka">
                      <a href="#">
                      <img src="./imgs/back.jpg" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p> 
                  </div>
                  <div className="tabletka">
                      <a href="#">
                        <img src="./imgs/mg.jpg" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p> 
                  </div>
                  
                  
                </div>
                <div className="tabletki">
                  <h3>Вакцины</h3>
                  <div className="tabletka">
                      <a href="#">
                        <img src="./imgs/bursaplex.png" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p>
                  </div>
                  <div className="tabletka">
                      <a href="#">
                      <img src="./imgs/laringo.png" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p>      
                  </div>
                  <div className="tabletka">
                      <a href="#">
                      <img src="./imgs/col1.png" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p> 
                  </div>
                  <div className="tabletka">
                      <a href="#">
                      <img src="./imgs/bursaP.png" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p> 
                  </div>
                  <div className="tabletka">
                      <a href="#">
                        <img src="./imgs/ib.png" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p> 
                  </div>
                  <div className="tabletka">
                      <a href="#">
                      <img src="./imgs/col2.png" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p> 
                  </div>
                  <div className="tabletka">
                      <a href="#">
                        <img src="./imgs/col3.jpg" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p> 
                  </div>
                  <div className="tabletka">
                      <a href="#">
                        <img src="./imgs/trt.png" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p> 
                  </div>
                  <div className="tabletka">
                      <a href="#">
                        <img src="./imgs/back.jpg" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p> 
                  </div>
                  <div className="tabletka">
                      <a href="#">
                        <img src="./imgs/mg.jpg" alt="" />
                      </a>
                      <p>Бурсаплекс(Bursaplex)</p> 
                  </div>
                  
                  
                </div>
            </div>
        </div>


      
         <ul className='nav header__uls'>
             <li className='nav-item'><a className='nav-link' href="#vaccines">Вакцина</a></li>
             <li className='nav-item'><a className='nav-link' href="#vitamines">Витамины</a></li>
             <li className='nav-item'><a className='nav-link' href="#corms">Кормовые добавки</a></li>
             <li className='nav-item'><a className='nav-link' href="#dezinfix">Дезинфекция</a></li>
             <li className='nav-item'><a className='nav-link' href="#machines">Оборудования</a></li>
         </ul>

 </div>

    <div className="menu__mini">
          <input id='check' type='checkbox' />
          <label for="check">
              <img src="./imgs/down5.svg" alt="" />
              <p>Каталог товаров</p>
              <img src="./imgs/down5.svg" alt="" />
          </label>

          <div className="mini__vaccines">
            <a className='nav__menu' href="#vaccines">Вакцина</a>
            <a className='nav__menu' href="#vitamines">Витамины</a>
            <a className='nav__menu' href="#corms">Кормовые добавки</a>
            <a className='nav__menu' href="#dezinfix">Дезинфекция</a>
            <a className='nav__menu' href="#machines">Оборудования</a>

          </div>

        </div>
 

         <div className="header__menu__slides">
             <div className="animal__swiper">
             <Swiper
                 pagination={{
                   type: 'fraction',
                 }}
                 navigation={true}
                 modules={[Pagination, Navigation]}
                 className="mySwiper"
               >
                 <SwiperSlide>
                 <div className="first__slide">
                   <a href="https://youtu.be/KZE5OpK7dII">
                       <img className='hen__koko' src="./imgs/hen.png" alt="" />
                   </a>
                       <div className="slide__texts">
                           <p className='slide__title'>Соберите шведскую <br /> стенку по своему <br /> желавнию!</p>
                           <p className='slide__info'>Проснувшись однажды утром после беспокойного <br /> сна, Грегор Замза обнаружил, что он у себя в <br /> постели превратился в страшное насекомое.</p>
                           <button className='slide__btn' >Bizga qong'iroq qiling</button>
                       </div>
                   </div>
                 </SwiperSlide>
                 <SwiperSlide>
                 <div className="second__slide">
                   <a href="https://youtu.be/KZE5OpK7dII">
                       <img className='baranina' src="./imgs/baran.webp" alt="" />
                   </a>
                       <div className="slide__texts">
                           <p className='slide__title'>Соберите шведскую <br /> стенку по своему <br /> желавнию!</p>
                           <p className='slide__info'>Проснувшись однажды утром после беспокойного <br /> сна, Грегор Замза обнаружил, что он у себя в <br /> постели превратился в страшное насекомое.</p>
             
                           <button className='slide__btn'>Bizga qong'iroq qiling</button>
                       </div>

                   </div>
                 </SwiperSlide>
                 <SwiperSlide>
                 <div className="third__slide">
                   <a href="https://youtu.be/KZE5OpK7dII">
                       <img src="./imgs/moo.jpg" alt="" />
                   </a>
                       <div className="slide__texts">
                           <p className='slide__title'>Соберите шведскую <br /> стенку по своему <br /> желавнию!</p>
                           <p className='slide__info'>Проснувшись однажды утром после беспокойного <br /> сна, Грегор Замза обнаружил, что он у себя в <br /> постели превратился в страшное насекомое.</p>
             
                           <button className='slide__btn'>Bizga qong'iroq qiling</button>
                       </div>
             
                   </div>
                 </SwiperSlide>
                 <SwiperSlide>
                 <div className="fourth__slide">
                   <a href="https://youtu.be/KZE5OpK7dII">
                       <img src="./imgs/goat.jpg" alt="" />
                   </a>
                       <div className="slide__texts">
                           <p className='slide__title'>Соберите шведскую <br /> стенку по своему <br /> желавнию!</p>
                           <p className='slide__info'>Проснувшись однажды утром после беспокойного <br /> сна, Грегор Замза обнаружил, что он у себя в <br /> постели превратился в страшное насекомое.</p>
                           <button className='slide__btn'>Bizga qong'iroq qiling</button>
                       </div>
                   </div>
                 </SwiperSlide>

               </Swiper>
             
             </div>


             

             
         </div>

         <div className="class__fades" >
                 <Slider {...settinges}>
                     <div className="fade__first">
                       <p className='popular'>популярные товары</p>
                        <p className='fade__info'>Бурсин (Bursaplex) - вакцины <br /> против инфекционной <br /> бурсальной болезни</p>
                        <img className='bursin' src="./imgs/bursin.png" alt="" />
                        <a className='fill__down' href="#vaccines">
                        <svg className='down__white' stroke="currentColor" fill="#fff" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"></path></svg>
                        </a>
                     </div>

                     <div className="fade__second">
                       <p className='popular'>популярные товары</p>
                       <p className='fade__info'>Ларинго (Bursaplex) - вакцины <br /> против инфекционной <br /> бурсальной болезни</p>
                       <img className='laringo' src="./imgs/laringo.png" alt="" />
                       <a className='fill__laringo' href="#">
                       <svg className='down__white' stroke="currentColor" fill="#fff" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"></path></svg>
                       </a>
                     </div>

                     <div className="fade__third">
                       <p className='popular'>популярные товары</p>
                       <p className='fade__info'>Matabi (Bursaplex) - вакцины <br /> против инфекционной <br /> бурсальной болезни</p>
                       <img className='matabibe' src="./imgs/matabibe.svg" alt="" />
                       <a className='fill__matabibe' href="#">
                       <svg className='down__matabibe' stroke="currentColor" fill="#fff" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"></path></svg>
                       </a>
                     </div> 
                 </Slider>

                 <div className="followers" id='followers'>
               <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 8a5.5 5.5 0 1 1 8.596 4.547 9.005 9.005 0 0 1 5.9 8.18.751.751 0 0 1-1.5.045 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.499-.044 9.005 9.005 0 0 1 5.9-8.181A5.496 5.496 0 0 1 3.5 8ZM9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm8.29 4c-.148 0-.292.01-.434.03a.75.75 0 1 1-.212-1.484 4.53 4.53 0 0 1 3.38 8.097 6.69 6.69 0 0 1 3.956 6.107.75.75 0 0 1-1.5 0 5.193 5.193 0 0 0-3.696-4.972l-.534-.16v-1.676l.41-.209A3.03 3.03 0 0 0 17.29 8Z"></path></svg>
               <p><span>БОЛЕЕ 100M </span> <br/> людей просматривают нас <br /> в соц. сетях</p>
               <img className='back__bg' src="./imgs/backph.png" alt="" />
             </div>

             </div>


        

          </header>
           
           
                        
                        

    </>
  )
}
