import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Radio, MapPin, Users, Target, Lightbulb, AlertTriangle, CheckCircle } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Autonomous Mapping & User-Directed Navigation Robot",
      icon: <Radio className="w-16 h-16 text-blue-500" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg">
            <h2 className="text-4xl font-bold mb-4">Project Overview</h2>
            <p className="text-xl">Interactive Robotics Demonstration Platform</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Team Members</h3>
              <p className="text-gray-600 text-lg">[Your Names]</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Robot Platform</h3>
              <p className="text-gray-600 text-lg font-semibold">TurtleBot3 Burger</p>
              <ul className="mt-3 space-y-1 text-gray-600">
                <li>• Raspberry Pi 4</li>
                <li>• OpenCR Controller</li>
                <li>• LiDAR Sensor</li>
                <li>• IMU</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Application Modes</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Mode 1:</strong> Autonomous mapping and exploration</p>
              <p><strong>Mode 2:</strong> Interactive navigation with user-selected destinations</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Purpose, Motivation & Target Application",
      icon: <Target className="w-16 h-16 text-green-500" />,
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 border-2 border-green-500 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-green-800 mb-3">Purpose</h3>
            <p className="text-lg text-gray-700">Demonstrate autonomous mapping and interactive navigation for open-day visitors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg shadow-md">
              <div className="text-blue-500 font-bold text-lg mb-2">Autonomous Mode</div>
              <p className="text-gray-600">Draws attention visually with automated exploration</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md">
              <div className="text-purple-500 font-bold text-lg mb-2">Interactive Mode</div>
              <p className="text-gray-600">Allows safe user control and engagement</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md">
              <div className="text-indigo-500 font-bold text-lg mb-2">Live Experience</div>
              <p className="text-gray-600">Visitors experience real robotics concepts</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <Users className="w-6 h-6 mr-2" />
              Target Audience
            </h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded shadow">
                <p className="font-semibold text-gray-800">Children</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="font-semibold text-gray-800">Parents</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="font-semibold text-gray-800">Prospective Students</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-500 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Success Criteria</h3>
            <p className="text-lg">Visitors understand behavior, interact safely, and robot runs reliably</p>
          </div>
        </div>
      )
    },
    {
      title: "Key Functions & Requirements",
      icon: <CheckCircle className="w-16 h-16 text-indigo-500" />,
      content: (
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-3">Mode 1: Autonomous Mapping</h3>
              <ul className="space-y-2">
                <li>✓ Explores environment automatically</li>
                <li>✓ Uses LiDAR, IMU, and wheel odometry</li>
                <li>✓ Generates live 2D occupancy grid</li>
                <li>✓ Avoids obstacles dynamically</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-3">Mode 2: Interactive Navigation</h3>
              <ul className="space-y-2">
                <li>✓ User clicks destination on map</li>
                <li>✓ Robot plans path and drives safely</li>
                <li>✓ Map updates in real time</li>
                <li>✓ Speed and collision limits ensure safety</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-400 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">High-Level Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Generate and update map continuously</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Respond to user input &lt;1 second</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Avoid obstacles reliably</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Run 5+ minutes without errors</p>
              </div>
              <div className="flex items-start space-x-3 md:col-span-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Maintain stable Wi-Fi connection</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "System Overview & Architecture",
      icon: <MapPin className="w-16 h-16 text-red-500" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Component Data Flow</h3>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-blue-50 p-4 rounded">
                  <div className="font-bold text-blue-800">Sensors</div>
                  <div className="text-sm text-gray-600">LiDAR + IMU + Encoders</div>
                  <div className="text-blue-500">→</div>
                </div>
                
                <div className="flex items-center justify-between bg-green-50 p-4 rounded">
                  <div className="font-bold text-green-800">Processing</div>
                  <div className="text-sm text-gray-600">SLAM + Localization</div>
                  <div className="text-green-500">→</div>
                </div>
                
                <div className="flex items-center justify-between bg-purple-50 p-4 rounded">
                  <div className="font-bold text-purple-800">Control</div>
                  <div className="text-sm text-gray-600">Raspberry Pi 4 (Robot)</div>
                  <div className="text-purple-500">→</div>
                </div>
                
                <div className="flex items-center justify-between bg-orange-50 p-4 rounded">
                  <div className="font-bold text-orange-800">Actuation</div>
                  <div className="text-sm text-gray-600">Motors via OpenCR</div>
                  <div className="text-orange-500">✓</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-indigo-50 border-2 border-indigo-300 p-5 rounded-lg">
              <h4 className="font-bold text-indigo-800 mb-2">Host PC</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• SLAM Toolbox</li>
                <li>• Nav2 Stack</li>
                <li>• RViz Visualization</li>
              </ul>
            </div>
            
            <div className="bg-pink-50 border-2 border-pink-300 p-5 rounded-lg">
              <h4 className="font-bold text-pink-800 mb-2">User Interface</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Goal selection via RViz</li>
                <li>• Tablet interface option</li>
                <li>• Real-time map display</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-800 text-white p-5 rounded-lg">
            <h4 className="font-bold mb-2">Design Justification</h4>
            <p className="text-sm">LiDAR provides accurate indoor mapping • ROS2 enables robust communication • Remote PC handles heavy computation efficiently</p>
          </div>
        </div>
      )
    },
    {
      title: "Early Design Decisions",
      icon: <Lightbulb className="w-16 h-16 text-yellow-500" />,
      content: (
        <div className="space-y-5">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-3">Hardware Decisions</h3>
            <div className="space-y-2">
              <p><strong>LiDAR over Camera:</strong> Lighting-independent, 360° scanning capability</p>
              <p><strong>TurtleBot3 Burger:</strong> Excellent ROS2 support and mobility</p>
              <p><strong>Raspberry Pi 4:</strong> Handles sensors, offloads SLAM to PC</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-3">Software Stack</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white bg-opacity-20 p-3 rounded">
                <p className="font-bold">ROS2 Humble</p>
                <p className="text-sm">Communication framework</p>
              </div>
              <div className="bg-white bg-opacity-20 p-3 rounded">
                <p className="font-bold">SLAM Toolbox</p>
                <p className="text-sm">Reliable mapping</p>
              </div>
              <div className="bg-white bg-opacity-20 p-3 rounded">
                <p className="font-bold">Nav2</p>
                <p className="text-sm">Path planning</p>
              </div>
              <div className="bg-white bg-opacity-20 p-3 rounded">
                <p className="font-bold">State Machine</p>
                <p className="text-sm">Mode switching</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-2 border-red-300 p-5 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 mb-3">Rejected Alternatives</h3>
            <div className="space-y-2 text-gray-700">
              <p>❌ <strong>Onboard SLAM:</strong> Raspberry Pi CPU too limited</p>
              <p>❌ <strong>Stereo Vision:</strong> Calibration complexity</p>
              <p>❌ <strong>High-Speed Movement:</strong> Safety concerns</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Challenges, Unknowns & Risks",
      icon: <AlertTriangle className="w-16 h-16 text-orange-500" />,
      content: (
        <div className="space-y-5">
          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded">
            <h3 className="text-2xl font-bold text-red-800 mb-4">Technical Challenges</h3>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded shadow">
                <p className="font-bold text-gray-800">Wi-Fi Interference</p>
                <p className="text-gray-600 text-sm">Solution: Use dedicated hotspot</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="font-bold text-gray-800">SLAM Drift</p>
                <p className="text-gray-600 text-sm">Solution: Limit environment size</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="font-bold text-gray-800">LiDAR Noise</p>
                <p className="text-gray-600 text-sm">Solution: Inflate obstacles (shiny/transparent surfaces)</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded">
            <h3 className="text-2xl font-bold text-yellow-800 mb-4">Human & Environment Factors</h3>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded shadow">
                <p className="font-bold text-gray-800">Rapid User Input</p>
                <p className="text-gray-600 text-sm">Solution: Simple, intuitive UI design</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="font-bold text-gray-800">Moving People</p>
                <p className="text-gray-600 text-sm">Solution: Conservative speed limits</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="font-bold text-gray-800">Battery Life</p>
                <p className="text-gray-600 text-sm">Solution: Swap batteries between runs</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Clear Success Criteria",
      icon: <CheckCircle className="w-16 h-16 text-green-500" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-2">Project Success Metrics</h2>
            <p className="text-lg opacity-90">Measurable outcomes for demonstration success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-green-400 p-5 rounded-lg shadow-md">
              <div className="flex items-start space-x-3">
                <div className="text-green-500 text-2xl">✓</div>
                <div>
                  <p className="font-bold text-gray-800">Autonomous Exploration</p>
                  <p className="text-gray-600 text-sm">Maps accurately and explores autonomously</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-green-400 p-5 rounded-lg shadow-md">
              <div className="flex items-start space-x-3">
                <div className="text-green-500 text-2xl">✓</div>
                <div>
                  <p className="font-bold text-gray-800">User Navigation</p>
                  <p className="text-gray-600 text-sm">Safe and reliable user-selected navigation</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-green-400 p-5 rounded-lg shadow-md">
              <div className="flex items-start space-x-3">
                <div className="text-green-500 text-2xl">✓</div>
                <div>
                  <p className="font-bold text-gray-800">Reliability</p>
                  <p className="text-gray-600 text-sm">Both modes run 5+ minutes without failure</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-green-400 p-5 rounded-lg shadow-md">
              <div className="flex items-start space-x-3">
                <div className="text-green-500 text-2xl">✓</div>
                <div>
                  <p className="font-bold text-gray-800">Obstacle Avoidance</p>
                  <p className="text-gray-600 text-sm">Avoids obstacles and re-plans when needed</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-green-400 p-5 rounded-lg shadow-md">
              <div className="flex items-start space-x-3">
                <div className="text-green-500 text-2xl">✓</div>
                <div>
                  <p className="font-bold text-gray-800">User Experience</p>
                  <p className="text-gray-600 text-sm">Visitors understand without explanation</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-green-400 p-5 rounded-lg shadow-md">
              <div className="flex items-start space-x-3">
                <div className="text-green-500 text-2xl">✓</div>
                <div>
                  <p className="font-bold text-gray-800">Autonomy</p>
                  <p className="text-gray-600 text-sm">Minimal operator intervention required</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-500 text-white p-6 rounded-lg text-center">
            <p className="text-xl font-semibold">All criteria must be met for successful demonstration</p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {slides[currentSlide].icon}
              <h1 className="text-3xl font-bold text-white">{slides[currentSlide].title}</h1>
            </div>
            <div className="text-white text-lg font-semibold">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>

          <div className="p-8 min-h-[600px]">
            {slides[currentSlide].content}
          </div>

          <div className="bg-gray-100 p-6 flex justify-between items-center">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition ${
                currentSlide === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>

            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentSlide ? 'bg-blue-500 w-8' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition ${
                currentSlide === slides.length - 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;