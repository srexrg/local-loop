import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs";
import React from "react";


const CreateEvent = () => {

   const { sessionClaims } = auth();
   const userId = sessionClaims?.userId as string;
   console.log(userId)

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
