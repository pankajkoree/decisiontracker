"use client";

import Input from "@/components/Input";
import Label from "@/components/Label";
import TextArea from "@/components/TextArea";
import Textarea from "@/components/TextArea";
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
        <form className="flex flex-col gap-2 xl:gap-4">
          <Label htmlFor="title" text="Title" />
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Enter the title"
            required
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
            <DecisionToggle value={isMade} onChange={setIsMade} required />
          </div>

          {isMade && (
            <div className="relative flex flex-col gap-2 xl:gap-4">
              <Label htmlFor="finalChoice" text="Final choice" />
              <Input
                type="text"
                id="finalChoice"
                name="finalChoice"
                placeholder="Enter the final choice"
                required
              />

              <Label htmlFor="reasonChoice" text="Reason for choice" />
              <TextArea
                id="reasonChoice"
                name="reasonChoice"
                placeholder="Enter the reason for choice"
                required
              />

              <Label htmlFor="isGoodDecision" text="Was this a good decision" />
              <TextArea
                id="isGoodDecision"
                name="isGoodDecision"
                placeholder="Reflection if it's a good decision"
                required
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateDecision;
