"use client";

import Input from "@/components/Input";
import Label from "@/components/Label";
import DecisionToggle from "@/components/Toggle";
import { useState } from "react";

const CreateDecision = () => {
  const [isMade, setIsMade] = useState(false);

  if (isMade === true) {
    console.log("hello");
  }

  return (
    <div className="relative min-h-screen flex justify-center items-start bg-gray-50 px-4 py-8">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Create New Decision
        </h1>
        <form className="flex flex-col gap-4">
          <Label htmlFor="title" text="Title" />
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Enter the title"
          />

          <Label htmlFor="pros" text="Pros" />
          <Input
            type="text"
            id="pros"
            name="pros"
            placeholder="Enter the pros"
          />

          <Label htmlFor="cons" text="Cons" />
          <Input
            type="text"
            id="cons"
            name="cons"
            placeholder="Enter the cons"
          />

          <div className="flex justify-between items-center">
            <span className="text-gray-700 text-xl">Decision</span>
            <DecisionToggle value={isMade} onChange={setIsMade} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDecision;
