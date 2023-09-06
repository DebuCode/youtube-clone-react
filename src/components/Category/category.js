import React, { useState } from "react";
import "./category.scss";
import { useDispatch } from "react-redux";
import { getVideosbycategory } from "../../redux/actions/videos.action";

const keywords = [
  "All",
  "React js",
  "Angular js",
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art",
  "Guitar",
  "Bengali Songs",
  "Coding",
  "Cricket",
  "Football",
  "Real Madrid",
  "Gatsby",
  "Poor Coder",
  "Shwetabh",
];
const Category = () => {
  const [activeElement, setActiveElement] = useState("All");
  const dispatch = useDispatch()
  const handleClick = (value) => {
    setActiveElement(value);
    dispatch(getVideosbycategory(value))
  };

  return (
    <div className="category">
      {keywords.map((value, i) => (
        <span
        onClick={() => handleClick(value)}  
        key={i}
          className={activeElement === value ? "active" : ""}>
          {value}
        </span>
      ))}
    </div>
  );
};

export default Category;
