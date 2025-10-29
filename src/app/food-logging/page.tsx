'use client';

import { Nav } from '@/components/nutriflow/Nav';
import { Search, Plus, Clock, Star, Barcode } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function FoodLoggingPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const recentFoods = [
    { name: 'Quinoa Buddha Bowl', calories: 542, protein: '18g', image: '/generated/meal-buddha-bowl.png' },
    { name: 'Overnight Oats', calories: 387, protein: '12g', image: '/generated/meal-oats.png' },
    { name: 'Grilled Salmon', calories: 456, protein: '42g', image: '/generated/meal-salmon.png' },
    { name: 'Greek Yogurt Parfait', calories: 285, protein: '20g', image: '/generated/meal-yogurt.png' },
    { name: 'Avocado Toast', calories: 320, protein: '14g', image: '/generated/meal-avocado-toast.png' },
    { name: 'Green Smoothie Bowl', calories: 295, protein: '15g', image: '/generated/meal-smoothie-bowl.png' },
  ];

  const popularMeals = [
    { name: 'Chicken Stir Fry', calories: 485, protein: '38g', carbs: '45g', fat: '16g', image: '/generated/meal-stir-fry.png' },
    { name: 'Salmon with Quinoa', calories: 520, protein: '42g', carbs: '38g', fat: '22g', image: '/generated/meal-salmon.png' },
    { name: 'Buddha Bowl', calories: 542, protein: '18g', carbs: '68g', fat: '24g', image: '/generated/meal-buddha-bowl.png' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Food Logging</h1>
          <p className="text-muted-foreground">Search and log your meals</p>
        </div>

        {/* Search Bar */}
        <div className="bg-card rounded-2xl p-6 shadow mb-6">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for foods (500,000+ items)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              />
            </div>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all flex items-center gap-2">
              <Barcode className="w-5 h-5" />
              Scan
            </button>
          </div>

          <div className="flex gap-2 mt-4">
            <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors">
              Breakfast
            </button>
            <button className="px-4 py-2 bg-muted text-muted-foreground rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors">
              Lunch
            </button>
            <button className="px-4 py-2 bg-muted text-muted-foreground rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors">
              Dinner
            </button>
            <button className="px-4 py-2 bg-muted text-muted-foreground rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors">
              Snacks
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Recent Foods */}
          <div className="bg-card rounded-2xl p-6 shadow">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Recent Foods
              </h2>
              <button className="text-sm text-primary hover:text-primary/80 font-medium">
                View All
              </button>
            </div>

            <div className="space-y-3">
              {recentFoods.map((food, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={food.image}
                      alt={food.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{food.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {food.calories} cal · {food.protein} protein
                    </p>
                  </div>
                  <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                    <Plus className="w-5 h-5 text-primary" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Meals */}
          <div className="bg-card rounded-2xl p-6 shadow">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Star className="w-5 h-5 text-[hsl(var(--color-orange))]" />
                Popular Meals
              </h2>
              <button className="text-sm text-primary hover:text-primary/80 font-medium">
                See More
              </button>
            </div>

            <div className="space-y-4">
              {popularMeals.map((meal, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={meal.image}
                        alt={meal.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{meal.name}</h3>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span>{meal.calories} cal</span>
                        <span>P: {meal.protein}</span>
                        <span>C: {meal.carbs}</span>
                        <span>F: {meal.fat}</span>
                      </div>
                    </div>
                    <button className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Add Section */}
        <div className="bg-card rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-6">Quick Add</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="p-6 rounded-xl border-2 border-dashed border-border hover:border-primary hover:bg-primary/5 transition-all flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Plus className="w-8 h-8 text-primary" />
              </div>
              <span className="font-semibold">Custom Meal</span>
              <span className="text-sm text-muted-foreground text-center">
                Enter nutrition info manually
              </span>
            </button>

            <button className="p-6 rounded-xl border-2 border-dashed border-border hover:border-primary hover:bg-primary/5 transition-all flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Barcode className="w-8 h-8 text-primary" />
              </div>
              <span className="font-semibold">Scan Barcode</span>
              <span className="text-sm text-muted-foreground text-center">
                Quick add packaged foods
              </span>
            </button>

            <button className="p-6 rounded-xl border-2 border-dashed border-border hover:border-primary hover:bg-primary/5 transition-all flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <span className="font-semibold">Favorites</span>
              <span className="text-sm text-muted-foreground text-center">
                Your saved meals
              </span>
            </button>

            <button className="p-6 rounded-xl border-2 border-dashed border-border hover:border-primary hover:bg-primary/5 transition-all flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <span className="font-semibold">Recent</span>
              <span className="text-sm text-muted-foreground text-center">
                Yesterday's meals
              </span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
