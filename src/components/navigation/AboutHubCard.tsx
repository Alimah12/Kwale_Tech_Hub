'use client'

import Link from 'next/link'

export default function AboutHubCard() {
  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="flex items-center px-4 py-2 text-sm font-medium text-base-content hover:text-primary transition-colors duration-200 cursor-pointer">
        <span>About Hub</span>
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      <div tabIndex={0} className="dropdown-content z-[1] mt-2 w-[680px] bg-base-100 rounded-2xl shadow-2xl border border-base-200 overflow-hidden">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-base-content">About Kwale Tech Hub</h3>
              <p className="text-sm text-base-content/70 mt-1">Learn about our mission, team, and impact</p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-2 gap-8">
            {/* Organization */}
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-base-content/90 mb-4 uppercase tracking-wide">Organization</h4>
              <a href="#history" className="group flex items-start p-3 rounded-xl hover:bg-base-200/50 transition-all duration-200">
                <div className="w-8 h-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-base-content group-hover:text-primary">Our History</div>
                  <div className="text-sm text-base-content/60 mt-1">Journey from inception to impact</div>
                </div>
              </a>

              <a href="#mission" className="group flex items-start p-3 rounded-xl hover:bg-base-200/50 transition-all duration-200">
                <div className="w-8 h-8 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-base-content group-hover:text-primary">Mission & Vision</div>
                  <div className="text-sm text-base-content/60 mt-1">Our commitment to digital transformation</div>
                </div>
              </a>

              <a href="#governance" className="group flex items-start p-3 rounded-xl hover:bg-base-200/50 transition-all duration-200">
                <div className="w-8 h-8 bg-purple-50 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-base-content group-hover:text-primary">Governance</div>
                  <div className="text-sm text-base-content/60 mt-1">Leadership structure and policies</div>
                </div>
              </a>
            </div>

            {/* People & Partnerships */}
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-base-content/90 mb-4 uppercase tracking-wide">People & Partnerships</h4>
              <a href="#team" className="group flex items-start p-3 rounded-xl hover:bg-base-200/50 transition-all duration-200">
                <div className="w-8 h-8 bg-orange-50 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-base-content group-hover:text-primary">Our Team</div>
                  <div className="text-sm text-base-content/60 mt-1">Meet the innovators driving change</div>
                </div>
              </a>

              <a href="#partners" className="group flex items-start p-3 rounded-xl hover:bg-base-200/50 transition-all duration-200">
                <div className="w-8 h-8 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-base-content group-hover:text-primary">Partners</div>
                  <div className="text-sm text-base-content/60 mt-1">Strategic collaborations and alliances</div>
                </div>
              </a>

              <a href="#careers" className="group flex items-start p-3 rounded-xl hover:bg-base-200/50 transition-all duration-200">
                <div className="w-8 h-8 bg-pink-50 dark:bg-pink-900/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-base-content group-hover:text-primary">Join Our Team</div>
                  <div className="text-sm text-base-content/60 mt-1">Career opportunities and openings</div>
                </div>
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-8 pt-6 border-t border-base-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-base-content">Ready to learn more?</p>
                <p className="text-xs text-base-content/60 mt-1">Discover how we're transforming Kwale County through technology</p>
              </div>
              <Link href="/about" className="btn btn-primary btn-sm rounded-lg">
                Explore Our Story
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}