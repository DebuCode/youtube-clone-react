import React from 'react'
import './header.scss';
import {FaBars} from "react-icons/fa"
import {AiOutlineSearch} from "react-icons/ai"
import {MdNotifications , MdApps} from "react-icons/md"

const header = ({handletoggleSidebar}) => {
  return <>
    <div className='border border-dark header'>
      <FaBars className='header__menu' size={26}
      onClick={()=> handletoggleSidebar()}
      />

      <img src="./images/red-youtube-logo-social-media-logo_197792-1803.avif" alt="youtube" className='header__logo'/>

      <form ><input type="text" placeholder='Search' />
      <button type='submit'>
      <AiOutlineSearch size={22}/>
      </button>
      </form>

      <div className='header__icons'>
        <MdNotifications size={28}/>
        <MdApps size={28}/>
        <img src="./images/avatar-logo.png" alt="avatar"/>
      </div>
     
     
    </div>
    
    </>
}

export default header