import React from 'react'

import GlobalStyle from '../style/GlobalStyle'
import styled from 'styled-components'

import Header from '../components/Header'
import Error from '../components/Error404'

// full page
const Page = styled.div``
// page minus footer
const ErrorContainer = styled.section`
   // import padding from GlobalStyle
`

function ErrorPage() {
   return (
      <Page>
         <GlobalStyle />
         <ErrorContainer>
            <Header />
            <Error />
         </ErrorContainer>
      </Page>
   )
}

export default ErrorPage
