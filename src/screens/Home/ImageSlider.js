import { Carousel } from "@material-tailwind/react";
import image1 from '../../images/1.jpg'
import image2 from '../../images/2.jpg'
import image3 from '../../images/3.jpg'
import image4 from '../../images/4.jpg'

export default function GalleryWithCarousel() {
  return (
    <div className="flex justify-center items-center mt-2">
      <Carousel transition={{ duration: 1 }} autoplayDelay={10000} loop={true} autoplay={true} className="rounded-none max-w-screen-2xl h-52 lg:h-96 lg:rounded-xl">
        <img
          src={image1} // Path to your image file
          alt="image 1"
          className="h-full w-full object-cover object-center"
        />
        <img
          src={image2} // Path to your second image file
          alt="image 2"
          className="h-full w-full object-cover object-center"
        />
        <img
          src={image3} // Path to your third image file
          alt="image 3"
          className="h-full w-full object-cover object-center"
        />
        <img
          src={image4} // Path to your third image file
          alt="image 4"
          className="h-full w-full object-cover object-center"
        />
      </Carousel>
    </div>
  );
}
