'use client';

import { Nav } from '@/components/nutriflow/Nav';
import { TrendingUp, Award, Lightbulb, Calendar, Target } from 'lucide-react';

export default function InsightsPage() {
  const weeklyData = [
    { day: 'Mon', calories: 2100, protein: 110, carbs: 250, fat: 70 },
    { day: 'Tue', calories: 2000, protein: 105, carbs: 240, fat: 68 },
    { day: 'Wed', calories: 2200, protein: 115, carbs: 260, fat: 75 },
    { day: 'Thu', calories: 2050, protein: 108, carbs: 245, fat: 70 },
    { day: 'Fri', calories: 2150, protein: 112, carbs: 255, fat: 72 },
    { day: 'Sat', calories: 2300, protein: 120, carbs: 270, fat: 78 },
    { day: 'Sun', calories: 2000, protein: 105, carbs: 240, fat: 68 },
  ];

  const maxCalories = Math.max(...weeklyData.map(d => d.calories));

  const achievements = [
    { title: '7-Day Tracking Streak', icon: '🔥', color: 'bg-[hsl(var(--color-orange))]' },
    { title: 'Protein Goal Master', icon: '💪', color: 'bg-primary' },
    { title: 'Hydration Hero', icon: '💧', color: 'bg-[hsl(var(--color-teal))]' },
    { title: 'Mindful Eater', icon: '🧘', color: 'bg-secondary' },
  ];

  const insights = [
    {
      type: 'success',
      title: 'Great Protein Intake!',
      description: 'You\'ve consistently hit your protein goals this week. Keep it up!',
      icon: TrendingUp
    },
    {
      type: 'suggestion',
      title: 'Increase Omega-3',
      description: 'Consider adding more fatty fish or nuts to boost your omega-3 intake.',
      icon: Lightbulb
    },
    {
      type: 'info',
      title: 'Energy Peak Detected',
      description: 'Your energy levels are highest around 2 PM. Schedule important tasks then!',
      icon: Target
    },
  ];

  const topNutrients = [
    { name: 'Vitamin C', source: 'Citrus Fruits', percentage: 145, color: 'bg-[hsl(var(--color-orange))]' },
    { name: 'Protein', source: 'Chicken & Fish', percentage: 120, color: 'bg-primary' },
    { name: 'Fiber', source: 'Whole Grains', percentage: 95, color: 'bg-secondary' },
    { name: 'Iron', source: 'Spinach', percentage: 88, color: 'bg-[hsl(var(--color-teal))]' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Insights & Trends</h1>
          <p className="text-muted-foreground">Discover patterns in your health journey</p>
        </div>

        {/* Weekly Overview Chart */}
        <div className="bg-card rounded-2xl p-6 shadow mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Weekly Nutrition Trends</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
                Week
              </button>
              <button className="px-4 py-2 bg-muted text-muted-foreground rounded-lg text-sm font-medium hover:bg-muted/80">
                Month
              </button>
              <button className="px-4 py-2 bg-muted text-muted-foreground rounded-lg text-sm font-medium hover:bg-muted/80">
                Year
              </button>
            </div>
          </div>

          <div className="h-64 flex items-end justify-between gap-2">
            {weeklyData.map((day, idx) => {
              const height = (day.calories / maxCalories) * 100;
              return (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-foreground text-background text-xs px-2 py-1 rounded">
                    {day.calories} cal
                  </div>
                  <div
                    className="w-full bg-primary rounded-t-lg transition-all hover:bg-primary/80 cursor-pointer"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-sm font-medium text-muted-foreground">{day.day}</span>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">2,114</p>
              <p className="text-sm text-muted-foreground">Avg Calories</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[hsl(var(--color-orange))]">110g</p>
              <p className="text-sm text-muted-foreground">Avg Protein</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-secondary">71g</p>
              <p className="text-sm text-muted-foreground">Avg Fats</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Personalized Insights */}
          <div className="bg-card rounded-2xl p-6 shadow">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[hsl(var(--color-orange))]" />
              Personalized Insights
            </h2>

            <div className="space-y-4">
              {insights.map((insight, idx) => {
                const Icon = insight.icon;
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border ${
                      insight.type === 'success'
                        ? 'border-primary/20 bg-primary/5'
                        : insight.type === 'suggestion'
                        ? 'border-[hsl(var(--color-orange))]/20 bg-[hsl(var(--color-orange))]/5'
                        : 'border-border bg-muted/30'
                    }`}
                  >
                    <div className="flex gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          insight.type === 'success'
                            ? 'bg-primary/10'
                            : insight.type === 'suggestion'
                            ? 'bg-[hsl(var(--color-orange))]/10'
                            : 'bg-muted'
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${
                            insight.type === 'success'
                              ? 'text-primary'
                              : insight.type === 'suggestion'
                              ? 'text-[hsl(var(--color-orange))]'
                              : 'text-muted-foreground'
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{insight.title}</h3>
                        <p className="text-sm text-muted-foreground">{insight.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Achievement Badges */}
          <div className="bg-card rounded-2xl p-6 shadow">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-[hsl(var(--color-orange))]" />
              Achievement Badges
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer text-center"
                >
                  <div className={`w-16 h-16 rounded-full ${achievement.color} flex items-center justify-center text-3xl mx-auto mb-3 shadow-lg`}>
                    {achievement.icon}
                  </div>
                  <h3 className="font-semibold text-sm">{achievement.title}</h3>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-3">
                <Calendar className="w-8 h-8 text-primary" />
                <div>
                  <p className="font-semibold">7-Day Streak Active!</p>
                  <p className="text-sm text-muted-foreground">Keep logging to maintain your streak</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Nutrient Sources */}
        <div className="bg-card rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-6">Top Nutrient Sources</h2>

          <div className="space-y-4">
            {topNutrients.map((nutrient, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="font-semibold">{nutrient.name}</span>
                      <span className="text-sm text-muted-foreground ml-2">from {nutrient.source}</span>
                    </div>
                    <span className="text-sm font-semibold">{nutrient.percentage}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${nutrient.color} rounded-full transition-all`}
                      style={{ width: `${Math.min(nutrient.percentage, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-muted">
            <p className="text-sm text-muted-foreground">
              <strong>Tip:</strong> You're exceeding your daily goals for Vitamin C and Protein. Consider balancing with more fiber-rich foods to improve digestion.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
