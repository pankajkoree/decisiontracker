"use client";

import Input from "@/components/Input";
import Label from "@/components/Label";
import TextArea from "@/components/TextArea";
import DecisionToggle from "@/components/Toggle";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const CreateDecision = () => {
  const router = useRouter();
  const [isMade, setIsMade] = useState(false);
  const [data, setData] = useState({
    title: "",
    date: "",
    pros: "",
    cons: "",
    isMade: false,
    finalChoice: "",
    reasonForChoice: "",
    isGoodDecision: "",
  });

  const [isTitle, setIsTitle] = useState("");
  const [isFinalChoice, setIsFinalChoice] = useState("");
  const [isReasonForChoice, setIsReasonForChoice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;

    if (data.title === "") {
      setIsTitle("title is required");
      isValid = false;
    }

    if (isMade && data.finalChoice === "") {
      setIsFinalChoice("final choice is required");
      isValid = false;
    }

    if (isMade && data.reasonForChoice === "") {
      setIsReasonForChoice("reason is required");
      isValid = false;
    }

    if (!isValid) return;
    const newDecision = {
      ...data,
      date: new Date().toLocaleString(),
      isMade: isMade,
    };
    try {
      const storedDecisions =
        JSON.parse(localStorage.getItem("decisions")) || [];

      const updatedDecisions = [newDecision, ...storedDecisions];

      localStorage.setItem("decisions", JSON.stringify(updatedDecisions));
      setData({
        title: "",
        date: "",
        pros: "",
        cons: "",
        isMade: false,
        finalChoice: "",
        reasonForChoice: "",
        isGoodDecision: "",
      });

      setIsMade(false);

      toast.success("Decision submitted");
      router.push("/decisionHistory");
    } catch (error) {
      toast.error("Failed to submit decision");
    }
  };

  return (
    <div className="relative min-h-screen flex justify-center items-start bg-gray-50 p-2 xl:p-4 ">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md shadow-gray-400 hover:shadow-xl hover:shadow-green-300">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Create New Decision
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 xl:gap-4">
          <Label htmlFor="title" text="Title *" />
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Enter the title"
            value={data.title}
            onChange={(e) => {
              setData({ ...data, title: e.target.value });
              if (e.target.value.trim() !== "") {
                setIsTitle("");
              }
            }}
            required
          />
          <p className="text-red-400">{isTitle}</p>
          <Label htmlFor="pros" text="Pros" />
          <Input
            type="text"
            id="pros"
            name="pros"
            placeholder="Enter the pros"
            value={data.pros}
            onChange={(e) => setData({ ...data, pros: e.target.value })}
          />

          <Label htmlFor="cons" text="Cons" />
          <Input
            type="text"
            id="cons"
            name="cons"
            placeholder="Enter the cons"
            value={data.cons}
            onChange={(e) => setData({ ...data, cons: e.target.value })}
          />

          <div className="flex justify-between items-center">
            <span className="text-gray-700 text-xl">Decision</span>
            <DecisionToggle value={isMade} onChange={setIsMade} required />
          </div>
          {!isMade && (
            <button className="relative w-full md:w-[70%] text-center text-xl py-2 px-6 font-medium border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 ease-in-out xl:text-2xl xl:py-2 xl:px-6 xl:font-semibold xl:w-auto rounded hover:cursor-pointer">
              Submit Decision
            </button>
          )}

          {isMade && (
            <div className="relative flex flex-col gap-2 xl:gap-4">
              <Label htmlFor="finalChoice" text="Final choice *" />
              <Input
                type="text"
                id="finalChoice"
                name="finalChoice"
                placeholder="Enter the final choice"
                value={data.finalChoice}
                onChange={(e) => {
                  setData({ ...data, finalChoice: e.target.value });
                  if (e.target.value.trim() !== "") {
                    setIsFinalChoice("");
                  }
                }}
                required
              />
              <p className="text-red-400">{isFinalChoice}</p>

              <Label htmlFor="reasonChoice" text="Reason for choice *" />
              <TextArea
                id="reasonChoice"
                name="reasonChoice"
                placeholder="Enter the reason for choice"
                value={data.reasonForChoice}
                onChange={(e) => {
                  setData({ ...data, reasonForChoice: e.target.value });
                  if (e.target.value.trim() !== "") {
                    setIsReasonForChoice("");
                  }
                }}
                required
              />
              <p className="text-red-400">{isReasonForChoice}</p>

              <Label htmlFor="isGoodDecision" text="Was this a good decision" />
              <TextArea
                id="isGoodDecision"
                name="isGoodDecision"
                placeholder="Reflection if it's a good decision"
                value={data.isGoodDecision}
                onChange={(e) =>
                  setData({ ...data, isGoodDecision: e.target.value })
                }
                required
              />

              <button
                className="relative w-full md:w-[70%] text-center text-xl py-2 px-6 font-medium border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 ease-in-out xl:text-2xl xl:py-2 xl:px-6 xl:font-semibold xl:w-auto rounded hover:cursor-pointer"
                type="submit"
              >
                Submit Decision
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateDecision;
