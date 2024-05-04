

import React from 'react'
import './brand.css'

import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'

const images = [google, slack, atlassian, dropbox, shopify]

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      {images.map((image, index) => {
        return <div key={index}><img src={image} alt='/' /></div>
      })}
    </div>
  )
}

export default Brand