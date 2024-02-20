/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/ExperienceForm.css";

function ExperienceForm({ onExperienceAdd, currentList, remove }) {
  const [more, setMore] = useState(false);
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [duties, setDuties] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const onButtonClick = () => {
    setMore(!more);
  };

  const onAddClick = () => {
    if (
      company !== "" &&
      position !== "" &&
      duties !== "" &&
      start !== "" &&
      end != ""
    ) {
      const newExperience = {
        company: company,
        position: position,
        duties: duties,
        start: start,
        end: end,
      };
      onExperienceAdd(newExperience);
      setCompany("");
      setPosition("");
      setDuties("");
      setStart("");
      setEnd("");
    }
  };

  const onDeleteClick = (index) => {
    remove(index);
  };

  return (
    <div className="experienceForm">
      <div className="header">
        <h1>Experience</h1>
        {!more && <img src="down.png" onClick={onButtonClick}></img>}
        {more && <img src="go-up.png" onClick={onButtonClick}></img>}
      </div>
      {more &&
        currentList.map((elem, index) => (
          <div className="curr" key={index}>
            <p>{elem.company}</p>
            <img src="delete.png" onClick={() => onDeleteClick(index)}></img>
          </div>
        ))}
      {more && (
        <form>
          <h1>Company name</h1>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          ></input>
          <h1>Position title</h1>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          ></input>
          <h1>Description</h1>
          <input
            type="text"
            value={duties}
            onChange={(e) => setDuties(e.target.value)}
          ></input>
          <h1>Start Date</h1>
          <input
            type="month"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          ></input>
          <h1>End Date</h1>
          <input
            type="month"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          ></input>
        </form>
      )}
      <div className="buttons">
        {more && <button onClick={onAddClick}>Add</button>}
        {more && <button onClick={onButtonClick}>Cancel</button>}
      </div>
    </div>
  );
}

export default ExperienceForm;
