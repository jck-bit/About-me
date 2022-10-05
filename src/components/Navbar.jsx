import React from 'react'
import './Navbar.css'
import {FiX ,FiMenu} from 'react-icons/fi'

 export const navbarLinks = [
    {url: "#", title:"Achievements"},
    {url: "#", title:"Hello"},
    {url: "#", title:"Hello"}
]
const Navbar = ({navbarLinks}) => {
  return (
    <nav className='navbar'>
      <span className='navbar__logo'> Hello world !</span>
        <ul className='navbar__list'>
          {navbarLinks.map(item =>{
            return(
              <li className='navbar__item' key={item.title}>
                <a href={item.url} className='navbar__link'>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
    </nav>
  )
}
export default Navbar