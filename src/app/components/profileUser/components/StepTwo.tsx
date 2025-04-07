"use client";
import { Button } from "@/components/ui/button";

export const StepTwoProfileEdit = () => {
  return (
    <div className="w-full max-w-xl mx-auto flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Step 2: More Info</h1>
      <p className="text-gray-600">You can add more details here...</p>

      {/* Add form fields or whatever content you need */}
      <Button>Finish</Button>
    </div>
  );
};

export default StepTwoProfileEdit;
