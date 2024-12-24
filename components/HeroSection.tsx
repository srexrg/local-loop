"use client";

import { Button } from "@/components/ui/button";
import { SignedIn,SignedOut } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { Users, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Main background with dark overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1531058020387-3be344556be6"
          alt="Event background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gray-950/90" />
      </div>

      {/* Animated pattern overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[25%] -left-[15%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-[25%] -right-[15%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="container px-4 mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Discover Events That
            <br />
            Connect Communities
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of people discovering unique events and building
            lasting connections in their communities.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center gap-8"
          >
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-indigo-400" />
              <span className="text-2xl font-bold text-white">50K+</span>
              <span className="text-gray-300">Members</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-purple-400" />
              <span className="text-2xl font-bold text-white">1000+</span>
              <span className="text-gray-300">Events</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-pink-400" />
              <span className="text-2xl font-bold text-white">50+</span>
              <span className="text-gray-300">Cities</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center gap-4"
          >
            <SignedOut>
              <Link
                href="/sign-up"
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-800 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Register Now
              </Link>
              <Link
                href="/sign-in"
                className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-transparent px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Explore Events
              </Link>
            </SignedOut>
            <SignedIn>
              <Link
                href="/events"
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text text-gray-800 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Go to your Events
              </Link>
            </SignedIn>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
