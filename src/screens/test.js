import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// Import your images here
import image1 from '../images/Braces.png';
import image2 from '../images/TeethRemoval.png';
import image3 from '../images/TeethWhitining.png';
import image4 from '../images/bridges and crown.png';
import image5 from '../images/dentalImplant.png';
import image6 from '../images/dentures.png';
import image7 from '../images/filling.png';
import image8 from '../images/kidDentistry.png';
import image9 from '../images/read more.png';
import image10 from '../images/rootCanalTreatment.png';

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image10,
    image9,
];

const imageLinks = [
    "/braces",
    "/teeth-removal",
    "/teeth-whitening",
    "/bridges-and-crown",
    "/dental-implant",
    "/dentures",
    "/filling",
    "/kid-dentistry",
    "/root-canal-treatment",
    "/read-more"
];

const imageNames = [
    "Braces",
    "Teeth Removal",
    "Teeth Whitening",
    "Bridges and Crown",
    "Dental Implant",
    "Dentures",
    "Filling",
    "Kid Dentistry",
    "Root Canal Treatment",
    "Read More"
];

export default function DefaultGallery() {
    const [currentImage, setCurrentImage] = useState(null);

    return (
        <div className="flex justify-center items-center m-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5 lg:max-w-screen-2xl">
                {images.map((image, index) => (
                    <div key={index} className="flex flex-col items-center border border-gray-300">
                        <Link to={imageLinks[index]}>
                            <div className="image-container h-48 w-48">
                                <img
                                    className="image h-full w-full object-contain p-6"
                                    src={image}
                                    alt={imageNames[index]}
                                />
                            </div>
                            <p className="image-name">{imageNames[index]}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
