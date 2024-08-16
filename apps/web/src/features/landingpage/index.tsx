import Link from "next/link";
import Card from "../components/Card";
import Hero from "../components/Hero";

const LandingPage = () => {
  return (
    <main>
      <Hero />
      <div className="container mx-auto">
        <div className="relative flex w-full cursor-pointer justify-between px-5 py-9 pt-14 font-bold text-slate-800">
          <h2 className="text-2xl">Upcoming events</h2>
          <Link href="/events">
            <h2 className="text-md absolute bottom-0 right-5 md:right-6 lg:text-lg xl:text-xl">
              Browse All &rarr;
            </h2>
          </Link>
        </div>
        <Card />
      </div>
    </main>
  );
};

export default LandingPage;
