import React from 'react';
import Link from 'next/link';
import { BarChart3, TrendingUp, Target, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background-DEFAULT">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-primary-800 rounded-full shadow-glow-red animate-pulse-glow">
                <BarChart3 className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6 animate-fade-in">
              Futuristic Sales
              <span className="block text-primary-800">Dashboard</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto animate-slide-up">
              Experience the future of data visualization with our cutting-edge sales analytics platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link 
                href="/dashboard" 
                className="inline-flex items-center px-8 py-4 bg-primary-800 hover:bg-primary-700 text-white font-medium rounded-lg shadow-glow-red hover:shadow-glow-red-lg transition-all duration-200 group"
              >
                View Dashboard
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="https://github.com/yourusername/futuristic-sales-dashboard" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white font-medium rounded-lg transition-all duration-200"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Advanced Analytics Features
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Built with modern technologies and atomic design principles for scalable, maintainable code
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background-tertiary p-8 rounded-xl border border-border-DEFAULT hover:border-primary-800 transition-colors group">
              <div className="p-3 bg-primary-800 bg-opacity-20 rounded-lg w-fit mb-4 group-hover:bg-opacity-30 transition-colors">
                <BarChart3 className="h-8 w-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Interactive Charts</h3>
              <p className="text-text-secondary">
                Multiple chart types including bar, line, and pie charts with smooth animations and hover effects
              </p>
            </div>

            <div className="bg-background-tertiary p-8 rounded-xl border border-border-DEFAULT hover:border-primary-800 transition-colors group">
              <div className="p-3 bg-primary-800 bg-opacity-20 rounded-lg w-fit mb-4 group-hover:bg-opacity-30 transition-colors">
                <TrendingUp className="h-8 w-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Real-time Filtering</h3>
              <p className="text-text-secondary">
                Custom sales threshold filters that update charts in real-time for dynamic data exploration
              </p>
            </div>

            <div className="bg-background-tertiary p-8 rounded-xl border border-border-DEFAULT hover:border-primary-800 transition-colors group">
              <div className="p-3 bg-primary-800 bg-opacity-20 rounded-lg w-fit mb-4 group-hover:bg-opacity-30 transition-colors">
                <Target className="h-8 w-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Performance Metrics</h3>
              <p className="text-text-secondary">
                Comprehensive KPI tracking with year-over-year growth analysis and trend indicators
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Built with Modern Technologies
            </h2>
            <p className="text-text-secondary text-lg">
              Leveraging the latest web technologies for optimal performance and developer experience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Next.js 15', desc: 'App Router' },
              { name: 'TypeScript', desc: 'Type Safety' },
              { name: 'Tailwind CSS', desc: 'Styling' },
              { name: 'Recharts', desc: 'Visualization' },
            ].map((tech, index) => (
              <div key={index} className="text-center p-6 bg-background-secondary rounded-xl border border-border-DEFAULT">
                <h3 className="font-semibold text-text-primary mb-2">{tech.name}</h3>
                <p className="text-text-muted text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-background-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Ready to Explore Your Data?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Dive into the interactive dashboard and discover insights from your sales data
          </p>
          <Link 
            href="/dashboard" 
            className="inline-flex items-center px-8 py-4 bg-primary-800 hover:bg-primary-700 text-white font-medium rounded-lg shadow-glow-red hover:shadow-glow-red-lg transition-all duration-200 group text-lg"
          >
            Launch Dashboard
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}