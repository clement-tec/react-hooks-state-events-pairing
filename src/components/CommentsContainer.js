import React from "react";
import CommentCard from "./CommentCard";


function CommentsContainer (props) {
    const Displaycomments =props.comments.map((commentElement)=> (<CommentCard comment = {commentElement.comment} user= {commentElement.user} />))
    return (
        <div>{Displaycomments}</div>

    )
}

export default CommentsContainer