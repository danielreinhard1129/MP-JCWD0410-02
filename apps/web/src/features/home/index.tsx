"use client";
import ShimmerButton from "@/components/magicui/shimmerButton";
import Image from "next/image";
import rocket from "/public/rocket.svg";
import PulsatingButton from "@/components/magicui/pulsatingButton";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  const handClick = () => {
    router.push("/login");
  };

  return (
    <div className="overflow-hidden bg-white">
      <div className="relative isolate min-h-screen overflow-hidden px-6 pt-9 lg:px-8">
        <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div
            className="relative left-[calc(50%-11rem)] -mt-9 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="lg:py-50 mx-auto max-w-2xl pt-36 sm:py-48">
          <div className="relative text-center">
            <h1 className="font-mochiy text-4xl font-medium tracking-wider text-gray-900 sm:text-6xl">
              Community to the rescue
            </h1>
            <Image
              className="absolute top-12 hidden animate-bounce md:right-32 md:block"
              src={rocket}
              height={90}
              width={90}
              alt="Product Logo"
            />
            <p className="mt-8 text-lg font-medium leading-8 text-gray-600">
              Events are a great way to connect with like-minded people. They
              also provide a great opportunity to learn and network with others
              in your field. Get started with Event-Ally to host or join your
              next event.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-y-9">
              <ShimmerButton
                onClick={handClick}
                className="bg-white shadow-2xl lg:hidden"
              >
                <span className="md:text-md whitespace-pre-wrap text-sm font-extrabold italic tracking-widest lg:text-lg">
                  Get Tickets
                </span>
              </ShimmerButton>
              <PulsatingButton>Explore Events</PulsatingButton>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#f02e65] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
