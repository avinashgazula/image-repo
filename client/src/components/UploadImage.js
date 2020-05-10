import React, { Component } from 'react'

export default class UploadImage extends Component {

    state = {
        image: null
    }

    onFileChange = event => {
        this.setState({image: event.target.files[0]})
    }

    onSubmit = event => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("image", this.state.image, this.state.image.name);
        formData.append()

        console.log(this.state.image);
        
    }

    render() {
        return (
            <div>
                <h3>Upload Image</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-control">
                        <label htmlFor="uploadedImage">Image</label>
                        <input id="uploadedImage" type="file" onChange={this.onFileChange} placeholder="Enter text.." />
                    </div>
                    <button className="btn" type="submit">Upload</button>
                </form>
            </div >
        )
    }
}
