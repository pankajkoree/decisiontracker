import RoutingComponent from "@/components/RoutingComponent";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl font-bold">Decision Tracker</h1>
      <h2 className="text-3xl font-medium">
        your future is built on today&apos;s choices
      </h2>
      <p className="relative fle xl:w-[50%] text-center text-xl">
        Tiny Decisions is a personal decision-tracking app that helps <br />
        users log everyday choices - from career moves to life changes. By
        recording <br />
        what they chose and why, users can reflect, learn, and gain clarity over
        time. <br /> It's a simple tool to capture the small moments that shape
        big outcomes.
      </p>
      <div className="relative flex gap-4 justify-center">
        <RoutingComponent
          className="border-2 border-blue-400"
          heading="Profile"
          description="route to specific part"
        />

        <RoutingComponent
          heading="Profile"
          description="route to specific part"
        />
      </div>
    </div>
  );
}
