import React from 'react';
import { ExternalLink, ChevronDown, Linkedin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">John Doe</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">Senior Software Engineer</p>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium flex items-center gap-2 mx-auto hover:bg-gray-100 transition-colors w-fit"
          >
            View LinkedIn <Linkedin size={18} />
          </a>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white" />
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <p className="text-gray-600 leading-relaxed mb-6">
              I'm a passionate software engineer with over 5 years of experience in building scalable web applications.
              My expertise includes React, TypeScript, and Node.js. I love creating elegant solutions to complex problems
              and am always eager to learn new technologies.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Education</h3>
                <p className="text-gray-600">
                  B.S. in Computer Science<br />
                  University of Technology<br />
                  2015 - 2019
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="space-y-8">
            {[
              {
                title: 'Senior Software Engineer',
                company: 'Tech Corp',
                period: '2020 - Present',
                description: 'Led development of microservices architecture, improving system scalability by 200%.'
              },
              {
                title: 'Software Engineer',
                company: 'StartUp Inc',
                period: '2018 - 2020',
                description: 'Developed and maintained multiple React applications with TypeScript.'
              }
            ].map((job, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-xl">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                  <span className="text-gray-500 text-sm">{job.period}</span>
                </div>
                <p className="text-gray-600">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'E-commerce Platform',
                description: 'Built a full-stack e-commerce platform using Next.js and Stripe.',
                link: '#'
              },
              {
                title: 'AI Chat Application',
                description: 'Developed a real-time chat application with AI-powered responses.',
                link: '#'
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-xl mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a 
                  href={project.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-300 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="#"
              className="bg-blue-600 px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;