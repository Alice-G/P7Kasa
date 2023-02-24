import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import jsonFlats from '../datas/logements.json'
import svgArrow from '../assets/wingArrow.svg'

const CarouselContainer = styled.div`
   height: 415px;

   position: relative; // for arrow positioning

   @media (max-width: 768px) {
      height: 255px;
   }
`

const PhotoContainer = styled.div`
   border-radius: 25px;

   background-size: cover;
   background-position: center;

   width: 100%;
   height: 100%;
`

const ArrowPrev = styled.img`
   width: 46px;
   padding: 0 0;
   top: 50%;
   rotate: -90deg;
   position: absolute; // from container

   cursor: pointer;

   @media (max-width: 768px) {
      width: 20px;
   }
`
const ArrowNext = styled.img`
   width: 46px;
   padding: 0 0;
   top: 50%;
   right: 0;
   rotate: 90deg;
   position: absolute; // from container

   cursor: pointer;

   @media (max-width: 768px) {
      width: 20px;
   }
`

export default function Carousel() {
   const urlId = useParams()
   const selectedFlat = jsonFlats.find((object) => object.id === urlId.id)
   const flatPictures = selectedFlat.pictures

   const [currentPic, setCurrentPic] = useState(0)

   // when click >, if we're on last slide, go back to first, if not, go to next one
   const nextSlide = () => {
      setCurrentPic(currentPic === flatPictures.length - 1 ? 0 : currentPic + 1)
   }

   // when click <, if we're on first slide, go to last one, if not, go to previous
   const prevSlide = () => {
      setCurrentPic(currentPic === 0 ? flatPictures.length - 1 : currentPic - 1)
   }

   return (
      <CarouselContainer>
         {/* nav arrows on top */}
         {flatPictures.length > 1 && (
            <div>
               <ArrowPrev src={svgArrow} onClick={prevSlide} />
               <ArrowNext src={svgArrow} onClick={nextSlide} />
            </div>
         )}
         {/* Pics */}
         <PhotoContainer
            style={{ backgroundImage: `url(${flatPictures[currentPic]})` }}
         ></PhotoContainer>
      </CarouselContainer>
   )
}
