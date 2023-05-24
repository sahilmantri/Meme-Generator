import React from "react";

export default function Meme(){
   
   
    const [memeImage,setMemeImage] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/261o3j.jpg"
    })
    
    const [allmeme,setAllMeme] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMeme(data.data.memes)
        }
        getMemes()
    }, [])
    
    function getMemeImage(){
        const randomNumber = Math.floor(Math.random()*allmeme.length)
        const url = allmeme[randomNumber].url
        setMemeImage(prevImage =>({
            ...prevImage,
            randomImage:url
        }))
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMemeImage(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
   
    return (
        <main>
            <div className="form">
                
                <input type="text"
                 placeholder="topText"
                 className="form-input"
                 value={memeImage.topText}
                 name="topText"
                 onChange={handleChange}
                 />

                <input type="text"
                placeholder="bottomText"
                className="form-input"
                value={memeImage.bottomText}
                name="bottomText"
                onChange={handleChange}/>

                <button onClick={getMemeImage}>Get a new image</button>
                </div>
                <div className="meme">
                <img className="memeImage" src={memeImage.randomImage} alt="iamge"/>
                <h2 className="top-text top">{memeImage.topText}</h2>
                <h2 className="top-text bottom">{memeImage.bottomText}</h2>
            </div>
        </main>
    )
}