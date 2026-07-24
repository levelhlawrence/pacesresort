const About = ({ imageData }) => {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
            What to expect
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            A retreat shaped around ease, warmth, and a deeper sense of
            stillness.
          </h2>
        </div>
        <p className="max-w-2xl text-base leading-7 text-slate-300">
          From intimate gatherings to serene private spaces, every experience is
          crafted to feel effortless, restorative, and beautifully personal.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {imageData.map((data) => (
          <article
            key={data.id}
            className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/70 shadow-[0_16px_40px_rgba(0,0,0,0.28)]"
          >
            <div className="relative h-80 overflow-hidden">
              <img
                src={data.img}
                alt={data.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[10px] uppercase tracking-[0.35em] text-amber-300">
                  Experience
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-wide text-white">
                  {data.title}
                </h3>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default About;
