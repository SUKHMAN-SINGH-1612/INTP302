import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0eafc] via-[#cfdef3] to-[#f9f9f9]">
      <div className="bg-white/80 rounded-3xl shadow-2xl px-10 py-16 flex flex-col items-center max-w-lg w-full">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#2d3142] mb-4 tracking-tight drop-shadow">
          INTP Test App
        </h1>
        <p className="text-lg sm:text-xl text-[#4f5d75] mb-8 text-center">
          Class Activity 1
        </p>
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#a1c4fd] to-[#c2e9fb] flex items-center justify-center mb-8 shadow-lg">
          <span className="text-5xl font-extrabold text-[#2d3142]">?</span>
        </div>
        <a
          href="#"
          className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-semibold text-lg shadow-md hover:from-[#5a67d8] hover:to-[#6b46c1] transition"
        >
          Start Test
        </a>
      </div>
    </div>
  );
}
