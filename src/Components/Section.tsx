import React, { useState, useEffect, useRef } from "react";

const Section: React.FC = () => {
  const [selected, setSelected] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sectionRef.current &&
        event.target instanceof Node &&
        !sectionRef.current.contains(event.target)
      ) {
        setSelected(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  console.log(selected);
  return (
    <div
      ref={sectionRef}
      onClick={() => {
        setSelected(true);
      }}
      className={`${
        selected && "border-blue-500"
      }  cursor-pointer hover:border-blue-500 border-1 text-center w-3/4 m-auto py-16 mt-4 bg-gray-50`}
    >
      Section
    </div>
  );
};

export default Section;
