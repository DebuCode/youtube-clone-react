import React,{useEffect, useState} from 'react';
import { Container } from 'react-bootstrap';
import Homescreen from './components/Homescreen/homescreen'
import Header from './components/Header/header';
import Sidebar from './components/Sidebar/sidebar';
import Screen from './components/Screen/loginScreen';
import './App.scss';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { useSelector } from 'react-redux';

const Layout = ({children}) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handletoggleSidebar  = () => toggleSidebar(value => !value);
  return (
  <>
      
      <Header handletoggleSidebar={handletoggleSidebar}/>
      <div className="app__container border border-info">
        <Sidebar sidebar={sidebar} handletoggleSidebar={handletoggleSidebar}/>
        <Container fluid className="app__main border border-warning">
          {children}
        </Container>
      </div>
    </>
  )
}

const App = () => {

  const {accessToken,loading} = useSelector(state=>state.auth)

  const navigate = useNavigate()

  useEffect(()=>{
    if(!loading && !accessToken){
      navigate('/auth')
    }
  },[accessToken, loading, navigate])
     return (
        <Routes>
        <Route exact path="/" element={ <Layout><Homescreen/></Layout>}/>
        
        <Route exact path="/auth" element = {<Screen key="/auth"/>}/>

        <Route path="/search" element = {<Layout> <h1>search me</h1> </Layout>}/>
        </Routes>
     )
    
}

export default App
