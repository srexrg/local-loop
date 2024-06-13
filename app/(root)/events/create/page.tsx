import EventForm from "@/components/shared/EventForm";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const CreateEvent = async () => {
   const user = await currentUser();
   const userId = user?.publicMetadata.userId as string;

  return (
    <>
      <section className="">
        <h3 className=" wrapper h3-bold text-center sm:text-left text-white">
          Create Event
        </h3>
      </section>
      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default CreateEvent;
