import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs";
import React from "react";


const CreateEvent = () => {

   const { sessionClaims } = auth();

   const userId = sessionClaims?.userId as string;

   return (
     <>
       <section className="">
         <h3 className=" font-bold text-center sm:text-left">Create Event</h3>
       </section>
       <div className="wrapper my-8">
         <EventForm userId={userId || ""} type="Create" />
       </div>
     </>
   );
};

export default CreateEvent;
