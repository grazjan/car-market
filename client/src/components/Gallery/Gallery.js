import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ImageContainer, SliderNavigation } from './styled'

const Gallery = ({ medias }) => {
  
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();


  return (

       medias &&
        <>
            {/* Main Slider */}
            <Slider ref={slider => setNav1(slider)} asNavFor={nav2}>
                {medias.length > 0 && medias.map((media) => (
                    <ImageContainer key={media.id}>
                        <img src={"http://localhost:1337" + media.attributes.formats.medium.url} alt={media.attributes.alternativeText} />
                    </ImageContainer>
                ))}
            </Slider>

            {/* Slider thumbnail navigation */}
            <SliderNavigation sx={{ xs: {'display': 'none'}}}>
                <Slider
                    asNavFor={nav1}
                    ref={(slider2) => setNav2(slider2)}
                    slidesToShow={4}
                    slidesToScroll={4}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    infinite={false}
                >
                    {medias.length > 0 && medias.map((media) => (
                        <ImageContainer key={media.id}>
                            <img src={"http://localhost:1337" + media.attributes.formats.thumbnail.url} alt={media.attributes.alternativeText} />
                        </ImageContainer>
                    ))}
                </Slider>             
            </SliderNavigation>

        </>

  )
}

export default Gallery