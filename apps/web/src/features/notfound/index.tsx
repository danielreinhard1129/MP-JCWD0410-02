import Background from "/public/astronaut-background.svg";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-indigo-900">
      <Image
        className="absolute object-cover"
        width={0}
        height={0}
        src={Background}
        alt="404 Page"
        fill
        priority
      />
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <div className="container relative z-10 mx-auto flex items-center px-6 py-32 md:px-12 xl:py-40">
        <div className="relative z-10 flex w-full flex-col items-center font-mono">
          <h1 className="mt-8 text-center text-5xl font-extrabold leading-tight text-white md:mt-16">
            You&#x27;re alone here
          </h1>
          <p className="my-44 animate-bounce text-8xl font-extrabold tracking-wide text-white">
            404
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
