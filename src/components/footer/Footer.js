import React from 'react'
import './Footer.scss'
export default function Footer() {
  return (
    <>

      <footer>
        <div className="footer__contacts">
          <h3>Контакты</h3> 
          <p className='side'>г. Нижний Новгород, <br /> ул.Народная, 20</p>
          <p className='call'>8 (800) 550-22-16</p>
            <div className="wellrice__profiles">
            <p>WellRise на связи:</p>
            <div className="profiles">
              <a href="#"><img src="./imgs/insta.svg" alt="" /></a>
              <a href="#"><img src="./imgs/telegram.svg" alt="" /></a>
              <a href="#"><img src="./imgs/whatsapp.svg" alt="" /></a>
              <a href="#"><img src="./imgs/telegram.svg" alt="" /></a>
            </div>

            </div>
        </div>

        <div className="helpers">
          <h5>Полезное</h5>
          <p>Обратная связь</p>
          <p>Акции и скидки</p>
          <p>Доставка и оплата</p>
          <p>О нас</p>
          <p>Контакты</p>
          <p>Политика сайта</p>

        </div>

        <div className="cataloges">
          <h5>Каталог</h5>
          <p>Шведские стенки</p>
          <p>Турники</p>
          <p>Уличные комплексы</p>
          <p>Тяжелая атлетика</p>
          <p>Единоборства</p>

        </div>
      </footer>
 
    </>
  )
}
