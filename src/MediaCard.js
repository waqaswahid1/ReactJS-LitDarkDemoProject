import React from 'react';
import './Style.css'

export function MediaCard({title, body, imageUrl}){
   console.log(imageUrl)
    return(

        <div className='media'>
            <h2>Title: {title}</h2>
            <p>Body: {body}</p>
            <p className='imgPara'>image:<img src={imageUrl} alt='simple things matters'></img></p>
        </div>

    )
}