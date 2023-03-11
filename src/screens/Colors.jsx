import React, { useState, useRef } from "react";
import Values from "values.js";
import SingleColor from "../components/SingleColor";

const Colors = () => {
  const [color, setColor] = useState("");
  const [list, setList] = useState(new Values("#f15025").all(10)); // array of colors that will be shown
  const [error, setError] = useState("");
  const colorInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const colors = new Values(color).all(10); // this will user entered color and using values library shades will be generated
      setList(colors); // newly generated shades will be stored in list hook
      colorInputRef.current.value = "";
      setError("");
    } catch (error) {
      setError("Please enter a valid color code");
    }
  };

  return (
    <div className="flex flex-col bg-gray-800 w-full p-6 md:p-10">
      <section className="w-full flex flex-col md:flex-row items-center justify-between gap-10">
        <h3 className="font-bold text-4xl mb-4 md:mb-0 text-white">
          Color Generator
        </h3>
        <div className="flex flex-col md:flex-row gap-6">
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="text"
              ref={colorInputRef}
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="#f15025"
              className={`p-4 text-md ${
                error ? "border-red-500" : "text-gray-400"
              } bg-gray-900 border border-gray-700 rounded-md w-52`}
            />
            <button className="bg-[#53B1EE] py-3 px-6 text-white text-md rounded-md hover:bg-blue-600">
              Submit
            </button>
          </form>
        </div>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
        {list.map((color, index) => (
          <SingleColor
            key={index}
            {...color}
            index={index}
            hexColor={color.hex}
          />
        ))}
      </section>
    </div>
  );
};

export default Colors;
