import React, { useState } from "react";
// import { options } from "yargs";
import classes from "./home.module.css";

const Home = () => {
  const [userData, setUserData] = useState([
    

    ]);

  const [parentClass, setParentClass] = useState("");
  const [studClass, setStudClass] = useState("");
  const [noOfStudents, setNoOfStudents] = useState("");
  const [timeTable, setTimeTable] = useState("");
  const [noOfTeachers, setNoOfTeachers] = useState("");
  const [mandatorySubjects, setMandatorySubjects] = useState("");
  const [optionalSubjects, setOptionalSubjects] = useState("");

  const onSubmitClickHandler = () => {
    let newObj = {
      parentClass: "",
      studClass: studClass,
      noOfStudents: noOfStudents,
      timeTable: timeTable,
      noOfTeachers: noOfTeachers,
      mandatorySubjects: mandatorySubjects,
      optionalSubjects: optionalSubjects,
    };
    setUserData([
        ...userData,
        newObj
    ]);
    setStudClass("")
    setNoOfStudents("")
    setTimeTable("")
    setNoOfTeachers("")
    setMandatorySubjects("")
    setOptionalSubjects("")
  };
  return (
    <React.Fragment>
      <p className={classes.heading}>Class Management System</p>
      <div className={classes.mainContainer}>
        <div className={classes.leftContainer}>
          {userData.length>0? (
                      <div className={classes.tableContainer}>
                      <div className={classes.tableContent}>
                        <span>Class</span>
                        <span>Students</span>
                        <span>Time Table</span>
                        <span>Teachers</span>
                        <span>Mandatory Subjects</span>
                        <span>Optional Subjects</span>
                        <span>Action</span>
                      </div>
                      {userData.map((item) => {
                        return (
                          <div className={classes.tableContent}>
                            <span>{item.studClass}</span>
                            <span>{item.noOfStudents}</span>
                            <span>{item.timeTable}</span>
                            <span>{item.noOfTeachers}</span>
                            <span>{item.mandatorySubjects}</span>
                            <span>{item.optionalSubjects}</span>
                            <span>
                              {item.parentClass ? (
                                <a href="/">Edit</a>
                              ) : (
                                <div>
                                  <a href="/">Add</a>/<a href="/">Edit</a>
                                </div>
                              )}
                            </span>
                          </div>
                        );
                      })}
                    </div>
          ):
                      <div style={{marginLeft:"300px"}}>No Data.Please insert some from right panel</div>
          }

          <div></div>
        </div>
        <div className={classes.rightContainer}>
          <div className={classes.formCard}>
            <div>
              <p
                style={{ fontSize: "24px", fontFamily: "'Roboto', sans-serif" }}
              >
                Enter data here..
              </p>
            </div>
            <div>
              <div className={classes.inputRow}>
                <label>Class :</label>
                <input
                  type="text"
                  placeholder="I II III ..."
                  value={studClass}
                  onChange={(event) => setStudClass(event.target.value)}
                />
              </div>
              <div className={classes.inputRow}>
                <label>Students :</label>
                <input
                  type="text"
                  placeholder="10"
                  value={noOfStudents}
                  onChange={(event) => setNoOfStudents(event.target.value)}
                />
              </div>
              <div className={classes.inputRow}>
                <label>Time Table :</label>
          
                <select value={timeTable} onChange={(event)=>setTimeTable(event.target.value)}>
                    <option defaultValue="" disabled selected >Select one</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
              </div>
              <div className={classes.inputRow}>
                <label>Teachers :</label>
                <input
                  type="text"
                  placeholder="5"
                  value={noOfTeachers}
                  onChange={(event) => setNoOfTeachers(event.target.value)}
                />
              </div>
              <div className={classes.inputRow}>
                <label>Mandatory Subjects : </label>
                <input
                  type="text"
                  placeholder="7"
                  value={mandatorySubjects}
                  onChange={(event) => setMandatorySubjects(event.target.value)}
                />
              </div>
              <div className={classes.inputRow}>
                <label>Optional Subjects:</label>
                <input
                  type="text"
                  placeholder="2"
                  value={optionalSubjects}
                  onChange={(event) => setOptionalSubjects(event.target.value)}
                />
              </div>
            </div>
            <div>
              <button onClick={() => onSubmitClickHandler()}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
