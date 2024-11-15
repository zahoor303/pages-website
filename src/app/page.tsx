import Link from 'next/link';
import Navbar from './components/navabar'
export default function Home() {
  return (
    <div>
      <Navbar />
      {/* Main Content Section */}
      <section className="h-screen w-full flex items-center justify-center p-8 bg-gradient-to-b from-red-200 to-purple-300 shadow-xl">
        <nav className="bg-purple-600 flex items-center justify-center space-x-5 p-6 rounded-2xl shadow-lg max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <h1 className="text-2xl text-white font-serif tracking-wider">
            WELCOME TO OUR WEBSITE
          </h1>
        </nav>
      </section>
    </div>
  );
}



