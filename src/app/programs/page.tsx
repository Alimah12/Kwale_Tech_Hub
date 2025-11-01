import Header from '@/components/Header'

export default function ProgramsPage() {
  const programs = [
    {
      title: 'Education & Innovation',
      subtitle: 'Digital Skills Training',
      description: 'Progressive tracks from computer literacy to advanced web design and mobile app development.',
      features: [
        'Computer Literacy Foundations',
        'Web Design & Development',
        'Mobile App Development',
        'Digital Marketing Skills',
        'Entrepreneurship Training'
      ],
      type: 'Ongoing Program',
      location: 'Kwale County, Kenya',
      price: 'Free',
      color: 'from-blue-500 to-cyan-500',
      icon: '💻'
    },
    {
      title: 'Food Security',
      subtitle: 'AgriTech Solutions',
      description: 'Crop monitoring applications and SMS price-alert systems for farmers to connect with urban markets.',
      features: [
        'Crop Monitoring Apps',
        'SMS Price Alert Systems',
        'E-marketplace Training',
        'Farm Management Software',
        'Market Linkage Programs'
      ],
      type: 'Annual Program',
      location: 'Rural Kwale County',
      price: 'Free',
      color: 'from-green-500 to-emerald-500',
      icon: '🌾'
    },
    {
      title: 'Climate Justice',
      subtitle: 'Environmental Innovation',
      description: 'Environmental monitoring tools and community weather-alert apps for climate resilience.',
      features: [
        'Environmental Monitoring Tools',
        'Weather Alert Systems',
        'Climate Data Analysis',
        'Community Advocacy Training',
        'Sustainable Tech Solutions'
      ],
      type: 'Ongoing Initiative',
      location: 'Shimba Hills & Coast',
      price: 'Free',
      color: 'from-teal-500 to-green-600',
      icon: '🌍'
    },
    {
      title: 'Governance & Leadership',
      subtitle: 'Civic Tech Training',
      description: 'Building transparent and accountable communities through civic technology and leadership development.',
      features: [
        'Civic Technology Tools',
        'Leadership Development',
        'Community Organizing',
        'Digital Governance Systems',
        'Transparency Platforms'
      ],
      type: 'Quarterly Program',
      location: 'Kwale County',
      price: 'Free',
      color: 'from-purple-500 to-indigo-500',
      icon: '🏛️'
    },
    {
      title: 'Peacebuilding',
      subtitle: 'Digital Peace Platforms',
      description: 'Fostering social cohesion and dialogue through digital peace platforms and mediation workshops.',
      features: [
        'Digital Peace Platforms',
        'Mediation Workshops',
        'Conflict Resolution Training',
        'Community Dialogue Tools',
        'Peace Ambassador Program'
      ],
      type: 'Ongoing Program',
      location: 'Kwale County',
      price: 'Free',
      color: 'from-rose-500 to-pink-500',
      icon: '🕊️'
    },
    {
      title: 'Getting Connected Course',
      subtitle: 'Foundation Program',
      description: 'Foundation in digital tools and entrepreneurship for youth entering the digital economy.',
      features: [
        'Basic Computer Skills',
        'Internet Literacy',
        'Digital Communication',
        'Online Safety & Security',
        'Entrepreneurship Basics'
      ],
      type: 'Ongoing Program',
      location: 'KwaleHub Center',
      price: 'Free',
      color: 'from-orange-500 to-red-500',
      icon: '🚀'
    }
  ]

  const testimonials = [
    {
      name: 'Amina Hassan',
      role: 'Digital Skills Graduate',
      message: "KwaleHub's ICT training helped me secure a job within 6 months. The skills I learned here changed my life!",
      program: 'Education & Innovation'
    },
    {
      name: 'John Mwangi',
      role: 'AgriTech Beneficiary',
      message: "The AgriTech program helped me increase my farm income by 12%. Now I can connect with urban buyers online!",
      program: 'Food Security'
    },
    {
      name: 'Fatima Ali',
      role: 'Peace Ambassador',
      message: "As a peace ambassador, I've helped reduce local conflicts by 10%. Digital peace platforms work!",
      program: 'Peacebuilding'
    }
  ]

  return (
    <main className="min-h-screen bg-base-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-8">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-3"></div>
              <span className="text-sm font-medium text-primary">Transforming Lives Through Technology</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Our Programs
              </span>
              <br />
              <span className="text-base-content">& Initiatives</span>
            </h1>
            
            <p className="text-xl text-base-content/80 leading-relaxed max-w-3xl mx-auto">
              Comprehensive training programs designed to empower youth aged 16-34 with digital skills, 
              entrepreneurship knowledge, and technology solutions for community challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {programs.map((program, index) => (
              <div key={index} className="group bg-base-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-transform duration-300`}>
                    {program.icon}
                  </div>
                  <div className="text-right">
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {program.price}
                    </div>
                    <div className="text-sm text-base-content/60">{program.type}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-base-content mb-2">{program.title}</h3>
                <h4 className="text-lg font-semibold text-primary mb-4">{program.subtitle}</h4>
                <p className="text-base-content/70 leading-relaxed mb-6">{program.description}</p>
                
                <div className="mb-6">
                  <h5 className="font-semibold text-base-content mb-3">Program Features:</h5>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-base-content/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-base-300">
                  <div className="text-sm text-base-content/60">
                    📍 {program.location}
                  </div>
                  <button className={`px-6 py-3 bg-gradient-to-r ${program.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}>
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-6">How to Join Our Programs</h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Simple steps to start your journey with KwaleHub
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Apply Online', desc: 'Fill out our simple application form', icon: '📝' },
              { step: '02', title: 'Assessment', desc: 'Basic skills evaluation and interview', icon: '💭' },
              { step: '03', title: 'Enrollment', desc: 'Get enrolled in your chosen program', icon: '✅' },
              { step: '04', title: 'Start Learning', desc: 'Begin your transformation journey', icon: '🚀' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-2xl text-white mx-auto mb-6 shadow-lg">
                  {item.icon}
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{item.step}</div>
                <h3 className="text-xl font-semibold text-base-content mb-3">{item.title}</h3>
                <p className="text-base-content/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-6">Success Stories</h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Hear from our program graduates and beneficiaries
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-base-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-6">💬</div>
                <p className="text-base-content/80 italic mb-6 leading-relaxed">
                  "{testimonial.message}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-base-content">{testimonial.name}</div>
                    <div className="text-sm text-base-content/60">{testimonial.role}</div>
                    <div className="text-xs text-primary">{testimonial.program}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of youth who have transformed their lives through our programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary rounded-2xl font-semibold hover:shadow-lg transition-all duration-300">
              Apply Now
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-primary transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}