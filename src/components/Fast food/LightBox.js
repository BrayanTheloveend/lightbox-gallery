import React, { useEffect, useRef } from 'react'
import '../../styles/Lightbox.css'
import  item2 from '../../images/phone.jpg'
import item3 from '../../images/tablette.jpg'

import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'



const LightBox = () => {

  const imagPop = useRef(null)
  //lightGallery(imagPop)


  //Auto Grid effect 
  useEffect(() => {
    const aHerf =  imagPop.current.querySelectorAll("a")

    const align = ["vertical","horizontal","big","none"]

    for(let i=1;i < aHerf.length; i++){
      let index = Math.floor(Math.random()*(align.length))
      aHerf[i].classList.add(align[index])
    }
  }, [])
  

 



  
  return (
    <div className="container" id='lightgallery' ref={imagPop}>

       <a href="" className='single'> 
            <img src={item2} alt="" />
            <div className='box-item'>
            </div>
        </a>
        <a href="" className='single'>
          <img src={item2} alt="" />
        </a>
        <a href="" className='single'>
          <img src={item2} alt="" />
        </a>
        <a href="" className='single'>
          <img src={item2} alt="" />
        </a>
        <a href="" className='single'>
          <img src={item2} alt="" />
        </a>
        <a href="" className='single'>
          <img src={item2} alt="" />
        </a>
        <a href="" className='single'>
          <img src={item2} alt="" />
        </a>
        <a href="" className='single'>
          <img src={item2} alt="" />
        </a>
        <a href="" className='single'>
          <img src={item2} alt="" />
        </a>
        <a href="" className='single'>
          <img src={item2} alt="" />
        </a>
        <a href="" className='single'>
          <img src={item2} alt="" />
        </a>
        <a href="" className='single'>
          <img src={item2} alt="" />
        </a>
        <a href="" className='single'>
          <img src={item2} alt="" />
        </a>
        <a href="" className='single'>
          <img src={item2} alt="" />
        </a>
        <a href="" className='single'>
          <img src={item2} alt="" />
        </a>
        <a href="" className='single'>
          <img src={item2} alt="" />
        </a>
    </div>
  )
}

export default LightBox
