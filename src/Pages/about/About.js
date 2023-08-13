import React from 'react'
import '../about/About.scss'
import Footer from '../../components/footer/Footer'
import { BallTriangle } from 'react-loader-spinner'
import {useState, useEffect} from 'react';


export default function About() {

    const [loading, setLoading] = useState(true)
    useEffect(() =>{
      setLoading(true)
      setTimeout(() =>{
        setLoading(false)
      },2000)
    },2000)
  return (
    <>


            {
              loading?
                <div className='qush7'>
                    <img src="./imgs/qush11.gif" alt="" />
                </div>
              :
                <div>
                <div className="about">
              <div className='about__menu'>
              <div className="contacts__menu">
            <h2>Statistik bo'limi</h2>
            <p className='head__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nulla laborum iure  exercitationem, libero fugit itaque voluptatem nihil facilis alias vero animi fuga optio et vitae  rem explicabo nam, atque odit placeat voluptatum temporibus molestias? Perferendis dicta  quod quidem.</p>

            <div className="process__table">
                <div className="process__texts">
                    <h4 className='lorem1'>682,000 <span>Lorem, ipsum dolor.</span></h4>
                    <hr />
                    <h4 className='lorem2'>8,742 <span>Lorem ipsum dolor sit <br /> amet consectetur.</span></h4>
                    <hr />
                    <h4 className='lorem3'>1,268 <span>Lorem, ipsum dolor.</span></h4>
                    <hr />
                    <h4 className='lorem4'>1,000 <span>Lorem ipsum dolor sit <br /> amet consectetur.</span></h4>
                </div>
               
            </div>

        </div>

        <div className="contacts__about">
            <div className="about__us">
                <h3>О нас</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae aperiam error neque culpa, aliquam optio eligendi sit, accusantium expedita deserunt libero veritatis voluptate animi porro blanditiis! Iusto reiciendis voluptatum sint in nesciunt eum inventore? Distinctio dolore tenetur quos cumque fugit repudiandae nobis odit blanditiis labore, illo.</p>
            </div>

            <div className="about__cards">
                <div className="about__text">
                <h3>Lorem ipsum dolor sit am?</h3>
                <p className='card__info'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus obcaecati ad placeat quae nemo animi ab vel tempora. Voluptatibus, sed. Lorem, ipsum.</p>
                </div>
               

                <div className="cards">
                <div className="card1">
                    <h2>1</h2>
                    <p>Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</p>
                </div>
                <div className="card2">
                    <h2>2</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Lorem, ipsum dolor.</p>
                </div>
                <div className="card3">
                    <h2>3</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing. Lorem,</p>
                </div>
                <div className="card4">
                    <h2>4</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Lorem, ipsum dolor.</p>
                </div>
                </div>
              
            </div>

            <div className="objects">
                <div className="object1">
                <div className="texts">
                    <h4>5,000</h4>
                    <h5>ОБРАЗЕЦ ЗАГОЛОВКА</h5>
                </div>
                <div className="white__card">
                <p>Кадровое агентство, которое стремится помочь предприятиям собрать штат высокоэффективных и квалифицированных специалистов, а также обслуживать сотрудников, открывая для них новые возможности трудоустройства.</p>

                </div>
                </div>
                <div className="object2">
                <div className="texts">
                    <h4>5,000</h4>
                    <h5>ОБРАЗЕЦ ЗАГОЛОВКА</h5>
                </div>
                <div className="white__card">
                <p>Кадровое агентство, которое стремится помочь предприятиям собрать штат высокоэффективных и квалифицированных специалистов, а также обслуживать сотрудников, открывая для них новые возможности трудоустройства.</p>

                </div>
                </div>
                <div className="object3">
                <div className="texts">
                    <h4>5,000</h4>
                    <h5>ОБРАЗЕЦ ЗАГОЛОВКА</h5>
                </div>
                <div className="white__card">
                <p>Кадровое агентство, которое стремится помочь предприятиям собрать штат высокоэффективных и квалифицированных специалистов, а также обслуживать сотрудников, открывая для них новые возможности трудоустройства.</p>

                </div>
                </div>
                <div className="object4">
                <div className="texts">
                    <h4>5,000</h4>
                    <h5>ОБРАЗЕЦ ЗАГОЛОВКА</h5>
                </div>
                <div className="white__card">
                <p>Кадровое агентство, которое стремится помочь предприятиям собрать штат высокоэффективных и квалифицированных специалистов, а также обслуживать сотрудников, открывая для них новые возможности трудоустройства.</p>

                </div>
                </div>

            </div>

        </div>
        <Footer/>

              </div>


                
            </div>

                </div>
            }

    </>
  )
}
