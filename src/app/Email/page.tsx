import { link } from "fs";
  
import { FaEnvelope } from "react-icons/fa";

export default function Email() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-400 to-purple-600">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Email Addresses</h1>
        <p className="text-gray-600 mb-6">Contact us at:</p>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2">
            
            <a href="mailto:fatima@example.com" className="text-blue-600 hover:text-blue-700 transition-colors duration-300">
              fatima@example.com
            </a>
          </li>
          <li className="flex items-center space-x-2">
            
            <a href="mailto:info@example.com" className="text-blue-600 hover:text-blue-700 transition-colors duration-300">
              info@example.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
