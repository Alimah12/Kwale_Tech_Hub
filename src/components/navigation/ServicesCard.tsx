'use client'

export default function ServicesCard() {
  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="flex items-center px-4 py-2 text-sm font-medium text-base-content hover:text-accent transition-colors duration-200 cursor-pointer">
        <span>Services</span>
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      <div tabIndex={0} className="dropdown-content z-[1] mt-2 w-[680px] bg-base-100 rounded-2xl shadow-2xl border border-base-200 overflow-hidden">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-base-content">Our Services</h3>
              <p className="text-sm text-base-content/70 mt-1">Professional solutions for digital transformation</p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-2 gap-8">
            {/* Consulting & Advisory */}
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-base-content/90 mb-4 uppercase tracking-wide">Consulting & Advisory</h4>
              
              <a href="#tech-consultancy" className="group flex items-start p-3 rounded-xl hover:bg-base-200/50 transition-all duration-200">
                <div className="w-8 h-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-base-content group-hover:text-accent">Tech Consultancy</div>
                  <div className="text-sm text-base-content/60 mt-1">Strategic technology planning and implementation</div>
                </div>
              </a>

              <a href="#digital-transformation" className="group flex items-start p-3 rounded-xl hover:bg-base-200/50 transition-all duration-200">
                <div className="w-8 h-8 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-base-content group-hover:text-accent">Digital Transformation</div>
                  <div className="text-sm text-base-content/60 mt-1">End-to-end digitization solutions</div>
                </div>
              </a>

              <a href="#capacity-building" className="group flex items-start p-3 rounded-xl hover:bg-base-200/50 transition-all duration-200">
                <div className="w-8 h-8 bg-purple-50 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-base-content group-hover:text-accent">Capacity Building</div>
                  <div className="text-sm text-base-content/60 mt-1">Organizational development and training</div>
                </div>
              </a>
            </div>

            {/* Resources & Opportunities */}
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-base-content/90 mb-4 uppercase tracking-wide">Resources & Opportunities</h4>
              
              <a href="#opportunities" className="group flex items-start p-3 rounded-xl hover:bg-base-200/50 transition-all duration-200">
                <div className="w-8 h-8 bg-orange-50 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-base-content group-hover:text-accent">Career Opportunities</div>
                  <div className="text-sm text-base-content/60 mt-1">Job placements and internship programs</div>
                </div>
              </a>

              <a href="#publications" className="group flex items-start p-3 rounded-xl hover:bg-base-200/50 transition-all duration-200">
                <div className="w-8 h-8 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-base-content group-hover:text-accent">Publications</div>
                  <div className="text-sm text-base-content/60 mt-1">Research papers and industry insights</div>
                </div>
              </a>

              <a href="#impact-reports" className="group flex items-start p-3 rounded-xl hover:bg-base-200/50 transition-all duration-200">
                <div className="w-8 h-8 bg-pink-50 dark:bg-pink-900/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-base-content group-hover:text-accent">Impact Reports</div>
                  <div className="text-sm text-base-content/60 mt-1">Annual progress and community impact</div>
                </div>
              </a>
            </div>
          </div>

          {/* Featured Service */}
          <div className="mt-8 p-4 bg-gradient-to-r from-accent/5 to-accent/10 rounded-xl border border-accent/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-base-content">Need custom solutions?</p>
                  <p className="text-xs text-base-content/60 mt-1">Get personalized consulting for your organization</p>
                </div>
              </div>
              <a href="#consultation" className="btn btn-accent btn-sm rounded-lg">
                Request Consultation
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}