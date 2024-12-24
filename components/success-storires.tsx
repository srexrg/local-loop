"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Users2, Calendar, Trophy, TrendingUp } from "lucide-react";

const successStories = [
  {
    title: "TechConnect 2024",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7",
    metrics: {
      attendees: "2,500+",
      satisfaction: "98%",
      connections: "5,000+",
    },
    description:
      "A tech conference that brought together innovators from 30 countries, resulting in 50+ startup collaborations.",
    category: "Technology",
  },
  {
    title: "Green Earth Festival",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433",
    metrics: {
      attendees: "10,000+",
      satisfaction: "96%",
      impact: "50 tons CO₂ saved",
    },
    description:
      "An eco-friendly festival that united environmental activists and resulted in 20 new green initiatives.",
    category: "Sustainability",
  },
  {
    title: "Arts United 2024",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    metrics: {
      attendees: "5,000+",
      artworks: "300+",
      sales: "$100K+",
    },
    description:
      "A collaborative art exhibition that helped emerging artists showcase their work to global collectors.",
    category: "Arts & Culture",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2" />

      <div className="container px-4 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-medium mb-4 block">
            Success Stories
          </span>
          <h2 className="text-4xl font-bold mb-4">
            Transforming Events Into Experiences
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how our platform has helped create unforgettable events and
            meaningful connections worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:border-indigo-500 transition-all duration-300">
                <div className="relative h-48">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-indigo-500 text-white px-3 py-1 rounded-full text-sm">
                    {story.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{story.title}</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {story.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(story.metrics).map(([key, value], i) => (
                      <div key={i} className="bg-gray-700/50 rounded-lg p-3">
                        <div className="text-xl font-bold text-indigo-400">
                          {value}
                        </div>
                        <div className="text-sm text-gray-400 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-indigo-400" />
              <span>500+ Successful Events</span>
            </div>
            <div className="flex items-center gap-2">
              <Users2 className="w-5 h-5 text-purple-400" />
              <span>1M+ Attendees</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-pink-400" />
              <span>95% Success Rate</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
