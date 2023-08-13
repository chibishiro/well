import React from 'react'
import {NavLink} from 'react-router-dom';
import '../menu/Menu.scss'
export default function Menu() {

  return (
    <>
             <nav className='navbar'>
                <div className="nav__responsive">
                    <a href="#" className='nav-logo'>
                        <img src="./imgs/logo.svg" alt="" />
                    </a>
                    <button class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src="./imgs/phone_line.svg" alt="" /></button>

                    <div class="offcanvas offcanvas-end d-lg-none" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                      <div class="offcanvas-header">
                      <img  id="offcanvasRightLabel" src="./imgs/logo.svg" alt="" />
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                      </div>
                      <div class="offcanvas-body">
                        <hr />
                        <NavLink to='/' href="#Home" className='nav-link'>Главная страница</NavLink>
                        <NavLink to='/about'  className='nav-link'>О компании</NavLink>
                        <NavLink to='/contact'  className='nav-link'>Контакты</NavLink>


                      </div>
                    </div>
                </div>

                <div className="nav__menu" id='navmenu'>
                    <ul className='nav'>
                        <li className='nav-item'>
                          <NavLink to='/' href="#Home" className='nav-link'>Главная страница</NavLink>
                        </li>
                        <li className='nav-item'>
                          <NavLink to='/about'  className='nav-link'>О компании</NavLink>
                        </li>
                        <li className='nav-item'>
                        <NavLink to='/contact'  className='nav-link'>Контакты</NavLink>
                        </li>
                    </ul>

                    <div className="call__number">
                        <img src="./imgs/tel.svg" alt="" />
                        <p>(99) 999 99 99</p>
                    </div>

                    <a href="#" className='by__work'>Biz bilan bog'lanish</a>

                </div>
            </nav>

           
        

    </>
  )
}
