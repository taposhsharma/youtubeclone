import VideoItem from "./VideoItem"

function VideoList({videos,onvideoSelect}){
   if(videos.length === 0) return <h1>loading.....</h1>
 return(
    <>
    {videos.map((video,idx)=><VideoItem key={idx} videoItem={video} onvideoSelect={onvideoSelect}/>)}
    
    </>
 )
}
export default VideoList