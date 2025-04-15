"use client";

import { DecisionCard } from "@/components/DecisionCard";
import NoDataFound from "@/components/NoDataFound";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DecisionHistory = () => {
  const router = useRouter();
  const gotoCreateDecision = () => {
    router.push("/createDecision");
  };
  const [decisions, setDecisions] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("decisions");

    if (stored) {
      const parsed = JSON.parse(stored);

      if (Array.isArray(parsed) && parsed.length > 0) {
        setDecisions(parsed);
      }
    }
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center">
      <h1 className="relative top-8 text-2xl font-semibold font-BungeeSpice uppercase xl:top-12 xl:text-4xl xl:font-bold bg-gradient-to-b from-yellow-400 to-red-600 bg-clip-text text-transparent">
        DecisionHistory
      </h1>
      {decisions.length > 0 ? (
        <div className="relative flex flex-col xl:flex xl:gap-8 m-4 xl:w-[80%] top-8 xl:top-20">
          <div className="relative flex flex-wrap sm:flex sm:flex-col xl:flex-row gap-4 xl:gap-8 m-4">
            {decisions.map((decision, index) => (
              <DecisionCard
                key={index}
                index={index + 1}
                title={decision.title}
                date={decision.date}
                pros={decision.pros}
                cons={decision.cons}
                isMade={decision.isMade}
                finalChoice={decision.finalChoice}
                reasonForChoice={decision.reasonForChoice}
                isGoodDecision={decision.isGoodDecision}
              />
            ))}
          </div>

          <div
            onClick={gotoCreateDecision}
            className="relative hover:cursor-pointer top-4 xl:top-20 flex justify-center"
          >
            <button className="relative w-full md:w-[70%] text-center text-xl py-2 px-6 font-medium border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 ease-in-out xl:text-2xl xl:py-2 xl:px-6 xl:font-semibold xl:w-auto rounded hover:cursor-pointer">
              {" "}
              Add More Decision{" "}
            </button>
          </div>
        </div>
      ) : (
        <div className="relative top-12">
          <NoDataFound />
        </div>
      )}
    </div>
  );
};

export default DecisionHistory;
