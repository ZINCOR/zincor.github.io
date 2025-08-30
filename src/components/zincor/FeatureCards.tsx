import { Shield, Zap, Globe, Code, Database, Gauge } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'End-to-end encryption, SOC 2 compliance, and zero-trust architecture built-in.',
    color: 'text-primary'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Edge computing with sub-50ms latency across 15+ global regions.',
    color: 'text-accent-light'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Auto-scaling infrastructure that handles millions of requests seamlessly.',
    color: 'text-success'
  },
  {
    icon: Code,
    title: 'Developer First',
    description: 'Intuitive APIs, comprehensive docs, and tools that developers love.',
    color: 'text-primary'
  },
  {
    icon: Database,
    title: 'Smart Data Layer',
    description: 'AI-optimized databases with intelligent caching and real-time sync.',
    color: 'text-accent-light'
  },
  {
    icon: Gauge,
    title: 'Predictable Performance',
    description: 'Guaranteed SLAs with transparent monitoring and alerting systems.',
    color: 'text-success'
  }
];

export const FeatureCards = () => {
  return (
    <section className="py-16 md:py-24 bg-surface-1">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Everything you need to{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">build better</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From idea to production in minutes. ZINCOR provides the complete platform 
            for modern application development.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="group bg-card border border-border rounded-2xl p-6 shadow-elevation-sm hover:shadow-elevation-md transition-all duration-200 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-surface-1 group-hover:bg-surface-2 transition-colors duration-200`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Ready to get started?
          </div>
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Join thousands of developers already building with ZINCOR
          </h3>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            Start building your next project today with our free tier. 
            No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium shadow-elevation-md hover:shadow-elevation-lg transition-all duration-200">
              Start Building
            </button>
            <button className="border border-border-strong bg-background hover:bg-surface-1 text-foreground px-6 py-3 rounded-lg font-medium shadow-elevation-sm hover:shadow-elevation-md transition-all duration-200">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};