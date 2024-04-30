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
          Written by <strong>Brenna Flood (they/them or she/her)</strong>, software engineering leader and co-organizer of the <a href="http://www.osfeels.com/" target='new'>Open Source and Feelings</a> conference.{' '}
          <a rel="me" git href="https://mastodon.social/@brennx0r">Follow them on Mastodon</a>. 
        </p>
      </div>
    )
  }
}

export default Bio
