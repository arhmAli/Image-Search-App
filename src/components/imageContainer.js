import React from 'react'
import'./styles/requesting.scss'
const ImageContainer=({theImages})=> {
    const images=theImages.map((item)=>(
        <img key={item.id} src={item.webformatURL} alt="nice-pics"/>
    ))
  return (
    <div className='image-container'>
        {images}
    </div>
  )
}
export default ImageContainer
