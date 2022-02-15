import React from 'react'
import GALLERY from '../../data/gallery.data';
import { GalleryStyle } from './styles/gallery.styles'

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: GALLERY
        }
    }

    render() {
        const { photos } = this.state;

        return (

            <GalleryStyle>
                {
                    photos.map(({ id, url }) => (
                        <div key={id} className={`p-${id} image`}>
                            <img alt='gallery photos' src={url} />
                        </div>
                    ))
                }
            </GalleryStyle>
        )
    }
}

export default Gallery