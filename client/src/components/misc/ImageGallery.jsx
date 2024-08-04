import { useParams } from "react-router-dom";
import { useState, useCallback } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

// Example photos array
/*const photos = [
  {
    src: "https://example.com/photo1.jpg",
    width: 4,
    height: 3,
    title: "Photo 1",
  },
  {
    src: "https://example.com/photo2.jpg",
    width: 1,
    height: 1,
    title: "Photo 2",
  },
];*/

export default function CustomImageGallery({ photos }) {
  // hooks
  const params = useParams();

  // Transform photos for react-image-gallery
  const galleryPhotos = photos.map((photo) => ({
    original: photo.src,
    thumbnail: photo.src,
    description: photo.title || "",
  }));

  return (
    <ImageGallery
      items={galleryPhotos}
      showThumbnails={true}
      showFullscreenButton={true}
      showPlayButton={true}
      onClick={() => console.log('Image clicked')}
    />
  );
}

// Usage example
/*function App() {
  return (
    <div>
      <CustomImageGallery photos={photos} />
    </div>
  );
}*/






/*import { useParams } from "react-router-dom";
import { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";

import Carousel, { Modal, ModalGateway } from "react-images";*/

// const photos = [
//   {
//     src: "https://realist-app-udemy-course-bucket.s3.amazonaws.com/q6FJqA0V-0Ryx1UC7MDQa.jpeg",
//     width: 4,
//     height: 3,
//   },
//   {
//     src: "https://realist-app-udemy-course-bucket.s3.amazonaws.com/FpP5Z2pYaPqTTOrJu2MzN.jpeg",
//     width: 1,
//     height: 1,
//   },
// ];

/*export default function ImageGallery({ photos }) {
  // state
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  // hooks
  const params = useParams();

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrent(index);
    setIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrent(0);
    setIsOpen(false);
  };

  return (
    <>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {isOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={current}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
}*/