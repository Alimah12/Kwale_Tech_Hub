'use client'

import Link from 'next/link'

export default function ProgramsCard() {
  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="flex items-center px-4 py-2 text-sm font-medium text-base-content hover:text-secondary transition-colors duration-200 cursor-pointer">
        <span>Programs</span>
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      <div tabIndex={0} className="dropdown-content z-[1] mt-2 w-[720px] bg-base-100 rounded-2xl shadow-2xl border border-base-200 overflow-hidden">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-base-content">Innovation Programs</h3>
              <p className="text-sm text-base-content/70 mt-1">Empowering communities through technology and education</p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-2 gap-8">
            {/* Learning & Development */}
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-base-content/90 mb-4 uppercase tracking-wide">Learning & Development</h4>
              
              <a href="#learning-hub" className="group flex items-start p-3 rounded-xl hover:bg-base-200/50 transition-all duration-200">
                <div className="w-8 h-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-base-content group-hover:text-secondary">Learning Hub</div>
                  <div className="text-sm text-base-content/60 mt-1">Comprehensive tech education platform</div>
                </div>
              </a>

              <a href="#code-brew" className="group flex items-start p-3 rounded-xl hover:bg-base-200/50 transition-all duration-200">
                <div className="w-8 h-8 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-base-content group-hover:text-secondary">Code Brew</div>
                  <div className="text-sm text-base-content/60 mt-1">Intensive coding bootcamps and workshops</div>
                </div>
              </a>

              <a href="#leadership-academy" className="group flex items-start p-3 rounded-xl hover:bg-base-200/50 transition-all duration-200">
                <div className="w-8 h-8 bg-purple-50 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-base-content group-hover:text-secondary">Leadership Academy</div>
                  <div className="text-sm text-base-content/60 mt-1">Developing next-gen tech leaders</div>
                </div>
              </a>
            </div>

            {/* Innovation & Incubation */}
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-base-content/90 mb-4 uppercase tracking-wide">Innovation & Incubation</h4>
              
              <a href="#innovation-labs" className="group flex items-start p-3 rounded-xl hover:bg-base-200/50 transition-all duration-200">
                <div className="w-8 h-8 bg-orange-50 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-base-content group-hover:text-secondary">Innovation Labs</div>
                  <div className="text-sm text-base-content/60 mt-1">R&D spaces for breakthrough solutions</div>
                </div>
              </a>

              <a href="#startup-incubator" className="group flex items-start p-3 rounded-xl hover:bg-base-200/50 transition-all duration-200">
                <div className="w-8 h-8 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-base-content group-hover:text-secondary">Startup Incubator</div>
                  <div className="text-sm text-base-content/60 mt-1">Supporting early-stage tech ventures</div>
                </div>
              </a>

              <a href="#food-program" className="group flex items-start p-3 rounded-xl hover:bg-base-200/50 transition-all duration-200">
                <div className="w-8 h-8 bg-pink-50 dark:bg-pink-900/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-base-content group-hover:text-secondary">Food Program</div>
                  <div className="text-sm text-base-content/60 mt-1">AgriTech solutions for food security</div>
                </div>
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-8 pt-6 border-t border-base-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-base-content">Ready to get started?</p>
                <p className="text-xs text-base-content/60 mt-1">Join thousands of professionals already using our programs</p>
              </div>
              <div className="flex space-x-3">
                <a href="#programs" className="btn btn-outline btn-sm rounded-lg">
                  View All Programs
                </a>
                              <Link href="/programs" className="btn btn-secondary btn-sm rounded-lg">
                View All Programs
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}