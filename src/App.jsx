/* eslint-disable react/jsx-key */

import { useState } from "react";
import GeneralForm from "./components/GeneralForm.jsx";
import EducationForm from "./components/EducationForm.jsx";
import ExperienceForm from "./components/ExperienceForm.jsx";
import "./App.css";

function App() {
  const [fullName, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  const nameChange = (event) => {
    setName(event.target.value);
  };

  const numberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const addEducation = (newEducation) => {
    setEducation([...education, newEducation]);
  };

  const removeEducation = (index) => {
    setEducation((prevEducation) =>
      prevEducation.filter((edu, i) => i !== index)
    );
  };

  const addExperience = (newExperience) => {
    setExperience([...experience, newExperience]);
  };

  const removeExperience = (index) => {
    setExperience((prevExperience) =>
      prevExperience.filter((exp, i) => i !== index)
    );
  };

  const getMonth = (str) => {
    const months = {
      "01": "January",
      "02": "February",
      "03": "March",
      "04": "April",
      "05": "May",
      "06": "June",
      "07": "July",
      "08": "August",
      "09": "September",
      10: "October",
      11: "November",
      12: "December",
    };
    return months[str];
  };

  const formatDate = (date1, date2) => {
    const list1 = date1.split("-");
    const list2 = date2.split("-");
    if (list1[0] === list2[0]) {
      return getMonth(list1[1]) + " to " + getMonth(list2[1]) + " " + list2[0];
    }
    return (
      getMonth(list1[1]) +
      " " +
      list1[0] +
      " to " +
      getMonth(list2[1]) +
      " " +
      list2[0]
    );
  };

  return (
    <div className="container">
      <div className="leftForm">
        <GeneralForm
          onNameChange={nameChange}
          onNumberChange={numberChange}
          onEmailChange={emailChange}
        />
        <EducationForm
          onEducationAdd={addEducation}
          currentList={education}
          remove={removeEducation}
        />
        <ExperienceForm
          onExperienceAdd={addExperience}
          currentList={experience}
          remove={removeExperience}
        />
      </div>
      <div className="cv">
        <div className="general">
          <p>{fullName}</p>
          <div>
            {phoneNumber != "" && (
              <div className="contact">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>phone-hangup</title>
                  <path
                    fill="white"
                    d="M12,9C10.4,9 8.85,9.25 7.4,9.72V12.82C7.4,13.22 7.17,13.56 6.84,13.72C5.86,14.21 4.97,14.84 4.17,15.57C4,15.75 3.75,15.86 3.5,15.86C3.2,15.86 2.95,15.74 2.77,15.56L0.29,13.08C0.11,12.9 0,12.65 0,12.38C0,12.1 0.11,11.85 0.29,11.67C3.34,8.77 7.46,7 12,7C16.54,7 20.66,8.77 23.71,11.67C23.89,11.85 24,12.1 24,12.38C24,12.65 23.89,12.9 23.71,13.08L21.23,15.56C21.05,15.74 20.8,15.86 20.5,15.86C20.25,15.86 20,15.75 19.82,15.57C19.03,14.84 18.14,14.21 17.16,13.72C16.83,13.56 16.6,13.22 16.6,12.82V9.72C15.15,9.25 13.6,9 12,9Z"
                  />
                </svg>
                <p>{phoneNumber}</p>
              </div>
            )}
            {email != "" && (
              <div className="contact">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>email-outline</title>
                  <path
                    fill="white"
                    d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"
                  />
                </svg>
                <p>{email}</p>
              </div>
            )}
          </div>
        </div>
        <div className="education">
          <h1>Education</h1>
          {education.map((edu, index) => (
            <div className="company">
              <h2 key={index}>{edu.schoolName}</h2>
              <h2 className="mid" key={index}>
                {edu.titleOfStudy}
              </h2>
              <h2 key={index}>{formatDate(edu.startDate, edu.endDate)}</h2>
            </div>
          ))}
        </div>
        <div className="experience">
          <h1>Experience</h1>
          {experience.map((exp, index) => (
            <>
              <div className="company">
                <h2 key={index}>{exp.company}</h2>
                <h2 className="mid" key={index}>
                  {exp.position}
                </h2>
                <h2 key={index}>{formatDate(exp.start, exp.end)}</h2>
              </div>
              <h2 className="duty" key={index}>
                &#x2022; {exp.duties}
              </h2>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
