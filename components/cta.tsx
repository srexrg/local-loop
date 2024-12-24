"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
          alt="Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/90" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-indigo-400 font-medium mb-4 block">
            Join Our Community
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Ready to Experience Amazing Events?
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Join thousands of event enthusiasts and never miss out on the best
            experiences in your area. Get exclusive access to premium events and
            special community perks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 backdrop-blur-sm"
            />
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span className="text-gray-300">50K+ Active Members</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full" />
              <span className="text-gray-300">Premium Events</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full" />
              <span className="text-gray-300">Exclusive Benefits</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
