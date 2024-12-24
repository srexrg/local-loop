"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Music2,
  Utensils,
  Palette,
  Dumbbell,
  Gamepad2,
  Book,
  Camera,
  Mic2,
} from "lucide-react";

const categories = [
  { icon: Music2, name: "Music", count: "2.5k events", trending: true },
  {
    icon: Utensils,
    name: "Food & Drink",
    count: "1.8k events",
    trending: true,
  },
  { icon: Palette, name: "Art", count: "1.2k events", trending: false },
  { icon: Dumbbell, name: "Sports", count: "900 events", trending: true },
  { icon: Gamepad2, name: "Gaming", count: "750 events", trending: false },
  { icon: Book, name: "Education", count: "650 events", trending: false },
  { icon: Camera, name: "Photography", count: "500 events", trending: false },
  { icon: Mic2, name: "Comedy", count: "450 events", trending: true },
];

export default function Categories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 bg-gray-950">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Explore Categories</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find events that match your interests, from music festivals to
            workshops.
          </p>
        </motion.div>

        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <Card className="w-48 h-48 bg-gray-800 border-gray-700 hover:border-indigo-500 transition-all hover:-translate-y-1 cursor-pointer">
                <div className="h-full flex flex-col items-center justify-center p-4">
                  <category.icon className="w-12 h-12 text-indigo-500 mb-4" />
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-400">{category.count}</p>
                  {category.trending && (
                    <Button variant="ghost" size="sm" className="mt-2">
                      🔥 Trending
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
