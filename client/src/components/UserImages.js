import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const  UserImages = () => {

    const { images, getImages } = useContext(GlobalContext)

    useEffect(() => {
        getImages();
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
       
    }, []);

    var arr = []

    console.log("length", images.length)
    if (images.length) {
        // console.log(images[0])
        console.log(images)
        for (var i = 0; i < images.length; i++){
            arr.push("data:image/png;base64," + btoa(String.fromCharCode.apply(null, images[i].img.data)))
        }
        // arr.push(images.map(image => "data:image/png;base64," + btoa(String.fromCharCode.apply(null, image.img.data)))
    }

    return (
        images.length ?
        <div>
            <h3>Your Images</h3>
            <ul className="user-images">
                {
                    arr.map(image => (
                        <img key={Math.random()} src={image} alt="test" width="200"/>
                ))}
            </ul>
            
            </div>
            : null
    )
}
