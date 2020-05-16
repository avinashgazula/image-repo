import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const UploadImage = () => {
    const [image, setImage] = useState(null)

    const { addImage } = useContext(GlobalContext)

    const onSubmit = event => {
        event.preventDefault();

        if (image) {

            console.log(`image file is ${image}`)

            const formData = new FormData();
            formData.append("file", image);
            formData.append("filename", image.name)
            formData.append("user", "user1")

            // const newImage = {
            //     "user": "user1",
            //     "filename": image.name,
            //     "file": image
            // }

            console.log(image);
            addImage(formData)
        }
        
    }

    
    return (
        <div>
            <h3>Upload Image</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="uploadedImage">Image</label>
                    <br/>
                    <input id="uploadedImage" type="file" onChange={event => { setImage(event.target.files[0]) }} placeholder="Enter text.." />
                </div>
                <button className="btn" type="submit">Upload</button>
            </form>
        </div >
    )
    
}
