import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { FAQ } from "../utils/constants";

const Section = ({ id, title, description, isVisible, setIsVisible }) => {
  return (
    <div
      className="Section"
      onClick={() => (isVisible ? setIsVisible(false) : setIsVisible(true))}
    >
      <div className="SectionTitle">
        <h3>{title}</h3>
        {isVisible ? <SlArrowUp /> : <SlArrowDown className="cursor-pointer" />}
      </div>
      {isVisible && (
        <p className="SectionDescription">{description}</p>
      )}
    </div>
  );
};

const Help = () => {
  const [visibleSection, setVisibleSection] =
    useState(""); /* Initially description of all questions are hidden */

  return (
    <div className="Help">
      <h1 className="HelpTitle">
        FAQs
      </h1>
      {FAQ.map((question) => {
        return (
          <Section
            key={question.id}
            id={question.id}
            title={question.title}
            description={question.description}
            isVisible={visibleSection === question.id}
            setIsVisible={(param) => {
              if (param) {
                setVisibleSection(question.id);
              } else {
                setVisibleSection(" ");
              }
            }}
          />
        );
      })}
    </div>
  );
};

export default Help;