import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons"
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default function Layout({children}) {
  return  (
    <div>
      <Navbar />
      {children}
      <Footer/>
    </div>
  )
}