import { BoltIcon, GlobeIcon, UsersIcon } from "lucide-react";

export default function Features() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-900">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10">
        <h2 className="text-4xl font-bold text-center text-gray-50">
          Our Key Features
        </h2>
        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
          Discover the benefits of using our platform with a focus on what
          matters the most.
        </p>
        <div className="grid md:grid-cols-3 gap-12 mt-12">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <BoltIcon className="text-4xl text-gray-50" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-50">
              Fast & Reliable
            </h3>
            <p className="mt-4 text-gray-400">
              Experience blazing fast performance and reliability that you can
              count on.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <UsersIcon className="text-4xl text-gray-50" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-50">
              Community Driven
            </h3>
            <p className="mt-4 text-gray-400">
              Join a vibrant community of like-minded individuals and grow
              together.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <GlobeIcon className="text-4xl text-gray-50" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-50">
              Global Reach
            </h3>
            <p className="mt-4 text-gray-400">
              Expand your network and connect with people from around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
