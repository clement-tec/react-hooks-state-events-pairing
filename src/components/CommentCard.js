import React from "react"

function CommentCard (props) {
    console.log(props)
    return (
        <div>
            <h2>{props.user}</h2>
            <p>{props.comment}</p>
        </div>
    )
}

export default CommentCard