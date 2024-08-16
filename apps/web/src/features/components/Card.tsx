import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaRupiahSign } from "react-icons/fa6";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: string;
  imgSrc: string;
  date: string;
  location: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "SAN DIEGO’S annual bollywood cruise",
    price: "999.000",
    imgSrc: "/batam-eventsImage1.webp",
    date: "24 Augst 2024",
    location: "Batam",
  },
  {
    id: 2,
    title: "SAN DIEGO’S annual bollywood cruise",
    price: "999.000",
    imgSrc: "/batam-eventsImage1.webp",
    date: "24 Augst 2024",
    location: "Batam",
  },
  {
    id: 3,
    title: "SAN DIEGO’S annual bollywood cruise",
    price: "999.000",
    imgSrc: "/batam-eventsImage1.webp",
    date: "24 Augst 2024",
    location: "Batam",
  },
  {
    id: 4,
    title: "SAN DIEGO’S annual bollywood cruise",
    price: "999.000",
    imgSrc: "/batam-eventsImage1.webp",
    date: "24 Augst 2024",
    location: "Batam",
  },
];

const Card = () => {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-7 lg:py-6">
        <div className="-m-4 flex flex-wrap">
          {products.map((product) => (
            <div key={product.id} className="w-full p-4 md:w-1/2 lg:w-1/4">
              <Image
                className="w-full rounded-md object-cover object-top md:h-48 lg:h-32 xl:h-40 2xl:h-48"
                src={product.imgSrc}
                height={200}
                width={200}
                alt="concert-picture"
                priority
              />
              <div className="px-1 py-4">
                <h1 className="title-font mb-3 text-2xl font-medium text-gray-900">
                  {product.title}
                </h1>
                <span className="flex items-center gap-x-3">
                  <MdDateRange className="my-3 h-5 w-5" />
                  <p className="text-lg font-medium">{product.date}</p>
                </span>
                <span className="flex items-center gap-x-3">
                  <FaLocationDot className="h-5 w-5" />
                  <p className="text-lg font-medium">{product.location}</p>
                </span>
                <span className="flex items-center justify-end gap-x-1">
                  <FaRupiahSign className="my-3 h-5 w-5" />
                  <p className="text-xl font-medium xl:text-2xl">
                    {product.price}
                  </p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
