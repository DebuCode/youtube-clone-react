import React from 'react';
import './sidebar.scss';
import { MdSubscriptions, 
  MdExitToApp, 
  MdThumbUp, 
  MdHistory, 
  MdLibraryBooks, 
  MdHome, 
  MdSentimentDissatisfied } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { log_out } from '../../redux/actions/auth.action';

const Sidebar = ({sidebar , handletoggleSidebar}) => {

  const dispatch = useDispatch()
  const logouthandler = ()=>{
    dispatch(log_out())
  }
  return <>
    <nav className={sidebar ? "sidebar open" : "sidebar"}
    onClick={()=>handletoggleSidebar(false)}>
      <li>
        <MdHome size={23}/>
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions size={23}/>
        <span>Subscriptions</span>
      </li>
      <li>
        <MdThumbUp size={23}/>
        <span>Like Video</span>
      </li>
        <li>
        <MdHistory size={23}/>
        <span>History</span>
      </li>
      <li>
        <MdLibraryBooks size={23}/>
        <span>Library</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23}/>
        <span>i don't Know</span>
      </li>
      <li onClick={logouthandler}>
        <MdExitToApp size={23}/>
        <span>Log Out</span>
      </li>
    </nav>
    </>
}

export default Sidebar