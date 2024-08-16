"use client";

import { FaMusic } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";
import jogjaImageEvent from "/public/jogja-event1.webp";
import Image from "next/image";
import BuyTicket from "./components/BuyTicket";

interface Event {
  id: number;
  imgSrc: string;
}

const events: Event[] = [
  {
    id: 1,
    imgSrc: "/artatix.webp",
  },
  {
    id: 2,
    imgSrc: "/dispardiy.webp",
  },
  {
    id: 3,
    imgSrc: "/mandiri.webp",
  },
  {
    id: 4,
    imgSrc: "/wonderfulindonesia.webp",
  },
];

const EventsDetailsPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8 md:px-12 2xl:px-28">
        <div className="lg:flex lg:gap-x-8 xl:justify-between">
          <div className="flex flex-col gap-y-4">
            <div className="flex h-[36px] w-[81px] items-center justify-center gap-x-1 rounded-md bg-slate-800/40">
              <span className="mr-[2px]">
                <FaMusic className="h3 w3" />
              </span>
              <p className="text-md font-semibold">Music</p>
            </div>
            <h2 className="text-xl font-bold">
              Jogja Brebeg - Monster of Death
            </h2>
            <Image
              className="my-2 h-auto w-full rounded-lg lg:h-[270px] xl:h-[300px] 2xl:h-[330px]"
              src={jogjaImageEvent}
              height={0}
              width={0}
              alt="eventally-logo"
              priority
            ></Image>
          </div>

          <div className="my-5 flex flex-col gap-y-5 px-1 lg:self-end xl:pr-9 2xl:mb-5">
            <h3>Detail Event</h3>
            <div className="flex gap-x-3">
              <span className="self-center">
                <MdDateRange className="h-4 w-4" />
              </span>
              <div className="flex flex-col">
                <p>Tanggal</p>
                <span>29 Jun 2024 - 01 Sep 2024</span>
              </div>
            </div>
            <div className="flex gap-x-3">
              <span className="self-center">
                <IoMdTime className="h-4 w-4" />
              </span>
              <div className="flex flex-col">
                <p>Waktu</p>
                <span>10:00 - 22:00</span>
              </div>
            </div>
            <div className="flex gap-x-3">
              <span className="self-center">
                <FaLocationDot className="h-4 w-4" />
              </span>
              <div className="flex flex-col">
                <p>Location</p>
                <span>Jogja National Museum, Yogyakarta</span>
              </div>
            </div>
            <div className="z-50 w-full max-lg:hidden lg:-mb-2">
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-4 text-center text-base font-semibold tracking-wide text-white shadow-md transition duration-200 ease-in hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200"
              >
                Buy Ticket
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 px-1">
          <div className="flex gap-x-1 lg:py-7 xl:py-10">
            <span className="self-center">
              <IoMdArrowDropright className="h-4 w-4" />
            </span>
            <h2>Description Event</h2>
          </div>
          <p className="text-balance">
            Jogja Brebeg is the first underground event in the city of
            Yogyakarta. The event has been held 23 times since 1996 until 2016,
            with Death Metal and Black Metal music genres being the main
            priority. Jogja Brebeg is a gathering place for Indonesian
            underground bands. Many well-known bands from Jakarta, Bandung,
            Malang, Bali, and Sumatra take part in this event. Jogja Brebeg has
            become a boisterous and booming event for metal music lovers in
            Jogjakarta. Jogja Brebeg will return for its 24th edition in 2024
            with a different format than before. In this 24th edition, Jogja
            Brebeg will present BELPHEGOR, a famous band from Salzburg, Austria
            with the Black Death genre. Other big bands from around the world
            will soon become headliners at Jogja Brebeg,
          </p>
        </div>

        <div className="mx-auto mb-2 mt-14 px-1">
          <h2 className="px-1 text-xl font-medium">Sponsor</h2>
          <div className="flex items-center justify-center gap-x-5 py-5 md:gap-x-16 lg:gap-x-24 2xl:gap-x-32">
            {events.map((event) => (
              <Image
                className="lg:h-22 h-20 w-24 rounded-lg xl:h-24 xl:w-28 2xl:w-32"
                src={event.imgSrc}
                height={300}
                width={300}
                alt="sponsor-logo"
                priority
              ></Image>
            ))}
          </div>
        </div>
        <div className="lg:hidden">
          <BuyTicket />
        </div>
      </div>
    </>
  );
};

export default EventsDetailsPage;
