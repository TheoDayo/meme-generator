import React from 'react';
import './Form.css';
import data from './data';

export default function Form(props) {

    const [meme, setMeme] = React.useState(
        {
            topText: "", 
            bottomText: "", 
            randomImage: "https://i.imgflip.com/30b1gx.jpg"
        });


    const [allMemeImages, setAllMemeImages] = React.useState(data);

    function handleClick() {
        //props.setMeme(data[Math.floor(Math.random() * data.length)]);
        const memesArray = data.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme, 
            randomImage: url
        }))
    }

    return (
        <main>
            <div className='form'>
                <input className='input-left' type='text' name='topText' placeholder='Top Text' value={props.topText} onChange={props.handleChange}></input>
                <input className='input-right' type='text' name='topText' placeholder='Bottom Text' value={props.topText} onChange={props.handleChange}></input>
                <button className='button' onClick={handleClick}>Get a new meme image</button>
            </div>
            <img className='meme-img' src={meme.randomImage}></img>
        </main>
        
    )
}

