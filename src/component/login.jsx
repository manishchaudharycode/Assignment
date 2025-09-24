import React from "react";
import {  GlassCard } from "./glassCard.jsx";

export function Login() {
  return (
    <div className="h-screen  w-full  flex items-center justify-center gap-10  ">
      <GlassCard className={"flex w-100 p-60 "}>
       <div className="flex flex-col min-w-sm py-5 px-10">
         <h1 className=" text-center mb-14 text-4xl w-full px-60 ">Login</h1>
         
     <div className="mb-5">
        <GlassCard className={"w-80 py-3 px-3 rounded-lg"}>
        <input className=" outline-0 border-0 ring-0  " type="text" placeholder="Username"  />
        </GlassCard>
        </div>
     <div className="mt-5 ">  
        <GlassCard className={"w-80 py-3 px-3 rounded-lg"}>
        <input className ="border-0 outline-0 ring-0   " type="text" placeholder="Password" />
        </GlassCard>
        </div> 
       <div className="text-center  ">
        <GlassCard className={"mt-10  text-center bg-orange-400/15 rounded-lg " }>
          <p className=" p-10 ">Submit</p>
        </GlassCard>
        </div>
       </div>
      </GlassCard>
    </div>
  );
}
