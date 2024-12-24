"use client";

import { motion } from "framer-motion";
import { Search, Users2, Calendar, Trophy } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const features = [
  {
    icon: Search,
    title: "Smart Discovery",
    description:
      "Find events that match your interests with our AI-powered recommendation engine.",
  },
  {
    icon: Users2,
    title: "Community Groups",
    description:
      "Connect with like-minded people and join communities.",
  },
  {
    icon: Calendar,
    title: "Easy Planning",
    description:
      "Seamless event scheduling and registration with automatic reminders.",
  },
  {
    icon: Trophy,
    title: "Rewards Program",
    description:
      "Earn points and unlock exclusive perks by attending and hosting events.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover what makes our platform the perfect place to find and
            create meaningful events.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700 hover:border-indigo-500 transition-colors">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-indigo-500 mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
