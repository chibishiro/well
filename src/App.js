import React from 'react'
import Header from './components/header/Header' 
import Footer from './components/footer/Footer'
import About from './Pages/about/About'
import Contact from './Pages/contact/Contact'
import Info from './Pages/info/Info'
import Menu from './components/menu/Menu'
import Home from './Pages/home/Home'
import Main from './components/main/Main'
import {Routes,Route} from "react-router-dom";
import Burgertest from './components/Burgertest';
import {useState, useEffect} from 'react';
import { BallTriangle } from 'react-loader-spinner'


export default function App() {

  const [loading, setLoading] = useState(true)
  useEffect(() =>{
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    },3000)
  },3000)

  const [enter, setEnter] = useState(true)
  useEffect(() =>{
    setEnter(true)
    setTimeout(() =>{
      setEnter(false)
    },3000)
  },3000)
  return (
    <>

        <div className='App'>
          {
              loading?
              <div className='divdov'>
                {/* <BallTriangle
                  height={100}
                  width={100}
                  radius={5}
                  color="#4fa94d"
                  ariaLabel="ball-triangle-loading"
                  wrapperClass={{}}
                  wrapperStyle=""
                  visible={true}
                /> */}
                  <img src="./imgs/qush11.gif" alt="" />
                  <h1 data-text="wellrise">wellrise</h1>
              </div>
              
              :
              <div className='routes'>
                <Menu/>

                <Routes>
                  <Route path="*" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/Contact" element={<Contact/>}/>
                  <Route path="/Info" element={<Info/>}/>
                </Routes>

                <Burgertest/>
              </div>
          }

          </div>


          {/* {
            enter?
              <h1 data-text="It's loading…">It's loading…</h1>
            :
            <div className='routes'>
                <Menu/>

                <Routes>
                  <Route path="*" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/Contact" element={<Contact/>}/>
                  <Route path="/Info" element={<Info/>}/>
                </Routes>
              </div> 
              
          } */}




          <div class="container">
            <div class="square"><img src="./imgs/egg.png" alt="" /></div>
            <div class="square"><img src="./imgs/egg.png" alt="" /></div>
            <div class="square"><img src="./imgs/egg.png" alt="" /></div>
            <div class="square"><img src="./imgs/egg.png" alt="" /></div>
            <div class="square"><img src="./imgs/egg.png" alt="" /></div>
            <div class="square"><img src="./imgs/egg.png" alt="" /></div>
            <div class="square"><img src="./imgs/egg.png" alt="" /></div>
            <div class="square"><img src="./imgs/egg.png" alt="" /></div>
            <div class="square"><img src="./imgs/egg.png" alt="" /></div>
            <div class="square"><img src="./imgs/egg.png" alt="" /></div>
            <div class="square"><img src="./imgs/egg.png" alt="" /></div>
            <div class="square"><img src="./imgs/egg.png" alt="" /></div>


          </div>

          <div className="container__1">
            <div class="square"><img src="./imgs/chicken.png" alt="" /></div>
            <div class="square"><img src="./imgs/chicken.png" alt="" /></div>
            <div class="square"><img src="./imgs/chicken.png" alt="" /></div>
            <div class="square"><img src="./imgs/chicken.png" alt="" /></div>
            <div class="square"><img src="./imgs/chicken.png" alt="" /></div>
            <div class="square"><img src="./imgs/chicken.png" alt="" /></div>
            <div class="square"><img src="./imgs/chicken.png" alt="" /></div>
            <div class="square"><img src="./imgs/chicken.png" alt="" /></div>
            <div class="square"><img src="./imgs/chicken.png" alt="" /></div>
            <div class="square"><img src="./imgs/chicken.png" alt="" /></div>
            <div class="square"><img src="./imgs/chicken.png" alt="" /></div>
            <div class="square"><img src="./imgs/chicken.png" alt="" /></div>



          </div>

          <div className="bottom_left">
        <div class="fab">
          <span class="fab-action-button">
            <img
              class="fab-action-button__icon"
              src="./imgs/sms.png"
              alt=""
            ></img>
          </span>
          <ul class="fab-buttons">
            <li class="fab-buttons__item">
              <a href="#!" class="fab-buttons__link" data-tooltip="Позвонить">
                <img
                  src="./imgs/tel.png"
                  class="icon-material img1"
                  alt=""
                ></img>
              </a>
            </li>
            <li class="fab-buttons__item">
              <a href="#!" class="fab-buttons__link" data-tooltip="Телеграм">
                <img
                  src="./imgs/telega.png"
                  class="icon-material img2"
                  alt=""
                ></img>
              </a>
            </li>
          </ul>
        </div>
      </div>

         
     


         


    </>
  )
}
