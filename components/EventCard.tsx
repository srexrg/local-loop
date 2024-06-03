import Link from "next/link";
import Image from "next/image";

type Event = {
  _id:number
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
};
type EventCardProps = {
  event: Event;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="h-48 overflow-hidden">
        <Image
          src="/placeholder.svg"
          alt={event.title}
          width={384}
          height={192}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-md text-xs font-medium">
            {event.category}
          </span>
          <Link
            href={`/events/${event._id}`}
            className="text-blue-400 hover:underline"
            prefetch={false}
          >
            Details
          </Link>
        </div>
        <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
        <div className="text-gray-400 mb-2">
          {event.date} | {event.time}
        </div>
        <div className="text-gray-400 mb-4">{event.location}</div>
        <p className="text-gray-300 line-clamp-3">{event.description}</p>
      </div>
    </div>
  );
}
