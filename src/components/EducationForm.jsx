/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/EducationForm.css";

function EducationForm({ onEducationAdd, currentList, remove }) {
  const [more, setMore] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [titleOfStudy, setTitleOfStudy] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const onButtonClick = () => {
    setMore(!more);
  };

  const onAddClick = () => {
    if (
      schoolName !== "" &&
      titleOfStudy !== "" &&
      startDate !== "" &&
      endDate !== ""
    ) {
      const newEducation = {
        schoolName: schoolName,
        titleOfStudy: titleOfStudy,
        startDate: startDate,
        endDate: endDate,
      };
      onEducationAdd(newEducation);
      setSchoolName("");
      setTitleOfStudy("");
      setStartDate("");
      setEndDate("");
    }
  };

  const onDeleteClick = (index) => {
    remove(index);
  };

  return (
    <div className="educationForm">
      <div className="header">
        <h1>Education</h1>
        {!more && <img src="down.png" onClick={onButtonClick}></img>}
        {more && <img src="go-up.png" onClick={onButtonClick}></img>}
      </div>
      {more &&
        currentList.map((elem, index) => (
          <div className="curr" key={index}>
            <p>{elem.schoolName}</p>
            <img src="delete.png" onClick={() => onDeleteClick(index)}></img>
          </div>
        ))}
      {more && (
        <form>
          <h1>School name</h1>
          <input
            type="text"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
          <h1>Title of study</h1>
          <input
            type="text"
            value={titleOfStudy}
            onChange={(e) => setTitleOfStudy(e.target.value)}
          />
          <h1>Start date</h1>
          <input
            type="month"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <h1>End date</h1>
          <input
            type="month"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </form>
      )}
      <div className="buttons">
        {more && (
          <button className="add" onClick={onAddClick}>
            Add
          </button>
        )}
        {more && <button onClick={onButtonClick}>Cancel</button>}
      </div>
    </div>
  );
}

export default EducationForm;
