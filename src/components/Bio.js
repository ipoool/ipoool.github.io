import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

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
          src='https://pbs.twimg.com/profile_images/895846016611524608/GnChDu7E_normal.jpg'
          alt={`Asep Saepulloh`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius:'100%',
            WebkitBorderRadius:'100%',
            MozBorderRadius: '100%'
          }}
        />
        <p>
          Written by <strong>Asep Saepulloh</strong>.{' '}<br />
          <a target="_blank" href="https://twitter.com/ipoool_">
            Follow me on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
