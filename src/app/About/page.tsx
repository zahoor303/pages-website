export default function About() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-400">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-4 text-center transform transition duration-500 hover:scale-105">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 animate-bounce">
          About Us
        </h1>
        <p className="text-gray-600 mb-6 leading-relaxed">
          We are dedicated to providing the best services and creating lasting impressions. Learn more about our journey, mission, and what drives us.
        </p>
        <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}


