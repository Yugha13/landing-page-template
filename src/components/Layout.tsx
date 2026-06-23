import { Link, Outlet } from 'react-router-dom';

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260602_150901_c45b90ec-18d7-42ff-90e2-b95d7109e330.mp4';

export default function Layout() {
  return (
    <div className="min-h-screen bg-white p-3 sm:p-4 md:p-6">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] lg:h-[calc(100vh-48px)]">
        {/* Background video */}
        <video
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Content layer */}
        <div className="relative z-10 flex flex-col min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] lg:h-full p-4 sm:p-6 md:p-8 gap-6 overflow-y-auto">
          {/* Navbar */}
          <nav className="bg-white/60 backdrop-blur-md rounded-2xl shadow-sm pl-3 sm:pl-4 pr-2 py-2 w-full sm:w-auto flex items-center gap-3 sm:gap-6 shrink-0">
            {/* Logo */}
            <Link to="/" className="shrink-0">
              <svg viewBox="0 0 256 256" className="w-8 h-8">
                <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z" fill="black" />
                <path d="M 256 128 L 128 128 L 0 0 L 128 0 Z" fill="black" />
              </svg>
            </Link>

            {/* Links */}
            <div className="hidden sm:flex items-center gap-6">
              <Link to="/story" className="text-gray-800 text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap">
                Our story
              </Link>
              <a href="#" className="text-gray-800 text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap">
                Expertise
              </a>
              <a href="#" className="text-gray-800 text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap">
                Our work
              </a>
              <a href="#" className="text-gray-800 text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap">
                Journal
              </a>
            </div>

            {/* CTA */}
            <button className="ml-auto sm:ml-0 bg-black text-white text-sm font-medium px-4 sm:px-5 py-2 rounded-xl hover:bg-gray-800 transition-colors">
              Start a project
            </button>
          </nav>

          {/* Spacer */}
          <div className="flex-1 min-h-[2rem] shrink-0" />

          {/* Bottom row */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
