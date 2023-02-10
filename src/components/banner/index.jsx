import React from 'react'
import styled from 'styled-components'

const BannerContainer = styled.div`
    width: 100vw;
    max-width: 1920px;
    height: 334px;
    background-color: ${props=>props.color || 'white'};
`

const Banner = () => {
  return (
    <BannerContainer>
        <div></div>
    </BannerContainer>
  )
}

export default Banner