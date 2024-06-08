import { Input } from "@/components/ui/input";
import {
  FilterIcon,
  SearchIcon,
  UserIcon,
  PlusCircleIcon,
  LogOutIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import EventCard from "@/components/EventCard";
import Link from "next/link";
import { events } from "@/utils/constants";
import { UserButton } from "@clerk/nextjs";
import { getAllEvents } from "@/lib/actions/event.actions";
import Search from "@/components/shared/Search";
import { SearchParamProps } from "@/types";
import CategoryFilter from "@/components/shared/CategoryFilter";

export default async function EventsPage({ searchParams }: SearchParamProps) {
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category: category,
  });

  return (
    <div className="bg-gray-900 text-white min-h-screen py-8">
      <nav className="bg-gray-900">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Local-Loop</h1>
          <div className="flex items-center gap-4">
            <Link
              href="/profile"
              className="flex items-center gap-2 text-white hover:text-gray-300"
            >
              <UserIcon className="w-5 h-5" />
              Profile
            </Link>
            <Link
              href="/events/create"
              className="flex items-center gap-2 text-white hover:text-gray-300"
            >
              <PlusCircleIcon className="w-5 h-5" />
              Create an Event
            </Link>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </nav>
      <div className="container mt-10 px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Upcoming Events</h1>
          <p className="text-gray-400 mt-2">
            Register for your favourite events today!
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-2">
          <Search placeholder="Search for an event" />
          <div className="flex flex-end w-1/6">
          <CategoryFilter />
          </div>
        </div>
        <div className="mt-10 my-9">
          <EventCard data={events} empty="No events" collection="All Events" />
        </div>
      </div>
    </div>
  );
}
