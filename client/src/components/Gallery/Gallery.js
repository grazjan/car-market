import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ImageContainer } from './styled'

const Gallery = ({ medias }) => {
    console.log(medias)
  return (
    medias &&
    <Slider>
        {medias.length > 0 && medias.map((media) => (
            <ImageContainer key={media.id}>
                <img src={"http://localhost:1337" + media.attributes.formats.medium.url} alt={media.attributes.alternativeText} />
            </ImageContainer>
        ))}
    </Slider>
  )
}

export default Gallery