// pages/404.js
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-white px-4 relative overflow-hidden">
      
      {/* Floating Background Shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-56 h-56 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      
      {/* Main Content */}
      <h1 className="text-[10rem] font-extrabold drop-shadow-lg">404</h1>
      <p className="mt-4 text-3xl font-semibold drop-shadow-md">
        Lost in Space 🌌
      </p>
      <p className="mt-2 text-lg text-white/80">
        The page you’re looking for has drifted away.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="mt-8 px-8 py-3 rounded-2xl text-lg font-medium bg-white text-purple-700 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110"
      >
        🚀 Take Me Home
      </Link>

      {/* Footer Glow Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-pink-400 via-yellow-300 to-cyan-400 animate-pulse"></div>
    </div>
  );
}
