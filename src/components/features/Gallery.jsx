import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import './Gallery.css';

const Gallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openLightbox = (img) => setSelectedImage(img);
    const closeLightbox = () => setSelectedImage(null);

    return (
        <>
            <div className="gallery-grid">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="gallery-item"
                        onClick={() => openLightbox(img)}
                    >
                        <img src={img.src} alt={img.caption || `Gallery image ${index + 1}`} loading="lazy" />
                        <div className="gallery-overlay">
                            <ZoomIn className="zoom-icon" size={32} />
                            {img.caption && <span className="gallery-caption">{img.caption}</span>}
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="lightbox" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>
                        <X size={32} />
                    </button>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage.src} alt={selectedImage.caption} />
                        {selectedImage.caption && (
                            <p className="lightbox-caption">{selectedImage.caption}</p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;
