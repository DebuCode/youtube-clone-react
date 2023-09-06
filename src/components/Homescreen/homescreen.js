import React, { useEffect } from 'react'
import './homescreen.scss'
import {Col, Row, Container } from 'react-bootstrap'
import Category from '../../components/Category/category'
import Video from '../../components/Video/video'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos } from '../../redux/actions/videos.action'

const Homescreen = ()=> {
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getPopularVideos())
  }, [dispatch])

  const {videos} = useSelector(state=>state.homeVideos)
  
  
  return (
    <Container>
      <Category/>
      <Row>
{
  videos.map((video)=> (
  <Col lg={3} md={4}>
  
   <Video video={video}  key={video.id}/>

  </Col>))}



      </Row>
    </Container>
  )
}

export default Homescreen