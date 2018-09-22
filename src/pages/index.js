import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Ahoy Hoy!</h1>
    <p>Hey look - I'm a customized Gatsby site.</p>
    <p>
      My name is Rich, aka, <a href="https://github.com/r-i-c-h/" target="_blank">https://github.com/r-i-c-h/</a>
    </p>
    <p>Though if you really want to see a bit more about me, I'd recommend my website <a href="https://richwerden.com" target="_blank">https://richwerden.com</a>
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
