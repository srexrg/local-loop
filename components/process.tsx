"use client";

import { motion } from "framer-motion";
import { Search, CalendarCheck, Users, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Find events that match your interests and location.",
  },
  {
    icon: CalendarCheck,
    title: "Register",
    description: "Quick and easy registration with instant confirmation.",
  },
  {
    icon: Users,
    title: "Connect",
    description: "Meet attendees and join the community discussion.",
  },
  {
    icon: PartyPopper,
    title: "Attend",
    description: "Enjoy the event and make lasting connections.",
  },
];

export default function Process() {
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
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Your journey from discovery to attendance in four simple steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-indigo-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-indigo-500 to-transparent transform -translate-x-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
