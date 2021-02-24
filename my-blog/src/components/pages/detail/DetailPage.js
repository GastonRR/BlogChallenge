import React from 'react'

import Post from '../../Post/Post'


export default function DetailPage(props) {
    return (
    <div className="container">
        <Post id={props.match.params.id}/>
    </div>
    )
}
