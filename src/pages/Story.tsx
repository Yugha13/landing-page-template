export default function Story() {
  return (
    <div className="flex flex-col items-center gap-10 w-full pb-8 lg:pb-0 mx-auto">
      {/* Headline */}
      <p className="text-white text-3xl sm:text-4xl xl:text-5xl font-medium leading-tight drop-shadow-lg text-center max-w-2xl mt-4 sm:mt-8 shrink-0">
        A studio born from a desire to{' '}
        <span
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            fontWeight: 400,
          }}
        >
          innovate
        </span>
      </p>

      {/* Bento Grid */}
      <div className="w-full max-w-6xl shrink-0 px-2 sm:px-4 md:px-0 mb-8 lg:mb-0">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[minmax(180px,auto)]">

          {/* Main Story Box (2x2) */}
          <div className="md:col-span-2 md:row-span-2 bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 flex flex-col justify-center gap-6 border border-white/20">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black tracking-tight">
              Our Origins 🌱
            </h2>
            <div className="flex flex-col gap-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                Founded in 2024, Forma began as a small collective of designers and engineers who shared a common frustration: the disconnect between how digital products look and how they function.
              </p>
              <p>
                We set out to create a studio where aesthetics and performance are treated as equals. Where every pixel has a purpose, and every line of code serves the user experience.
              </p>
              <p>
                Today, we partner with visionary founders and established brands to build digital experiences that leave a lasting impact.
              </p>
            </div>
          </div>

          {/* Tall Image (1x2) */}
          <div className="md:col-span-1 md:row-span-2 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden relative group border border-white/20 min-h-[300px]">
            <img src="/agency_team.png" alt="Team collaborating" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
              <span className="text-white font-medium text-lg drop-shadow-md">Collaboration</span>
            </div>
          </div>

          {/* Stat 1 (1x1) */}
          <div className="md:col-span-1 lg:col-span-1 bg-black/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-6 flex flex-col justify-center items-center text-center border border-white/10 group hover:bg-black/90 transition-colors">
            <span className="text-4xl sm:text-5xl font-bold text-white group-hover:scale-110 transition-transform">10+</span>
            <span className="text-sm text-gray-300 font-medium mt-2">Design Experts</span>
          </div>

          {/* Stat 2 (1x1) */}
          <div className="md:col-span-1 lg:col-span-1 bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-6 flex flex-col justify-center items-center text-center border border-white/20 group hover:bg-white transition-colors">
            <span className="text-4xl sm:text-5xl font-bold text-black group-hover:scale-110 transition-transform">50+</span>
            <span className="text-sm text-gray-500 font-medium mt-2">Projects Shipped</span>
          </div>

          {/* Stat 3 (md:1x1, lg:2x1) */}
          <div className="md:col-span-1 lg:col-span-2 bg-gradient-to-br from-pink-500 to-orange-400 rounded-2xl sm:rounded-3xl shadow-2xl p-6 flex flex-col justify-center items-center text-center group overflow-hidden relative border border-white/20 min-h-[180px]">
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-4xl sm:text-5xl font-bold text-white group-hover:scale-110 transition-transform relative z-10">5</span>
            <span className="text-sm text-white/90 font-medium mt-2 relative z-10">Industry Awards</span>
          </div>

          {/* Wide Image Box (md:3x1, lg:2x1) */}
          <div className="md:col-span-3 lg:col-span-2 md:row-span-1 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden relative group border border-white/20 min-h-[220px]">
            <img src="/agency_office.png" alt="Creative Studio" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
              <span className="text-white font-medium text-lg drop-shadow-md">Where magic happens</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

