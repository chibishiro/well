import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Main from '../../components/main/Main'
import {useState, useEffect} from 'react';
import '../home/Home.scss'

export default function Home() {
  // const [loading, setLoading] = useState(true)
  // useEffect(() =>{
  //   setLoading(true)
  //   setTimeout(() =>{
  //     setLoading(false)
  //   },2000)
  // },2000)
  return (
    <>

            {/* {
              loading?
                <div className='qush8'>
                    <img src="./imgs/qush11.gif" alt="" />
                </div>
              :
              <div className="home"> */}
              <Header/>
              <Main/>
              <Footer/>
{/* 
              </div>
           
            } */}

    </>
  )
}
