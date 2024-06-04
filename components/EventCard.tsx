import Link from "next/link";
import Image from "next/image";
import { IEvent } from "@/lib/database/models/event.model";
import Card from "./shared/Card";

type EventCardProps = {
  data: IEvent[];
  empty: string;
  collection?: "Events Organized" | "My Tickets" | "All Events";
};

export default function EventCard({ data,empty,collection }: EventCardProps) {
  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {data.map((event) => {
              const hasOrderLink = collection === "Events Organized";
              const hidePrice = collection === "My Tickets";

              return (
                <li key={event._id} className="flex justify-center">
                  <Card
                    event={event}
                    hasOrderLink={hasOrderLink}
                    hidePrice={hidePrice}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] py-28 text-center">
          <h3 className="p-bold-20 md:h5-bold">{empty}</h3>
        </div>
      )}
    </>
  );
}
