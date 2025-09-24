import { GlassCard } from "./glassCard.jsx";

export function Frame() {
  return (
    <div className="flex items-center justify-centerm mt-30 gap-15 py-5">
      <div className="text-white  ">
        <GlassCard className={"px-4 py-2 bg-orange-500/10 rounded-lg"}>
          <p className="text-xs font-normal ">Crafted By Top Enginners</p>
        </GlassCard>
        <h1 className="text-orange-500 text-3xl  mt-5">ONE-STOP Platforom!</h1>
        <h1 className="text-3xl p-  ">
          All your Prep in One Place One Plan. Zero Stress
        </h1>
        <p className="mt-5 text-neutral-500 ">
          The most trusted platfrom for enginners to up-skill and crack tech
          interviews in the least time
        </p>
        <div className="flex gap-5 mt-10">
          <GlassCard className={"px-7 py-2  rounded-lg "}>
            <p>Explore offerings </p>
          </GlassCard>

          <GlassCard className={"px-4 py-2 bg-zinc-800 rounded-lg"}>
            <p>Buy Now</p>
          </GlassCard>
        </div>
      </div>
      <GlassCard className={"flex w-195  py-65 rounded-lg   "}>
        <div className="relative">
          <img className="w-200 rounded-lg " src="/youtube.png" alt="" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="relative mb-5 mt-19">
              <img
                className="size-18 relative z-10"
                src="/youtube.svg"
                alt=""
              />
              <div className="h-full w-full p-1 bg-white absolute inset-0 blur-2xl" />
              <div className="h-full w-full p-1 bg-white absolute inset-0 blur-2xl" />
              <div className="h-full w-full p-1 bg-white absolute inset-0 blur-2xl" />
              <div className="h-full w-full p-3 bg-white absolute inset-0 blur-2xl" />
              <div className="h-full w-full p-1 bg-white absolute inset-0 blur-2xl" />
              <div className="h-full w-full p-3 bg-white absolute inset-0 blur-2xl" />
            </div>
            <GlassCard
              className={
                "rounded-xl px-5 py-3 text-black bg-red-400/10 backdrop-blur-[2px]"
              }
            >
              Watch Now
            </GlassCard>
          </div>
        </div>
        <div className="flex items-center justify-between my-3">
          <p className="text-xl">TUF+ Demo - OneStop Prep Platfrom!</p>
          <GlassCard className={"p-1.5 rounded-full"}>
            <img className="size-3" src="/arrow.svg" alt="" />
          </GlassCard>
        </div>
      </GlassCard>
    </div>
  );
}
