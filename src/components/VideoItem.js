import {Container,Row,Col} from 'react-bootstrap'
import Image from "react-bootstrap/Image";
function VideoItem({videoItem,onvideoSelect }){
return(
    <Container>
    <Row onClick={()=>onvideoSelect(videoItem)}> 
        <Col xs={6}>
        
        <Image
        src=
        {videoItem.snippet.thumbnails.high.url} 
        thumbnail
      />
        </Col>
        <Col xs={6}>
            <p >{videoItem.snippet.title.substring(0,50)}.......</p>
        </Col>
    </Row>
    </Container>
)
}
export default VideoItem