import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import jsonFlats from '../datas/logements.json'
import svgArrow from '../assets/wingArrow.svg'

const CarouselContainer = styled.div`
   display: flex;
   align-items: center;
   height: 415px;
   overflow: hidden;

   position: relative; // for arrow

   @media (max-width: 768px) {
      height: 255px;
   }
`
const PhotoContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 25px;

   overflow: hidden;
   max-width: 100%;
   max-height: 100%;
`
const FlatPhoto = styled.img`
   border-radius: 25px;
   width: 100%;
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
         <ArrowPrev src={svgArrow} onClick={prevSlide} />
         <ArrowNext src={svgArrow} onClick={nextSlide} />
         {/* Pics */}
         {flatPictures.map((img, index) => {
            return (
               <PhotoContainer key={index}>
                  {index === currentPic && (
                     // TODO del div after
                     <div>
                        <FlatPhoto src={img} alt="Photos du logement" />
                     </div>
                  )}
                  {/* Index of pic: {index} Img is url of pic: {img}
                  )} */}
               </PhotoContainer>
            )
         })}
      </CarouselContainer>
   )
}
