import { Nav } from '@/components/nutriflow/Nav';
import { ProgressRing } from '@/components/nutriflow/ProgressRing';
import { Droplet, TrendingUp, Weight, Smile, Frown, Meh, Moon, Zap, Activity } from 'lucide-react';
import Image from 'next/image';

export default function DashboardPage() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const meals = [
    { name: 'Overnight Oats with Berries', calories: 387, time: 'Breakfast', image: '/generated/meal-oats.png' },
    { name: 'Quinoa Buddha Bowl', calories: 542, time: 'Lunch', image: '/generated/meal-buddha-bowl.png' },
    { name: 'Apple with Almond Butter', calories: 186, time: 'Snack', image: '/generated/meal-apple-almond.png' },
  ];

  const weeklyMeals = [
    '/generated/meal-buddha-bowl.png',
    '/generated/meal-salmon.png',
    '/generated/meal-yogurt.png',
    '/generated/meal-avocado-toast.png',
    '/generated/meal-smoothie-bowl.png',
    '/generated/meal-stir-fry.png',
    '/generated/meal-oats.png',
    '/generated/meal-apple-almond.png',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Daily Nutrition Breakdown</h1>
          <p className="text-muted-foreground">{today}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Nutrition Breakdown */}
          <div className="bg-card rounded-2xl p-6 shadow">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Daily Nutrition Breakdown</h2>
              <button className="text-primary hover:text-primary/80 transition-colors">
                <Activity className="w-5 h-5" />
              </button>
            </div>
            <div className="flex justify-around">
              <ProgressRing
                percentage={84}
                color="#FF8B3D"
                label="Protein"
                value="89g"
                target="120g"
              />
              <ProgressRing
                percentage={74}
                color="#5CAD7D"
                label="Fats"
                value="67g"
                target="73g"
              />
            </div>
          </div>

          {/* Weekly Meal Planner */}
          <div className="bg-card rounded-2xl p-6 shadow">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Weekly Meal Planner</h2>
              <button className="text-primary hover:text-primary/80 transition-colors">
                <TrendingUp className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {weeklyMeals.map((meal, idx) => (
                <div key={idx} className="relative aspect-square rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                  <Image
                    src={meal}
                    alt={`Meal ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Hydration Tracker */}
          <div className="bg-card rounded-2xl p-6 shadow">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Hydration Tracker</h2>
              <button className="text-primary hover:text-primary/80 transition-colors">
                <Droplet className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-10 h-16 rounded-lg ${
                      i < 6
                        ? 'bg-[hsl(var(--color-teal))]'
                        : 'bg-muted'
                    } transition-colors`}
                  />
                ))}
              </div>
              <div className="flex gap-4 items-center ml-6">
                <div className="flex flex-col items-center">
                  <Droplet className="w-8 h-8 text-[hsl(var(--color-teal))]" />
                  <span className="text-xs text-muted-foreground mt-1">Water</span>
                </div>
                <div className="flex flex-col items-center opacity-40">
                  <Droplet className="w-8 h-8 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground mt-1">Juice</span>
                </div>
                <div className="flex flex-col items-center opacity-40">
                  <Droplet className="w-8 h-8 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground mt-1">Coffee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mood & Energy */}
          <div className="bg-card rounded-2xl p-6 shadow">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Mood & Energy</h2>
              <button className="text-primary hover:text-primary/80 transition-colors">
                <Smile className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <button className="p-3 rounded-full hover:bg-muted transition-colors">
                  <Smile className="w-8 h-8 text-muted-foreground" />
                </button>
                <button className="p-3 rounded-full hover:bg-muted transition-colors">
                  <Meh className="w-8 h-8 text-muted-foreground" />
                </button>
                <button className="p-3 rounded-full hover:bg-muted transition-colors">
                  <Frown className="w-8 h-8 text-muted-foreground" />
                </button>
                <button className="p-3 rounded-full hover:bg-muted transition-colors">
                  <Smile className="w-8 h-8 text-muted-foreground" />
                </button>
                <button className="p-3 rounded-full bg-primary/10 ring-2 ring-primary">
                  <Smile className="w-8 h-8 text-primary" />
                </button>
              </div>
              <div className="flex gap-4 items-center ml-6">
                <div className="flex flex-col items-center">
                  <div className="text-2xl">😊</div>
                  <span className="text-xs text-muted-foreground mt-1">Feeling</span>
                </div>
                <div className="flex flex-col items-center">
                  <Zap className="w-8 h-8 text-[hsl(var(--color-orange))]" />
                  <span className="text-xs text-muted-foreground mt-1">Energized</span>
                </div>
                <div className="flex flex-col items-center opacity-40">
                  <Moon className="w-8 h-8 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground mt-1">Sleep</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Weight Log */}
          <div className="bg-card rounded-2xl p-6 shadow">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Weight Log</h2>
              <button className="text-primary hover:text-primary/80 transition-colors">
                <Weight className="w-5 h-5" />
              </button>
            </div>
            <div className="h-48 flex items-end justify-between gap-2">
              {[72, 71.8, 72.2, 71.5, 71.3].map((weight, idx) => {
                const height = ((weight - 70) / 3) * 100;
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                    <span className="text-xs text-muted-foreground">{weight}kg</span>
                    <div
                      className="w-full bg-primary rounded-t-lg transition-all"
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-xs text-muted-foreground">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'][idx]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Progress Trends */}
          <div className="bg-card rounded-2xl p-6 shadow">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Progress Trends</h2>
              <button className="text-primary hover:text-primary/80 transition-colors">
                <TrendingUp className="w-5 h-5" />
              </button>
            </div>
            <div className="h-48 flex items-end justify-between gap-2 relative">
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                <polyline
                  points="0,120 80,100 160,80 240,60 320,40"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  className="drop-shadow-sm"
                />
              </svg>
              <div className="flex w-full justify-between items-end" style={{ zIndex: 2 }}>
                {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((week, idx) => (
                  <span key={idx} className="text-xs text-muted-foreground">
                    {week}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
