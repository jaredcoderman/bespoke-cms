import React, { useState, ReactElement } from "react";
import Section from "./Components/Section";

export default function App() {
  const [sections, setSections] = useState<ReactElement[]>([]); // Specify the type of the array elements

  const addSection = () => {
    setSections([...sections, <Section key={sections.length} />]);
  };

  return (
    <div className="m-auto">
      {sections}
      <p
        onClick={addSection}
        className="rounded-lg cursor-pointer m-auto mt-16 text-2xl text-white bg-black w-fit px-4 pt-2 pb-3 "
      >
        +
      </p>
    </div>
  );
}
