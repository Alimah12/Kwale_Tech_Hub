import Header from '@/components/Header'
import FuturisticHero from '@/components/FuturisticHero'
import Link from 'next/link'

export default function Home() {
  const stats = [
    { number: '7,000+', label: 'Youth Graduates', icon: '🎓' },
    { number: '600+', label: 'Annual AgriTech Beneficiaries', icon: '🌱' },
    { number: '500+', label: 'Climate Justice Youth', icon: '🌍' },
    { number: '5+', label: 'Strategic Partners', icon: '🤝' }
  ]

  const programs = [
    {
      title: 'Education & Innovation',
      description: 'Digital skills training from basic computer literacy to advanced web development',
      icon: '💻',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Food Security (AgriTech)',
      description: 'Crop monitoring apps and e-marketplace training for rural farmers',
      icon: '🌾',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Climate Justice',
      description: 'Environmental monitoring tools and community weather-alert systems',
      icon: '🌍',
      color: 'from-teal-500 to-green-600'
    },
    {
      title: 'Governance & Leadership',
      description: 'Civic technology and leadership development for transparent communities',
      icon: '🏛️',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Peacebuilding',
      description: 'Digital peace platforms and mediation workshops for social cohesion',
      icon: '🕊️',
      color: 'from-rose-500 to-pink-500'
    },
    {
      title: 'Getting Connected',
      description: 'Foundation course in digital tools and entrepreneurship for beginners',
      icon: '🚀',
      color: 'from-orange-500 to-red-500'
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

  const partners = [
    'Nexttabsolution',
    'Ukulima Eco Hub',
    'Jamii Action Centre',
    'County Government of Kwale',
    'Government of Kenya'
  ]

  const newsItems = [
    {
      title: 'New AgriTech Program Launches in Rural Kwale',
      excerpt: 'Empowering 200+ farmers with digital tools for better crop management and market access.',
      date: 'October 28, 2025',
      category: 'Programs'
    },
    {
      title: 'KwaleHub Graduates 150 Youth in Digital Skills',
      excerpt: 'Latest cohort of digital skills graduates ready to join the workforce with ICT competencies.',
      date: 'October 25, 2025',
      category: 'Success Stories'
    },
    {
      title: 'Climate Justice Initiative Expands to Shimba Hills',
      excerpt: 'Environmental monitoring program now covering wider area with youth-led climate action.',
      date: 'October 22, 2025',
      category: 'Climate'
    }
  ]

  return (
    <main className="min-h-screen bg-base-100">
      <Header />
      <FuturisticHero />
      
      {/* Impact Stats Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-6">Our Impact in Numbers</h2>
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

      {/* Programs Overview Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-6">Our Programs & Initiatives</h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Comprehensive training programs designed to empower youth with digital skills and technology solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="group bg-base-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center text-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold text-base-content mb-4">{program.title}</h3>
                <p className="text-base-content/70 leading-relaxed mb-6">{program.description}</p>
                <Link href="/programs" className="text-primary hover:text-secondary font-medium transition-colors duration-300">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/programs" className="btn btn-primary btn-lg rounded-2xl px-8">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-6">What Our Community Says</h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Hear from our program graduates and beneficiaries about their transformation journey
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-base-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
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

      {/* Latest News Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-6">Latest News & Updates</h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Stay updated with our latest programs, success stories, and community impact
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <article key={index} className="bg-base-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-4xl">📰</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                    <span className="text-sm text-base-content/60">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-base-content mb-3 hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-base-content/70 leading-relaxed mb-4">{item.excerpt}</p>
                  <Link href="/blog" className="text-primary hover:text-secondary font-medium transition-colors duration-300">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/blog" className="btn btn-outline btn-primary rounded-2xl px-8">
              View All News
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-6">Our Partners</h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Working together with amazing organizations to create lasting impact
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-base-200 rounded-2xl p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center text-white text-2xl mb-3 mx-auto">
                    🏢
                  </div>
                  <p className="text-sm font-medium text-base-content">{partner}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 7,000+ youth who have already transformed their lives through KwaleHub programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs" className="btn btn-white text-primary rounded-2xl font-semibold px-8 py-4 hover:shadow-lg transition-all duration-300">
              Explore Programs
            </Link>
            <Link href="/contact" className="btn btn-outline border-white text-white rounded-2xl font-semibold px-8 py-4 hover:bg-white hover:text-primary transition-all duration-300">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}