import React, { useState, useEffect, useRef } from "react";

const Section: React.FC = () => {
  const [selected, setSelected] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null); // Specify the type of the ref as HTMLDivElement

  useEffect(() => {
    // Specify the type of the event parameter as MouseEvent
    const handleClickOutside = (event: MouseEvent) => {
      // Type guard to ensure event.target is a Node
      if (
        sectionRef.current &&
        event.target instanceof Node &&
        !sectionRef.current.contains(event.target)
      ) {
        setSelected(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={sectionRef} // Attach the ref to the div
      onClick={() => {
        setSelected(true);
      }}
      className={`${
        selected && "border-blue-500"
      }  cursor-pointer hover:border-blue-500 border-1 border-white text-center w-3/4 m-auto py-16 mt-4 bg-gray-50`}
    >
      Section
    </div>
  );
};

export default Section;
