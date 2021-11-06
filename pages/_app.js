import { useEffect } from 'react'
import Home from '.'
import '../styles/custom.scss'
import About from './aboutme'
import Contact from './contact'
import Footer from './footer'
import Projects from './projects'
import MyMap from './map'
import Services  from './servicing'
import Head from 'next/head'
import ReactGA from 'react-ga'

function MyApp() {
  useEffect(() => {
        ReactGA.initialize('UA-166692253-1')
        ReactGA.pageview('/')
    } , [])
  
  return <div>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link rel="stylesheet" type="text/css" href="https://js.api.here.com/v3/3.0/mapsjs-ui.css?dp-version=1526040296" />
    <script type="text/javascript" src="https://js.api.here.com/v3/3.1/mapsjs-core.js" />
    <script type="text/javascript" src="https://js.api.here.com/v3/3.1/mapsjs-service.js" />
    <script type="text/javascript" src="https://js.api.here.com/v3/3.1/mapsjs-ui.js" />
    <script type="text/javascript" src="https://js.api.here.com/v3/3.1/mapsjs-mapevents.js" />
    <link href='https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css' rel='stylesheet' />

    <Head>
      <link href='https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css' rel='stylesheet' />
        <link rel="icon" href="../static/favicon.ico" type="image/gif" sizes="16x16"></link>
        <link rel="shortcut icon" href="../static/favicon.ico" />
        <title>Ankit Joshi</title>
        <meta property="og:title" content="Ankit Joshi | Web Developer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.iankit.in" />
        <meta property="og:image" content="../static/favicon.ico" />
        <meta name="google-site-verification" content="yZeIeAMC2HJjiIR_xycbP4N9Bc0wD9IpVDlNLDkes5w" />
      <meta property="og:description" content="This me Ankit Joshi, FullStack Developer this is my portfolio website." />
    </Head>
      <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js">
      </script>
    <Home />
    <About />
    <Services />
    <Projects />
    <Contact />
    <MyMap/>
    <Footer />
      </div>
}

export default MyApp
