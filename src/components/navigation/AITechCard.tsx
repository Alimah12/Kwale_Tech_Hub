'use client'

export default function AITechCard() {
  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="flex items-center px-4 py-2 text-sm font-medium text-base-content hover:text-info transition-colors duration-200 cursor-pointer">
        <span>AI & Tech</span>
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      <div tabIndex={0} className="dropdown-content z-[1] mt-2 w-[640px] bg-base-100 rounded-2xl shadow-2xl border border-base-200 overflow-hidden">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-info/10 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-5 h-5 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-base-content">AI & Technology Solutions</h3>
              <p className="text-sm text-base-content/70 mt-1">Cutting-edge technology for sustainable development</p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-2 gap-8">
            {/* AI Solutions */}
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-base-content/90 mb-4 uppercase tracking-wide">AI Solutions</h4>
              
              <a href="#circular-ai" className="group flex items-start p-3 rounded-xl hover:bg-base-200/50 transition-all duration-200">
                <div className="w-8 h-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-base-content group-hover:text-info">Circular AI Platform</div>
                  <div className="text-sm text-base-content/60 mt-1">AI-powered circular economy solutions</div>
                </div>
              </a>

              <a href="#ml-models" className="group flex items-start p-3 rounded-xl hover:bg-base-200/50 transition-all duration-200">
                <div className="w-8 h-8 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-base-content group-hover:text-info">ML Models</div>
                  <div className="text-sm text-base-content/60 mt-1">Custom machine learning solutions</div>
                </div>
              </a>

              <a href="#data-analytics" className="group flex items-start p-3 rounded-xl hover:bg-base-200/50 transition-all duration-200">
                <div className="w-8 h-8 bg-purple-50 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-base-content group-hover:text-info">Data Analytics</div>
                  <div className="text-sm text-base-content/60 mt-1">Advanced data insights and visualization</div>
                </div>
              </a>
            </div>

            {/* Sustainability Tech */}
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-base-content/90 mb-4 uppercase tracking-wide">Sustainability Tech</h4>
              
              <a href="#climate-solutions" className="group flex items-start p-3 rounded-xl hover:bg-base-200/50 transition-all duration-200">
                <div className="w-8 h-8 bg-orange-50 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-base-content group-hover:text-info">Climate Solutions</div>
                  <div className="text-sm text-base-content/60 mt-1">Environmental monitoring and solutions</div>
                </div>
              </a>

              <a href="#iot-systems" className="group flex items-start p-3 rounded-xl hover:bg-base-200/50 transition-all duration-200">
                <div className="w-8 h-8 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-base-content group-hover:text-info">IoT Systems</div>
                  <div className="text-sm text-base-content/60 mt-1">Smart sensor networks and automation</div>
                </div>
              </a>

              <a href="#green-tech" className="group flex items-start p-3 rounded-xl hover:bg-base-200/50 transition-all duration-200">
                <div className="w-8 h-8 bg-pink-50 dark:bg-pink-900/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-base-content group-hover:text-info">Green Technology</div>
                  <div className="text-sm text-base-content/60 mt-1">Renewable energy and eco-innovations</div>
                </div>
              </a>
            </div>
          </div>

          {/* Innovation Spotlight */}
          <div className="mt-8 p-4 bg-gradient-to-r from-info/5 to-info/10 rounded-xl border border-info/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-info/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-base-content">Innovation in Action</p>
                  <p className="text-xs text-base-content/60 mt-1">Explore our latest AI-powered projects and research</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <a href="#projects" className="btn btn-outline btn-sm rounded-lg">
                  View Projects
                </a>
                <a href="#demo" className="btn btn-info btn-sm rounded-lg">
                  Request Demo
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}