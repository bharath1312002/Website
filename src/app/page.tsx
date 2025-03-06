import { motion } from "framer-motion";

export default function Home() {
  const features = [
    {
      icon: "🚀",
      title: "Fast Performance",
      description: "Our platform is optimized for speed and efficiency.",
    },
    {
      icon: "🔒",
      title: "Secure & Reliable",
      description: "Your data is safe with our advanced security measures.",
    },
    {
      icon: "💡",
      title: "Innovative Solutions",
      description: "We provide cutting edge solutions for your business.",
    },
  ];


  return (<div>
    <header className="bg-white shadow-md">
    <nav className="container mx-auto flex justify-between items-center py-4">
      <div className="text-2xl font-bold text-blue-600">Etailify</div>
      <div className="space-x-6">
        <a className="text-gray-700 hover:text-blue-600">Home</a>
        <a className="text-gray-700 hover:text-blue-600">About</a>
        <a className="text-gray-700 hover:text-blue-600">Services</a>
        <a className="text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      </nav>
     </header>

     <div
          className="bg-blue-50 py-20"
        >
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold text-blue-900 mb-4">Welcome to Etailify</h1>
            <p className="text-xl text-gray-700 mb-8">Your trusted partner for innovative solutions.</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>
        </div>

        <div className="bg-blue-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>


     <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Etailify. All rights reserved.</p>
      </div>
    </footer>
    
    </div>
  );
}
