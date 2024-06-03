"use client";
import { useState, useMemo } from "react";
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

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearchTerm = event.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory
        ? event.category === selectedCategory
        : true;
      return matchesSearchTerm && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-gray-900 text-white min-h-screen py-8">
      <nav className="bg-gray-900">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold"></h1>
          <div className="flex items-center gap-4">
            <Link
              href="/profile"
              className="flex items-center gap-2 text-white hover:text-gray-300"
            >
              <UserIcon className="w-5 h-5" />
              Profile
            </Link>
            <Link
              href="events/create"
              className="flex items-center gap-2 text-white hover:text-gray-300"
            >
              <PlusCircleIcon className="w-5 h-5" />
              Create an Event
            </Link>
           <UserButton afterSignOutUrl="/"/>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Upcoming Events</h1>
          <p className="text-gray-400 mt-2">
            Register for your favourite events today!
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="relative w-full max-w-md">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search events..."
                className="pl-10 pr-4 py-2 rounded-md bg-gray-800 text-white w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 text-white border-gray-700"
                >
                  <FilterIcon className="w-4 h-4 text-black" />
                  <span className="text-black">
                    {selectedCategory ? selectedCategory : "Filter by category"}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                sideOffset={8}
                className="bg-gray-800 text-white border-gray-700"
              >
                <DropdownMenuLabel>Filter by category</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onSelect={() => setSelectedCategory("")}
                  className={selectedCategory === "" ? "bg-gray-700" : ""}
                >
                  All
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => setSelectedCategory("Music")}
                  className={selectedCategory === "Music" ? "bg-gray-700" : ""}
                >
                  Music
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => setSelectedCategory("Art")}
                  className={selectedCategory === "Art" ? "bg-gray-700" : ""}
                >
                  Art
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => setSelectedCategory("Food")}
                  className={selectedCategory === "Food" ? "bg-gray-700" : ""}
                >
                  Food
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => setSelectedCategory("Outdoors")}
                  className={
                    selectedCategory === "Outdoors" ? "bg-gray-700" : ""
                  }
                >
                  Outdoors
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => setSelectedCategory("Technology")}
                  className={
                    selectedCategory === "Technology" ? "bg-gray-700" : ""
                  }
                >
                  Technology
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => setSelectedCategory("Entertainment")}
                  className={
                    selectedCategory === "Entertainment" ? "bg-gray-700" : ""
                  }
                >
                  Entertainment
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredEvents.map((event) => (
            <EventCard event={event} key={event._id}/>
          ))}
        </div>
      </div>
    </div>
  );
}
