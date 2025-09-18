import React from 'react';
import { BarChart3, Home, Settings, Menu } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background-DEFAULT">
      {/* Header */}
      <header className="bg-background-secondary border-b border-border-DEFAULT">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-primary-800 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <h1 className="text-xl font-bold text-text-primary">Sales Dashboard</h1>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-text-secondary hover:text-text-primary transition-colors">
                <Settings className="h-5 w-5" />
              </button>
              <button className="p-2 text-text-secondary hover:text-text-primary transition-colors md:hidden">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-background-secondary border-b border-border-DEFAULT">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <a
              href="#"
              className="border-b-2 border-primary-800 text-primary-800 py-4 px-1 text-sm font-medium"
            >
              <div className="flex items-center space-x-2">
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </div>
            </a>
            <a
              href="#"
              className="border-b-2 border-transparent text-text-secondary hover:text-text-primary hover:border-border-hover py-4 px-1 text-sm font-medium transition-colors"
            >
              Analytics
            </a>
            <a
              href="#"
              className="border-b-2 border-transparent text-text-secondary hover:text-text-primary hover:border-border-hover py-4 px-1 text-sm font-medium transition-colors"
            >
              Reports
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-background-secondary border-t border-border-DEFAULT mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <p className="text-text-muted text-sm">
              © 2024 CrimsonDash Sales Dashboard. Built with Next.js 15 & TypeScript.
            </p>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">
                Documentation
              </a>
              <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">
                Support
              </a>
              <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};