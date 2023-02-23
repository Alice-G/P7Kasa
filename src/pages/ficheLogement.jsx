import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import GlobalStyle from '../style/GlobalStyle'
import colors from '../style/colors'
import styled from 'styled-components'

import Header from '../components/Header'
import Carousel from '../components/Carousel'
import Rating from '../components/RatingStars'
import Collapse from '../components/Collapse'
import Footer from '../components/Footer'
import Error from '../pages/notFound'

import jsonFlats from '../datas/logements.json'

// PAGE STYLING
// full page
const Page = styled.div`
   //
`
// page minus footer
const FlatContainer = styled.section`
   // import padding from GlobalStyle
`

const FlexContainer = styled.div``

// FLAT HEADER AND INFO
// container for header and info
const FlexFlatData = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;

   background-position-y: center;

   margin-top: 20px;

   // medium screens
   @media (max-width: 768px) {
      flex-direction: column;
      margin-top: 10px;
   }
`
const FlatHeader = styled.div`
   display: flex;
   flex-direction: column;
`
const FlatTitle = styled.h3`
   font-size: 36px;

   // medium large
   @media (min-width: 770px) and (max-width: 1199px) {
      font-size: 28px;
   }

   // medium screens
   @media (min-width: 375px) and (max-width: 768px) {
      font-size: 22px;
   }

   // small screens
   @media (max-width: 375px) {
      font-size: 18px;
   }
`
const FlatLocation = styled.p`
   font-size: 18px;
   margin-bottom: 20px;

   // medium screens
   @media (min-width: 375px) and (max-width: 768px) {
      font-size: 16px;
      margin-bottom: 10px;
   }

   // small screens
   @media (max-width: 375px) {
      font-size: 14px;
      margin-bottom: 10px;
   }
`
const TagContainer = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
`
const Tag = styled.div`
   padding: 0 25px;
   margin-right: 10px;
   margin-bottom: 10px;

   background: ${colors.primary};
   border-radius: 10px;

   line-height: 25px;
   color: ${colors.light};
   font-size: 14px;

   // medium screens
   @media (min-width: 375px) and (max-width: 768px) {
      font-size: 12px;
   }

   // small screens
   @media (max-width: 375px) {
      font-size: 10px;
   }
`
// container for host and rating
const FlatInfoContainer = styled.div`
   display: flex;
   flex-direction: column;

   @media (max-width: 768px) {
      flex-direction: row-reverse;
      justify-content: space-between;
   }
`
const Ratingbox = styled.div`
   display: flex;
   align-content: center;

   @media (min-width: 769px) {
      padding: 5px;
   }
`

const HostContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: flex-end;
`
const HostName = styled.div`
   font-size: 18px;
   margin: auto;

   @media (min-width: 770px) and (max-width: 1199px) {
      font-size: 14px;
   }

   // medium screens
   @media (max-width: 768px) {
      font-size: 12px;
   }
`
const HostPic = styled.div`
   height: 64px;
   width: 64px;
   min-width: 64px;
   margin: 10px;

   border-radius: 50%;
   background: ${colors.shade};
   background-size: cover;

   @media (min-width: 770px) and (max-width: 1199px) {
      height: 50px;
      width: 50px;
      min-width: 50px;
      margin: 5px;
   }

   @media (min-width: 375px) and (max-width: 768px) {
      height: 40px;
      width: 40px;
      min-width: 40px;
      margin: 2px;
      margin-left: 10.5px;
   }

   @media (max-width: 375px) {
      height: 32px;
      width: 32px;
      min-width: 32px;
      margin: 0;
      margin-left: 10.5px;
   }
`

// TEXT SECTION
const ContentContainer = styled.div`
   display: flex;
   flex-direction: row;
   border-radius: 10px;

   // for-tablet-portait-and below
   @media (max-width: 768px) {
      flex-direction: column;
      margin-top: 10px;
   }
`

function FicheLogement() {
   const urlId = useParams() // get id from url
   const [selectedFlat, setSelectedFlat] = useState('') // initialize which flat we get from json, for now it's empty

   useEffect(() => {
      const clickedId = jsonFlats.find((object) => object.id === urlId.id)

      setSelectedFlat(clickedId)
      // console.log(clickedId)
   }, [urlId.id]) // only at first render
   // if selectedFlat is undefined = url does not exsist
   if (!selectedFlat) {
      return <Error />
   }

   const tagList = selectedFlat.tags.map((el) => <Tag key={el}>{el}</Tag>)

   const equipmentList = selectedFlat.equipments.map((el) => (
      <li key={el}>{el}</li>
   ))

   return (
      <Page>
         <GlobalStyle />
         <FlatContainer>
            <Header />
            <Carousel />

            <FlexContainer>
               <FlexFlatData>
                  <FlatHeader>
                     <FlatTitle>{selectedFlat.title}</FlatTitle>
                     <FlatLocation>{selectedFlat.location}</FlatLocation>

                     <TagContainer>{tagList}</TagContainer>
                  </FlatHeader>
                  <FlatInfoContainer>
                     <HostContainer>
                        <HostName>{selectedFlat.host.name}</HostName>
                        <HostPic
                           style={{
                              backgroundImage: `url(${selectedFlat.host.picture})`,
                           }}
                        />
                     </HostContainer>
                     <Ratingbox>
                        <Rating rating={selectedFlat.rating} />
                     </Ratingbox>
                  </FlatInfoContainer>
               </FlexFlatData>
               <ContentContainer>
                  <Collapse
                     title="Description"
                     text={selectedFlat.description}
                  />

                  <Collapse title="Équipements" text={equipmentList} />
               </ContentContainer>
            </FlexContainer>
         </FlatContainer>

         <Footer />
      </Page>
   )
}

export default FicheLogement
