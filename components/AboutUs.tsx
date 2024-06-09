import { SignedOut,SignedIn } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";


export default function AboutUs() {
  return (
    <section className="py-12 border-gray-800 text-gray-50">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center">About Us</h2>
        <p className="mt-4 text-center text-gray-400">
          Our mission is to connect people through local events and meetups.
        </p>
        <div className="mt-6">
          <SignedOut>
            <Button>
              <Link
                href="/sign-in"
                prefetch={false}
              >
                Check it out
              </Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <Link
              href="/events"
              prefetch={false}
            >
              <Button>Lets Go</Button>
            </Link>
          </SignedIn>
        </div>
      </div>
    </section>
  );
}
