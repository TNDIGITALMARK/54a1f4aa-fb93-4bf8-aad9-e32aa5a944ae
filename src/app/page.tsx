import Link from 'next/link';
import { Activity, TrendingUp, Utensils } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-primary">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Activity className="w-6 h-6" />
              <span className="font-bold text-lg">NUTRIFLOW</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Holistic Health,
            <br />
            Simplified
          </h1>

          <p className="text-xl md:text-2xl mb-4 text-white/90">
            Track your nutrition, mood, and
          </p>
          <p className="text-xl md:text-2xl mb-12 text-white/90">
            wellness journey in one place
          </p>

          <Link
            href="/dashboard"
            className="inline-block bg-white text-primary hover:bg-white/95 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Get Started Today
          </Link>

          <div className="grid md:grid-cols-3 gap-6 mt-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Utensils className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Daily Dashboard</h3>
              <p className="text-white/80">Track meals, nutrition, and wellness metrics</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Activity className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Food Logging</h3>
              <p className="text-white/80">Easy meal tracking with smart suggestions</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <TrendingUp className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Insights & Trends</h3>
              <p className="text-white/80">Discover patterns in your health journey</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}