import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Brenna Flood`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Brenna Flood</strong>, technical leader and co-organizer of the <a href="http://www.osfeels.com/" target='new'>Open Source and Feelings</a> conference.{' '}
          <a href="https://twitter.com/brennx0r">Follow her on Twitter</a>. 
          <br>
          </br>
          <br>
          </br>
          If you enjoy any of the content on this site, please consider dropping a few coins in the proverbial hat via <a href="https://www.patreon.com/brennx0r" target='new'>her Patreon account</a>. Thank you! 🌈 💜 🙇‍♀️
        </p>
      </div>
    )
  }
}

export default Bio
