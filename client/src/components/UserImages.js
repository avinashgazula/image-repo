import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const UserImages = ({ user }) => {

    const { images, getImages, deleteImage } = useContext(GlobalContext)

    useEffect(() => {
        getImages(user.uid);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    if (images.length) {

        for (var i = 0; i < images.length; i++) {
            var b = Buffer.from(images[i].img.data);
            var s = b.toString('base64');
            images[i].base64 = "data:image/png;base64," + s
        }

    }



    return (
        images.length ?
            <div>
                <h3>Your Images</h3>
                <ul className="user-images">
                    {
                        images.map(image => (
                            <img
                                key={image._id} src={image.base64} alt={image.filename} width="200" onDoubleClick={() => deleteImage(image._id)}
                            />
                        ))}
                </ul>

            </div>
            : null
    )
}
