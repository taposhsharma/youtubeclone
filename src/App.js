import {Container,Row,Col} from 'react-bootstrap'
import './App.css';
import SearchBar from './components/searchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import {useState,useEffect} from 'react'
import youtube from './api/youtube';
//AIzaSyA2_pJDd84AvmrNgoYrB0YCLuHHdDsIi4I
function App() {
  const [videos,setVideos]=useState([])
  const [clickVedeo,setclickVideo]=useState(null)
  const selectedVideo= clickVedeo!=null?clickVedeo:(videos.length !== 0 ?videos[0] : null)
  async function handleSubmit(searchTerm){
   const response= await youtube.get('search',{
      params:{
        part:'snippet',
        maxResults:5,
        key:"AIzaSyA2_pJDd84AvmrNgoYrB0YCLuHHdDsIi4I",
        q:searchTerm

      }
    })
    setVideos(response.data.items)
    
  }
 
  const onVideoClick=(video)=>{
    setclickVideo(video)
  }
  useEffect(()=>{
    handleSubmit('iron man')
    
  },[])
  return (
    <div className="App">
      <Container>
        <div style={{margin: 10}}>
      <SearchBar onSubmit={handleSubmit} /></div>
      <Row>
        <Col sm='8'>
          <VideoDetail video={selectedVideo}/>
        </Col>
        <Col sm='4'>
          <VideoList videos={videos} onvideoSelect={onVideoClick} />
        </Col>
      </Row>
      </Container>
      
    </div>
  );
  
}

export default App;
