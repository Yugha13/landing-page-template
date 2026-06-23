export default function Story() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-8 lg:pb-0">
      {/* Headline */}
      <p className="text-white text-3xl sm:text-4xl xl:text-5xl font-medium leading-tight drop-shadow-lg lg:max-w-lg xl:max-w-2xl shrink-0">
        A studio born from
        <br />
        a desire to{' '}
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

      {/* Story card */}
      <div className="w-full lg:w-[min(480px,45%)] shrink-0">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 flex flex-col gap-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-black tracking-tight">
            Our Origins 🌱
          </h2>
          <div className="flex flex-col gap-4 text-sm text-gray-600 leading-relaxed">
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
          
          <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-100">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-black">10+</span>
              <span className="text-xs text-gray-500 font-medium">Experts</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-black">50+</span>
              <span className="text-xs text-gray-500 font-medium">Projects</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-black">5</span>
              <span className="text-xs text-gray-500 font-medium">Awards</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
