import React from 'react'
import '../info/Info.scss'
import { Link } from 'react-router-dom';

export default function Info() {
  return (
    <>

        <div className="tovar__body">

        <Link to="/" className='close'>
            <svg stroke="currentColor" fill="#fff" stroke-width="0" viewBox="0 0 15 15" class="burs_cl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="#fff"></path></svg>
        </Link>
            <div className="tovar__container">
            <div className="tovar">
                <div className="tovar__texts">
                    <h2>Бурсаплекс (Bursaplex) - вакцины против инфекционной бурсальной болезни</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus temporibus ad tempora aliquid excepturi officia odit dolores a distinctio consectetur accusantium aut veritatis itaque, consequatur quidem expedita totam maiores facere?</p>
                    <button className='contact'><a href="tel: 99 999 99 99">СВЯЗАТЬСЯ С НАМИ</a></button>
                </div>

                <img src="./imgs/bursaplex.png" alt="" />

            </div>

            </div>

            <div className="tovar__info">
                <h2>Описание</h2>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quo adipisci non aliquam provident sed beatae labore fuga, eos nihil explicabo dolorum, veniam nostrum illum recusandae quasi dicta. Ipsum repudiandae, at, accusamus veritatis natus optio maxime cumque nesciunt expedita, delectus fuga eligendi accusantium explicabo provident. Voluptatum at vero accusantium aut!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quo adipisci non aliquam provident sed beatae labore fuga, eos nihil explicabo dolorum, veniam nostrum illum recusandae quasi dicta. Ipsum repudiandae, at, accusamus veritatis natus optio maxime cumque nesciunt expedita, delectus fuga eligendi accusantium explicabo provident. Voluptatum at vero accusantium aut!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quo adipisci non aliquam provident sed beatae labore fuga, eos nihil explicabo dolorum, veniam nostrum illum recusandae quasi dicta. Ipsum repudiandae, at, accusamus veritatis natus optio maxime cumque nesciunt expedita, delectus fuga eligendi accusantium explicabo provident. Voluptatum at vero accusantium aut!</p>
            </div>

        </div>
     
    </>
  )
}
