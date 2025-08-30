import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import spaceBg from '@/assets/futuristic-ai-chip-circuit-board.jpg';

export const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Animated Space Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-background via-surface-1 to-surface-2"
          style={{
            backgroundImage: `url(${spaceBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="absolute inset-0 bg-background/60" />
        
        {/* Floating particles animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Now available: ZINCOR v2.0
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground mb-6">
              Build. Scale. Ship.{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                With ZINCOR.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-text-secondary max-w-xl mb-8 leading-relaxed">
              A unified, AI-ready platform for secure, high-throughput applications. 
              Ship faster with enterprise-grade infrastructure that scales with your ambitions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elevation-md hover:shadow-elevation-lg transition-all duration-200"
              >
                Launch Console
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-border-strong bg-background hover:bg-surface-1 text-foreground shadow-elevation-sm hover:shadow-elevation-md transition-all duration-200"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-2xl md:text-3xl font-semibold text-foreground">99.9%</div>
                <div className="text-sm text-text-secondary">Uptime SLA</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-semibold text-foreground">10k+</div>
                <div className="text-sm text-text-secondary">Developers</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-semibold text-foreground">5B+</div>
                <div className="text-sm text-text-secondary">API Calls/Day</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Product Preview */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              {/* Main Terminal/Code Block */}
              <div className="bg-card-elevated border border-border rounded-2xl shadow-elevation-lg overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-surface-1 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                    <div className="w-3 h-3 rounded-full bg-warning"></div>
                    <div className="w-3 h-3 rounded-full bg-success"></div>
                  </div>
                  <div className="text-xs text-text-secondary ml-4">zincor-cli v2.0.1</div>
                </div>
                
                <div className="p-6 bg-surface-2/50">
                  <pre className="font-mono text-sm leading-relaxed text-foreground">
                    <code>{`$ zincor deploy --env production

⚡ Deploying to ZINCOR Cloud...
✓ Building application
✓ Optimizing bundle (2.1MB → 847KB)
✓ Running security scans
✓ Deploying to 15 regions
✓ Configuring auto-scaling

🚀 Deployed successfully in 42s
📍 https://app.zincor.dev
🔒 SSL certificate issued
📊 Monitoring enabled

Performance Metrics:
  - First Contentful Paint: 1.2s
  - Largest Contentful Paint: 1.8s
  - Time to Interactive: 2.1s
  - Core Web Vitals: All Green ✅`}
                    </code>
                  </pre>
                </div>
              </div>
              
              {/* Floating metrics card */}
              <div className="absolute -right-4 -bottom-4 bg-card border border-border rounded-xl shadow-elevation-md p-4 animate-scale-in" style={{ animationDelay: '600ms' }}>
                <div className="text-xs text-text-secondary mb-2">Real-time metrics</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-foreground">All systems operational</span>
                </div>
                <div className="text-xs text-text-secondary mt-1">Response time: 45ms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};