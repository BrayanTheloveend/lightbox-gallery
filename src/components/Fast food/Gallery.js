import React,{useEffect,useRef} from 'react'
import 'photoswipe/dist/photoswipe.css'
import './Lightbox.css'
import { Gallery , Item, useGallery } from 'react-photoswipe-gallery'


const GalleryReact = () => {
    const { open } = useGallery()

    useEffect(() => {
        open(1) // you can open second slide by calling open(1) in useEffect
    }, [open])


    const imagPop = useRef(null)
     //Auto Grid effect 
  useEffect(() => {
    const aHerf =  imagPop.current.querySelectorAll("div")

    const align = ["vertical","horizontal","big","none"]

    for(let i=1;i < aHerf.length; i++){
      let index = Math.floor(Math.random()*(align.length))
      aHerf[i].classList.add(align[index])
    }
  }, [])

  const uiElements =[

        {
            name: 'bulletsIndicator',
            order: 9,
          isButton: false,
          appendTo: 'wrapper',

          onInit: (el, pswpInstance) => {
            let prevIndex = -1
            const thumbnails = []
    
            
            el.style.position = 'absolute'
            el.style.bottom = '20px'
            el.style.left = '10px'
            el.style.right = '0'
            el.style.display = 'grid'
            el.style.gridGap = '10px'
            el.style.gridTemplateColumns = 'repeat(auto-fit, 40px)'
            el.style.gridTemplateRows = 'repeat(auto-fit, 40px)'
            el.style.justifyContent = 'center'
            
    
            const dataSource = pswpInstance.options.dataSource 
    
            for (let i = 0; i < dataSource.length; i++) {
              const slideData = dataSource[i]
    
              const thumbnail = document.createElement('div')
              thumbnail.style.transition = 'transform 0.15s ease-in'
              thumbnail.style.opacity = '1'
              thumbnail.style.cursor = 'pointer'
              thumbnail.onclick = (e) => {
                const target = e.target
                const thumbnailEl =
                  target.tagName === 'IMG'
                    ? target.parentElement
                    : (e.target)
                if (thumbnailEl) {
                  pswpInstance.goTo(thumbnails.indexOf(thumbnailEl))
                }
              }
    
              const thumbnailImage = document.createElement('img')
              thumbnailImage.setAttribute('src', slideData.msrc || '')
              thumbnailImage.style.width = '100%'
              thumbnailImage.style.height = '100%'
              thumbnailImage.style.objectFit = 'cover'
    
              thumbnail.appendChild(thumbnailImage)
    
              el.appendChild(thumbnail)
    
              thumbnails.push(thumbnail)
            }
    
            pswpInstance.on('change', () => {
              if (prevIndex >= 0) {
                const prevThumbnail = thumbnails[prevIndex]
                prevThumbnail.style.opacity = '1'
                prevThumbnail.style.cursor = 'pointer'
                prevThumbnail.style.border = 'none'
                prevThumbnail.style.transform = 'scale(1)'
              }
    
              const currentThumbnail = thumbnails[pswpInstance.currIndex]
              currentThumbnail.style.opacity = '1'
              currentThumbnail.style.cursor = 'unset'
              currentThumbnail.style.border = '3px solid #efefef'
              currentThumbnail.style.borderRadius = '3px'
              currentThumbnail.style.transform = 'scale(1.2)'
    
              prevIndex = pswpInstance.currIndex
            })
          },
        },
      ]














  return (
        <Gallery uiElements={uiElements} >
            <div className="container" id='lightgallery' ref={imagPop}>
    
            <Item
                original={item2}
                thumbnail={item2}
                width="1024"
                height="768"
            >
            {({ ref, open }) => (
                <div  onClick={open} className="single">
                    <img ref={ref}  src={item2} />
                    <div className='box-item'>
                     <ion-icon name="bag-add" size="large" onClick={()=>alert('hello')}></ion-icon>
                     <p>Add to card</p>
                    </div>
                </div>
            )}
            </Item>
            <Item
            original="https://placekitten.com/1024/768?image=2"
            thumbnail="https://placekitten.com/80/60?image=2"
            width="1024"
            height="768"
            >
            {({ ref, open }) => (
                <div onClick={open} className="single">
                    <img ref={ref} src={item2} />
                </div>
            )}
            </Item>
            <Item
            original="https://placekitten.com/1024/768?image=2"
            thumbnail="https://placekitten.com/80/60?image=2"
            width="1024"
            height="768"
            >
            {({ ref, open }) => (
                <div onClick={open} className="single">
                    <img ref={ref} src={item2} />
                </div>
            )}
            </Item>
            <Item
            original="https://placekitten.com/1024/768?image=2"
            thumbnail="https://placekitten.com/80/60?image=2"
            width="1024"
            height="768"
            >
            {({ ref, open }) => (
                <div onClick={open} className="single">
                    <img ref={ref} src={item2} />
                </div>
            )}
            </Item>
            <Item
            original="https://placekitten.com/1024/768?image=2"
            thumbnail="https://placekitten.com/80/60?image=2"
            width="1024"
            height="768"
            >
            {({ ref, open }) => (
                <div onClick={open} className="single">
                    <img ref={ref} src={item2} />
                </div>
            )}
            </Item>
            <Item
            original="https://placekitten.com/1024/768?image=2"
            thumbnail="https://placekitten.com/80/60?image=2"
            width="1024"
            height="768"
            >
            {({ ref, open }) => (
                <div onClick={open} className="single">
                    <img ref={ref} src={item2} />
                </div>
            )}
            </Item>
            <Item
            original="https://placekitten.com/1024/768?image=2"
            thumbnail="https://placekitten.com/80/60?image=2"
            width="1024"
            height="768"
            >
            {({ ref, open }) => (
                <div onClick={open} className="single">
                    <img ref={ref} src={item2} />
                </div>
            )}
            </Item>
            <Item
            original="https://placekitten.com/1024/768?image=2"
            thumbnail="https://placekitten.com/80/60?image=2"
            width="1024"
            height="768"
            >
            {({ ref, open }) => (
                <div onClick={open} className="single">
                    <img ref={ref} src={item2} />
                </div>
            )}
            </Item>
            <Item
            original="https://placekitten.com/1024/768?image=2"
            thumbnail="https://placekitten.com/80/60?image=2"
            width="1024"
            height="768"
            >
            {({ ref, open }) => (
                <div onClick={open} className="single">
                    <img ref={ref} src={item2} />
                </div>
            )}
            </Item>
            </div>
  
        </Gallery>
    )
}

export default GalleryReact
