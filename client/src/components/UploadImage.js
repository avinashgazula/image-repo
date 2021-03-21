import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const UploadImage = () => {
    const [images, setImages] = useState(null)

    const { addImage } = useContext(GlobalContext)

    const onSubmit = event => {
        event.preventDefault();

        if (images) {

            var formatted_images = []

            for (var i = 0; i < images.length; i++) {
                var formatted_image = {}
                formatted_image.file = images[i]
                formatted_image.filename = images[i].name
                formatted_image.user = "user1"
                formatted_images.push(formatted_image)
            }

            console.log(formatted_images)

            const formData = new FormData();
            formData.append("count", images.length)
            for (var j = 0; j < images.length; j++) {
                formData.append(`file[${j}]`, images[j])
                formData.append(`filename[${j}]`, images[j].name)
                formData.append(`user[${j}]`, "user1")
            }

            addImage(formData);
        }

    }


    return (
        <div>
            <h3>Upload Image</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="uploadedImage">Image</label>
                    <br />
                    <input id="uploadedImage" type="file" accept=".png,.jpg,.jpeg" onChange={event => { setImages(event.target.files) }} multiple />
                </div>
                <button className="btn" type="submit">Upload</button>
            </form>
        </div >
    )

}
