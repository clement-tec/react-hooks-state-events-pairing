import React, {useState} from "react";
import CommentCard from "./CommentCard";


function CommentsContainer (props) {
    const renderComments =props.comments.map((commentElement)=> (<CommentCard key={commentElement.id} comment = {commentElement.comment} user= {commentElement.user} />))

    //onClick button for Hide Comments
    const [showComments, setShowComments] = useState(true);
    const displayComments = showComments? (<>
        <h2>{props.comments.length}Comments</h2>
        {renderComments}
        </>
        ): null
    function toggleShowComments() {
        setShowComments((currentShowComments) => !currentShowComments)
    }


    return (
        <div>
            <button onClick= {toggleShowComments} >Hide Comments</button>
            {displayComments}
        </div>

    )
}

export default CommentsContainer