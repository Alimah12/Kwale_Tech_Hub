import Header from '@/components/Header'
import Image from 'next/image'

export default function AboutPage() {
  const stats = [
    { number: '7,000+', label: 'Youth Graduates', icon: '🎓' },
    { number: '600+', label: 'Annual AgriTech Beneficiaries', icon: '🌱' },
    { number: '500+', label: 'Climate Justice Youth', icon: '🌍' },
    { number: '5+', label: 'Strategic Partners', icon: '🤝' }
  ]

  const strategicPillars = [
    {
      title: 'Education & Innovation',
      description: 'Building the next generation of tech leaders through progressive ICT programs and digital skills development.',
      icon: '💡',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Food Security',
      description: 'Driving agricultural transformation through AgriTech solutions and e-marketplace training for rural farmers.',
      icon: '🌾',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Governance & Leadership',
      description: 'Building transparent and accountable communities through civic tech and leadership development initiatives.',
      icon: '🏛️',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Climate Justice',
      description: 'Empowering youth for a sustainable future through environmental monitoring and advocacy tools.',
      icon: '🌱',
      color: 'from-teal-500 to-green-600'
    },
    {
      title: 'Peacebuilding',
      description: 'Fostering social cohesion and dialogue through digital peace platforms and mediation workshops.',
      icon: '🕊️',
      color: 'from-rose-500 to-pink-500'
    }
  ]

  return (
    <main className="min-h-screen bg-base-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-3"></div>
                <span className="text-sm font-medium text-primary">Youth Innovation Hub</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Empowering
                </span>
                <br />
                <span className="text-base-content">Youth Through</span>
                <br />
                <span className="bg-gradient-to-r from-accent via-info to-primary bg-clip-text text-transparent">
                  Technology
                </span>
              </h1>
              
              <p className="text-xl text-base-content/80 leading-relaxed">
                Bridging the digital divide in Kwale County and beyond, fostering skills, 
                entrepreneurship, and community transformation for youth aged 16-34.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-4xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-base-content">KwaleHub Vision</h3>
                  <p className="text-base-content/70 px-6">Digital transformation through youth empowerment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-6">Our Impact</h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Transforming lives through technology and innovation across Kwale County
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-base-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-base-content/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-6">Our Strategic Pillars</h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Five core areas driving youth empowerment and community transformation in Kwale County
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategicPillars.map((pillar, index) => (
              <div key={index} className="group bg-base-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${pillar.color} rounded-2xl flex items-center justify-center text-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-base-content mb-4">{pillar.title}</h3>
                <p className="text-base-content/70 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-base-content">Our Mission</h2>
              <p className="text-xl text-base-content/80 leading-relaxed">
                To empower youth aged 16-34 in Kwale County through innovative ICT programs, 
                digital skills development, and technology-driven solutions that address local 
                challenges in agriculture, governance, climate change, and peacebuilding.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-base-content/80">Bridge the digital divide in rural coastal Kenya</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-base-content/80">Foster entrepreneurship and innovation</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-base-content/80">Build sustainable community solutions</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-base-content">Our Vision</h2>
              <p className="text-xl text-base-content/80 leading-relaxed">
                A digitally empowered Kwale County where every young person has the skills, 
                tools, and opportunities to thrive in the digital economy while contributing 
                to sustainable community development.
              </p>
              
              <div className="bg-base-100 rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-base-content mb-4">Key Focus Areas:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm text-base-content/80">Digital Literacy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    <span className="text-sm text-base-content/80">AgriTech Solutions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span className="text-sm text-base-content/80">Climate Action</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-info rounded-full"></span>
                    <span className="text-sm text-base-content/80">Peace Building</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 7,000+ youth who have already transformed their lives through KwaleHub
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary rounded-2xl font-semibold hover:shadow-lg transition-all duration-300">
              Join Our Community
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-primary transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}