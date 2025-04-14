import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center gap-4">
      <h1 className="relative top-12 text-3xl font-semibold font-BungeeSpice uppercase xl:top-16 xl:text-5xl xl:font-bold bg-gradient-to-b from-yellow-400 to-red-600 bg-clip-text text-transparent">
        Decision Tracker
      </h1>
      <h2 className="relative top-12 text-2xl text-center font-bold mt-2 font-serif xl:top-16 md:text-3xl lg:text-3xl xl:text-4xl xl:font-bold">
        your future is built on today&apos;s choices
      </h2>
      <p className="relative flex top-16 items-center text-center text-xl xl:top-20 xl:w-[40%] xl:text-center xl:text-xl">
        Tiny Decisions is a personal decision-tracking app that helps users log
        everyday choices - from career moves to life changes. By recording what
        they chose and why, users can reflect, learn, and gain clarity over
        time. It's a simple tool to capture the small moments that shape big
        outcomes.
      </p>
      <div className="relative flex flex-col top-20 gap-4 items-center xl:flex-row xl:justify-center xl:top-32">
        <Button text="User Profile" />
        <Button text="Create New Decision" />
      </div>
    </div>
  );
}
