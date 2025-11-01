import Header from '@/components/Header'

export default function ContactPage() {
  const contactInfo = [
    {
      title: 'Email',
      value: 'info@kwalehub.org',
      icon: '📧',
      link: 'mailto:info@kwalehub.org'
    },
    {
      title: 'Phone',
      value: '0700347055',
      icon: '📱',
      link: 'tel:0700347055'
    },
    {
      title: 'Location',
      value: 'Kwale County, Kenya',
      icon: '📍',
      link: '#'
    },
    {
      title: 'Office Hours',
      value: 'Mon - Fri: 8AM - 5PM',
      icon: '🕒',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/kwalehub',
      icon: '📘',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Twitter/X',
      url: 'https://x.com/Kwaletechhub?t=Vt0viLFn49CPeRpmQVyh7w&s=09',
      icon: '🐦',
      color: 'from-sky-500 to-sky-600'
    },
    {
      name: 'Instagram',
      url: '#',
      icon: '📷',
      color: 'from-pink-500 to-purple-600'
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: '💼',
      color: 'from-blue-700 to-blue-800'
    }
  ]

  const officeLocations = [
    {
      name: 'Main Hub',
      address: 'Kwale Town Center',
      description: 'Our main innovation hub with full facilities',
      facilities: ['Computer Lab', 'Training Rooms', 'Co-working Space', 'Meeting Rooms']
    },
    {
      name: 'AgriTech Center',
      address: 'Rural Kwale County',
      description: 'Specialized center for agricultural technology programs',
      facilities: ['Demo Farm', 'Weather Station', 'Training Facilities', 'Equipment Storage']
    },
    {
      name: 'Coastal Outreach',
      address: 'Shimba Hills & Coast',
      description: 'Mobile outreach programs and community centers',
      facilities: ['Mobile Labs', 'Community Centers', 'Field Stations', 'Solar Charging']
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
              <span className="text-sm font-medium text-primary">Get In Touch</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Contact
              </span>
              <br />
              <span className="text-base-content">KwaleHub</span>
            </h1>
            
            <p className="text-xl text-base-content/80 leading-relaxed max-w-3xl mx-auto">
              Ready to join our community or partner with us? We'd love to hear from you. 
              Reach out to learn more about our programs or get involved.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center text-2xl text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-base-content mb-2">{info.title}</h3>
                {info.link.startsWith('mailto:') || info.link.startsWith('tel:') ? (
                  <a href={info.link} className="text-primary hover:text-secondary transition-colors duration-300">
                    {info.value}
                  </a>
                ) : (
                  <p className="text-base-content/70">{info.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-base-100 rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-base-content mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-base-content mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-base-content mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-base-content mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-base-content mb-2">Phone (Optional)</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+254 700 000 000"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-base-content mb-2">Subject</label>
                  <select className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>General Inquiry</option>
                    <option>Program Information</option>
                    <option>Partnership Opportunity</option>
                    <option>Volunteer Interest</option>
                    <option>Technical Support</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-base-content mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Map & Additional Info */}
            <div className="space-y-8">
              <div className="bg-base-100 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-base-content mb-6">Visit Our Hub</h3>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🗺️</div>
                    <p className="text-base-content/70">Interactive Map Coming Soon</p>
                    <p className="text-sm text-base-content/60 mt-2">Kwale County, Kenya</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-primary">📍</span>
                    <span className="text-base-content/80">Kwale Town Center, Kwale County</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary">🚌</span>
                    <span className="text-base-content/80">Accessible by public transport</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary">🅿️</span>
                    <span className="text-base-content/80">Free parking available</span>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="bg-base-100 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-base-content mb-6">Follow Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-4 bg-gradient-to-r ${social.color} rounded-xl text-white hover:shadow-lg transition-all duration-300`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                          {social.icon}
                        </span>
                        <span className="font-semibold">{social.name}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-6">Our Locations</h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Find us across Kwale County with multiple centers serving different communities
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {officeLocations.map((location, index) => (
              <div key={index} className="bg-base-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center text-white text-xl mb-6">
                  📍
                </div>
                <h3 className="text-xl font-bold text-base-content mb-2">{location.name}</h3>
                <p className="text-primary font-medium mb-3">{location.address}</p>
                <p className="text-base-content/70 mb-6">{location.description}</p>
                
                <div>
                  <h4 className="font-semibold text-base-content mb-3">Facilities:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {location.facilities.map((facility, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-base-content/80">{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Quick answers to common questions about KwaleHub
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Who can join KwaleHub programs?",
                answer: "Our programs are designed for youth aged 16-34 in Kwale County and surrounding areas. No prior technical experience is required for most programs."
              },
              {
                question: "Are the programs really free?",
                answer: "Yes, all our core programs are completely free thanks to partnerships with government and development organizations."
              },
              {
                question: "How long do the programs take?",
                answer: "Program duration varies from 2-week intensive courses to 6-month comprehensive programs. Each program page has specific details."
              },
              {
                question: "Do you provide certificates?",
                answer: "Yes, we provide certificates of completion for all our programs, and some offer industry-recognized certifications."
              },
              {
                question: "Can I visit before applying?",
                answer: "Absolutely! We encourage visits to our hubs. Contact us to schedule a tour and meet our team."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-base-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-base-content mb-3">{faq.question}</h3>
                <p className="text-base-content/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our community of innovators and change-makers in Kwale County
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary rounded-2xl font-semibold hover:shadow-lg transition-all duration-300">
              Join Our Community
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-primary transition-all duration-300">
              Schedule a Visit
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}