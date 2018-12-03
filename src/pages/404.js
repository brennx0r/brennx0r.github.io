import React from 'react'
import Layout from '../components/Layout'
import nooo from '../assets/nooo.gif'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>Not Found</h1>
        <p>
          <img src={nooo}></img>
        </p>
      </Layout>
    )
  }
}

export default NotFoundPage
