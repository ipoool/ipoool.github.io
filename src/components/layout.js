import React from 'react'
import { Link } from 'gatsby'

import SupportStack from './SupportStack'
import { rhythm, scale } from '../utils/typography'
import 'semantic-ui-css/semantic.min.css'
import '../assets/style.css'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          className='headerText'
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            textAlign: "center",
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Ipoool's Blog
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            marginBottom: 10,
            marginTop: 10,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Ipoool's Blog
          </Link>
        </h3>
      )
    }
    return (
      <div className='ui text container'>
        <div className='ui segments' style={{border:'none', boxShadow: 'none'}}>
          {header}
          {children}

          <SupportStack />
        </div>
      </div>
    )
  }
}

export default Template
