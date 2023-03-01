import video from "../data/video.js";
import VideoContainer from "./VideoContainer";
import CommentsContainer from "./CommentsContainer.js";
import React, {useState} from "react";

function App() {
  console.log("Here's your data:", video);

  const [upvotes, setUpvotes] = useState(video.upvotes)
  const [downvotes, setDownvotes] = useState(video.downvotes)

  function handleVoteClick(){
    setUpvotes ((upvotes) => upvotes +1)
    setDownvotes ((downvotes) => downvotes+1)
  }

 


  return (
    <div className="App">
     <VideoContainer video= {video} upvotes = {upvotes} downvotes= {downvotes} handleVoteClick={handleVoteClick} />
     <CommentsContainer comments= {video.comments}/>
    </div>
  );
}

export default App;
