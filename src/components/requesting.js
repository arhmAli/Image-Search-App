import React ,{useState} from 'react'
import axios from 'axios'
import Form from './form'
import ImageContainer from './imageContainer'
import './styles/requesting.scss'

const Requesting=()=> {
    const [images,setImages]=useState([])
    const onSearchSubmit=async(entry)=>{
        const res=await axios.get(`https://pixabay.com/api/?key=29980648-ef6c02eb6f404bf593013495f&q=${entry}&image_type=photo`)
        console.log(res.data.hits)
        setImages(res.data.hits)
        console.log(images.length)
    }
  return (

            <>
            <section className='main-section'>
                <Form onSearchSubmit={onSearchSubmit}/>
                <p className='text'>Search Returned {images.length} images</p>
                <ImageContainer theImages={images}/>
            </section>
            </>
    )
}
export default Requesting
