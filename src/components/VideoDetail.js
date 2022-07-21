/* eslint-disable jsx-a11y/iframe-has-title */
import {Card} from 'react-bootstrap'
function VideoDetail({video}){
  console.log(video)
  if(!video) return <div>Loading......</div>
  const videosrc=`https://www.youtube.com/embed/${video.id.videoId}`
return(
    <Card >
    <iframe height="500" src={videosrc}></iframe>
    <Card.Body>
      <Card.Title>{video.snippet.title}</Card.Title>
      <Card.Title>{video.snippet.channelTitle}</Card.Title>
      <Card.Text>
      {video.snippet.description}
      </Card.Text>
      
    </Card.Body>
  </Card>
)
}
export default VideoDetail