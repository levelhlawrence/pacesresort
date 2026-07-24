import HeroImg from "../Images/homebgImg.jpg";
import { HashLink as Link } from "react-router-hash-link";
import { HiArrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <img
        src={HeroImg}
        alt="A cinematic retreat landscape"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,7,12,0.9),rgba(4,7,12,0.45))]" />
      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl rounded-[2rem] border border-white/20 bg-white/12 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-[24px] backdrop-saturate-150 sm:p-12">
          <div className="mb-5 inline-flex items-center rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
            Elevated escape • private retreat
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
            A refined sanctuary for slow living and unforgettable stays.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200/95 sm:text-xl">
            Discover a modern destination crafted for comfort, privacy, and
            striking views.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              smooth
              to="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 font-semibold text-slate-900 shadow-[0_8px_24px_rgba(255,255,255,0.18)] transition hover:bg-white"
            >
              Book a Stay <HiArrowRight size={18} />
            </Link>
            <Link
              smooth
              to="#gallery"
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/15"
            >
              Explore the Retreat
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
