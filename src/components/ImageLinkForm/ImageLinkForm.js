import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div>
            <p classMane='f3'>
                {'This Magic Brain will detect faces in your pictures. Give it a Try '}
            </p>
            <div classMane='center'>
                <div classMane='form center pa4 br3 shadow-5'>                
                <input classMane='f4 pa2 w-70 center' type='text'/>
                <button classMane='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;