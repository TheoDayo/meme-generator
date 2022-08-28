import React from 'react';
import './Form.css';

export default function Form(props) {

    const [meme, setMeme] = React.useState(
        {
            topText: "", 
            bottomText: "", 
            randomImage: "https://i.imgflip.com/30b1gx.jpg"
        });

    
    const [allMemes, setAllMemes] = React.useState([]);

    React.useState(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(json => {
            setAllMemes(json.data.memes);
        }).catch(error => {
            console.log(error);
        }
        );
    }, [])

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme({...meme, [name]: value});
    }
    function handleClick() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme, 
            randomImage: url
        }))
    }

    return (
        <main>
            <div className='form'>
                <input 
                    className='input-left' 
                    type='text' 
                    name='topText' 
                    placeholder='Top Text' 
                    value={meme.topText} 
                    onChange={handleChange}>
                </input>
                <input 
                    className='input-right' 
                    type='text' 
                    name='bottomText' 
                    placeholder='Bottom Text' 
                    value={meme.bottomText} 
                    onChange={handleChange}>
                </input>
                <button className='button' onClick={handleClick}>Get a new meme image</button>
            </div>
            <div className="meme">
                <img className='meme-img' src={meme.randomImage}></img>
                <h2 className='meme-text top'>{meme.topText}</h2>
                <h2 className='meme-text bottom'>{meme.bottomText}</h2>
            </div>
        </main>
        
    )
}

