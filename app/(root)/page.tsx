import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { SignedOut } from "@clerk/nextjs";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-950 text-gray-50">
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-grey-900">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="mt-10">
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Discover and Connect at Local Loop
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl dark:text-gray-400 mt-4">
                  Explore a vibrant community of local events, workshops, and
                  meetups. Register now to secure your spot.
                </p>
                <div className="space-x-4 mt-6">
                  <SignedOut>
                    <Link
                      href="/sign-up"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-[#6366F1] shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus-visible:ring-gray-300"
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
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <Image
                  src="/Designer (4).jpeg"
                  width="500"
                  height="500"
                  alt="Hero"
                  className="mx-auto aspect-square overflow-hidden rounded-t-xl mb-4 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
