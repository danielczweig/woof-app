import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Image } from '@chakra-ui/react'

const ImageCarousel = ( { imageUrl } ) => {
  return (
    <Carousel>
      {imageUrl.map((url, i) =>
        <Carousel.Item
          key={i}
        >
          <Image
            className="d-block w-100"
            src={url}
            alt={`Puppy picture #${i + 1}`}
            borderWidth='1px'
            borderRadius='lg'
            width='25rem'
            height='25rem'
            objectFit='cover'
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      )}
    </Carousel>
  );
}

export default ImageCarousel;