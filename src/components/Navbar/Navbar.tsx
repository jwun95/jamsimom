import * as styles from './Navbar.styles'
import NavbarButton from '../NavbarButton/NavbarButton'
import React from 'react'


const Navbar = () => {
  return (
    <styles.Navbar>
      <NavbarButton name="home" />
      <NavbarButton name="search" />
      <NavbarButton name="profile" />
    </styles.Navbar>
  )
}

export default Navbar
