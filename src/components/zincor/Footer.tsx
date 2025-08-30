import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const footerSections = [
  {
    title: 'Product',
    links: [
      { label: 'Platform', href: '#' },
      { label: 'APIs', href: '#' },
      { label: 'Infrastructure', href: '#' },
      { label: 'Security', href: '#' },
      { label: 'Pricing', href: '#' }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Startups', href: '#' },
      { label: 'Enterprise', href: '#' },
      { label: 'E-commerce', href: '#' },
      { label: 'SaaS', href: '#' },
      { label: 'Mobile Apps', href: '#' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Tutorials', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Community', href: '#' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Status', href: '#' }
    ]
  }
];

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' }
];

export const Footer = () => {
  return (
    <footer className="bg-surface-2 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">Z</span>
              </div>
              <span className="font-semibold text-xl text-foreground">ZINCOR</span>
            </div>
            <p className="text-text-secondary mb-6 max-w-sm leading-relaxed">
              The unified platform for building, scaling, and shipping modern applications. 
              Trusted by thousands of developers worldwide.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-background hover:bg-surface-1 border border-border text-text-secondary hover:text-foreground transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-text-secondary hover:text-foreground transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Stay updated</h3>
              <p className="text-text-secondary text-sm">Get the latest updates, features, and developer resources.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-text-secondary">
          <p>&copy; 2024 ZINCOR. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};