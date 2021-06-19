import React, { useState } from "react";
// import { options } from "yargs";
import classes from "./home.module.css";

const Home = () => {
  const [userData, setUserData] = useState([]);

  const [parentClass, setParentClass] = useState("");
  const [studClass, setStudClass] = useState("");
  const [noOfStudents, setNoOfStudents] = useState("");
  const [timeTable, setTimeTable] = useState("Yes");
  const [noOfTeachers, setNoOfTeachers] = useState("");
  const [mandatorySubjects, setMandatorySubjects] = useState("");
  const [optionalSubjects, setOptionalSubjects] = useState("");

  const [addMode, setAddMode] = useState(false);
  const [parentEditMode, setParentEditMode] = useState(false);
  const [childEditMode, setChildEditMode] = useState(false);

  const onSubmitClickHandler = () => {
    let newObj = {
      id : studClass + "-@",
      parentClass: "",
      studClass: studClass,
      noOfStudents: noOfStudents,
      timeTable: timeTable,
      noOfTeachers: noOfTeachers,
      mandatorySubjects: mandatorySubjects,
      optionalSubjects: optionalSubjects,
    };

    // let newUserData = [...userData, newObj];
    // newUserData.sort((a,b)=>{
    //   let arrA = a.id.split("-");
    //   let arrB = b.id.split("-");
    //   // console.log(arrA,arrB)
    //   return parseInt(arrA[0]) - parseInt(arrB[0])
    // })
    // newUserData.sort((a, b) => parseInt(a.studClass) - parseInt(b.studClass));

    let newUserData = [...userData, newObj];
    newUserData.sort((a,b)=>{
      let arrA = a.id.split("-");
      let arrB = b.id.split("-");
      // console.log(arrA,arrB)
      if(parseInt(arrA[0]) === parseInt(arrB[0]))
      {
        // console.log(arrA[1].charCodeAt(),arrB[1].charCodeAt())
        return arrA[1].charCodeAt(0) - arrB[1].charCodeAt(0);
      }
      return parseInt(arrA[0]) - parseInt(arrB[0])
    })
    setUserData([...newUserData]);
    setStudClass("");
    setNoOfStudents("");
    setTimeTable("Yes");
    setNoOfTeachers("");
    setMandatorySubjects("");
    setOptionalSubjects("");
  };

  const onAddSubmitClickHandler = () => {
    let newObj = {
      id:parentClass+"-"+studClass.toUpperCase(),
      parentClass: parentClass,
      studClass: studClass.toUpperCase(),
      noOfStudents: noOfStudents,
      timeTable: timeTable,
      noOfTeachers: noOfTeachers,
      mandatorySubjects: mandatorySubjects,
      optionalSubjects: optionalSubjects,
    };

    let newUserData = [...userData, newObj];
    newUserData.sort((a,b)=>{
      let arrA = a.id.split("-");
      let arrB = b.id.split("-");
      // console.log(arrA,arrB)
      if(parseInt(arrA[0]) === parseInt(arrB[0]))
      {
        // console.log(arrA[1].charCodeAt(),arrB[1].charCodeAt())
        return arrA[1].charCodeAt(0) - arrB[1].charCodeAt(0);
      }
      return parseInt(arrA[0]) - parseInt(arrB[0])
    })
    // console.log(newUserData)
    
    setUserData([...newUserData]);
    setParentClass("");
    setStudClass("");
    setNoOfStudents("");
    setTimeTable("Yes");
    setNoOfTeachers("");
    setMandatorySubjects("");
    setOptionalSubjects("");
    setAddMode(false);
  };

  const onAddClickHandler = (studclass) => {
    setChildEditMode(false);
    setParentEditMode(false);
    setParentClass(studclass);
    setAddMode(true);
    setStudClass("");
    setNoOfStudents("");
    setTimeTable("Yes");
    setNoOfTeachers("");
    setMandatorySubjects("");
    setOptionalSubjects("");
  };

  const onEditChildClickHandler = (data) => {
    setAddMode(false);
    setParentEditMode(false);
    setChildEditMode(true);
    setParentClass(data.parentClass);
    setStudClass(data.studClass);
    setNoOfStudents(data.noOfStudents);
    setTimeTable(data.timeTable);
    setNoOfTeachers(data.noOfTeachers);
    setMandatorySubjects(data.mandatorySubjects);
    setOptionalSubjects(data.optionalSubjects);
  };

  const onEditParentClickHandler = (data) => {
    setAddMode(false);

    setChildEditMode(false);
    setParentEditMode(true);
    // setParentClass(data.parentClass)
    setStudClass(data.studClass);
    setNoOfStudents(data.noOfStudents);
    setTimeTable(data.timeTable);
    setNoOfTeachers(data.noOfTeachers);
    setMandatorySubjects(data.mandatorySubjects);
    setOptionalSubjects(data.optionalSubjects);
  };

  const onParentEditSubmitClickHandler = () => {
    let oldUserData = userData;
    oldUserData.forEach((item) => {
      if (item.studClass === studClass) {
        item.noOfStudents = noOfStudents;
        item.timeTable = timeTable;
        item.noOfTeachers = noOfTeachers;
        item.mandatorySubjects = mandatorySubjects;
        item.optionalSubjects = optionalSubjects;
      }
    });
    setUserData([...oldUserData]);
    setParentEditMode(false);
    setStudClass("");
    setNoOfStudents("");
    setTimeTable("Yes");
    setNoOfTeachers("");
    setMandatorySubjects("");
    setOptionalSubjects("");
  };

  const onChildEditSubmitClickHandler = () => {
    let oldUserData = userData;
    oldUserData.forEach((item) => {
      if (item.parentClass === parentClass && item.studClass === studClass) {
        item.noOfStudents = noOfStudents;
        item.timeTable = timeTable;
        item.noOfTeachers = noOfTeachers;
        item.mandatorySubjects = mandatorySubjects;
        item.optionalSubjects = optionalSubjects;
      }
    });
    setUserData([...oldUserData]);
    setChildEditMode(false);
    setStudClass("");
    setNoOfStudents("");
    setTimeTable("Yes");
    setNoOfTeachers("");
    setMandatorySubjects("");
    setOptionalSubjects("");
  };

  let formData = (
    <div className={classes.formCard}>
      <div>
        <p style={{ fontSize: "24px", fontFamily: "'Roboto', sans-serif" }}>
          Enter data here..
        </p>
      </div>
      <div>
        <div className={classes.inputRow}>
          <label>Class :</label>
          <input
            type="text"
            placeholder="1 - 12 ..."
            value={studClass}
            onChange={(event) => setStudClass(event.target.value)}
          />
        </div>
        <div className={classes.inputRow}>
          <label>Students Count:</label>
          <input
            type="text"
            placeholder="10"
            value={noOfStudents}
            onChange={(event) => setNoOfStudents(event.target.value)}
          />
        </div>
        <div className={classes.inputRow}>
          <label>Time Table :</label>

          <select
            value={timeTable}
            onChange={(event) => setTimeTable(event.target.value)}
          >
            <option selected defaultValue="Yes">
              Yes
            </option>
            <option defaultValue="No">No</option>
          </select>
        </div>
        <div className={classes.inputRow}>
          <label>Teachers Count:</label>
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
        <button
          className={classes.butSubmit}
          onClick={() => onSubmitClickHandler()}
        >
          Submit
        </button>
      </div>
    </div>
  );

  if (addMode) {
    formData = (
      <div className={classes.formCard}>
        <div>
          <p style={{ fontSize: "24px", fontFamily: "'Roboto', sans-serif" }}>
            Add New Class
          </p>
        </div>
        <div>
          <div className={classes.inputRow}>
            <label>Parent Class :</label>
            <input
              type="text"
              placeholder="I II III ..."
              value={parentClass}
              disabled
            />
          </div>
          <div className={classes.inputRow}>
            <label>Section :</label>
            <input
              type="text"
              placeholder="A B C ..."
              value={studClass}
              onChange={(event) => setStudClass(event.target.value)}
            />
          </div>
          <div className={classes.inputRow}>
            <label>Students Count :</label>
            <input
              type="text"
              placeholder="10"
              value={noOfStudents}
              onChange={(event) => setNoOfStudents(event.target.value)}
            />
          </div>
          <div className={classes.inputRow}>
            <label>Time Table :</label>

            <select
              value={timeTable}
              onChange={(event) => setTimeTable(event.target.value)}
            >
              <option selected defaultValue="Yes">
                Yes
              </option>
              <option defaultValue="No">No</option>
            </select>
          </div>
          <div className={classes.inputRow}>
            <label>Teachers Count :</label>
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
          <button
            className={classes.butSubmit}
            onClick={() => onAddSubmitClickHandler()}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
  if (childEditMode) {
    formData = (
      <div className={classes.formCard}>
        <div>
          <p style={{ fontSize: "24px", fontFamily: "'Roboto', sans-serif" }}>
            Edit Section Data
          </p>
        </div>
        <div>
          <div className={classes.inputRow}>
            <label>Parent Class :</label>
            <input
              type="text"
              placeholder="I II III ..."
              value={parentClass}
              disabled
            />
          </div>
          <div className={classes.inputRow}>
            <label>Section :</label>
            <input
              type="text"
              placeholder="A B C ..."
              value={studClass}
              onChange={(event) => setStudClass(event.target.value)}
              disabled
            />
          </div>
          <div className={classes.inputRow}>
            <label>Students Count:</label>
            <input
              type="text"
              placeholder="10"
              value={noOfStudents}
              onChange={(event) => setNoOfStudents(event.target.value)}
            />
          </div>
          <div className={classes.inputRow}>
            <label>Time Table :</label>

            <select
              value={timeTable}
              onChange={(event) => setTimeTable(event.target.value)}
            >
              <option selected defaultValue="Yes">
                Yes
              </option>
              <option defaultValue="No">No</option>
            </select>
          </div>
          <div className={classes.inputRow}>
            <label>Teachers Count:</label>
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
          <button
            className={classes.butSubmit}
            onClick={() => onChildEditSubmitClickHandler()}
          >
            Edit
          </button>
        </div>
      </div>
    );
  }

  if (parentEditMode) {
    formData = (
      <div className={classes.formCard}>
        <div>
          <p style={{ fontSize: "24px", fontFamily: "'Roboto', sans-serif" }}>
            Edit Class Data
          </p>
        </div>
        <div>
          <div className={classes.inputRow}>
            <label>Class :</label>
            <input
              type="text"
              placeholder="1 - 12..."
              value={studClass}
              onChange={(event) => setStudClass(event.target.value)}
              disabled
            />
          </div>
          <div className={classes.inputRow}>
            <label>Students Count:</label>
            <input
              type="text"
              placeholder="10"
              value={noOfStudents}
              onChange={(event) => setNoOfStudents(event.target.value)}
            />
          </div>
          <div className={classes.inputRow}>
            <label>Time Table :</label>

            <select
              value={timeTable}
              onChange={(event) => setTimeTable(event.target.value)}
            >
              <option selected defaultValue="Yes">
                Yes
              </option>
              <option defaultValue="No">No</option>
            </select>
          </div>
          <div className={classes.inputRow}>
            <label>Teachers Count:</label>
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
          <button
            className={classes.butSubmit}
            onClick={() => onParentEditSubmitClickHandler()}
          >
            Edit
          </button>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <p className={classes.heading}>Class Management System</p>
      <div className={classes.mainContainer}>
        <div className={classes.leftContainer}>
          {userData.length > 0 ? (
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
                  <div
                    key={item.id}
                    className={classes.tableContent}
                  >
                    {item.parentClass ? (
                      <span>{item.parentClass + "-" + item.studClass}</span>
                    ) : (
                      <span>{item.studClass}</span>
                    )}

                    <span>{item.noOfStudents}</span>
                    <span>{item.timeTable}</span>
                    <span>{item.noOfTeachers}</span>
                    <span>{item.mandatorySubjects}</span>
                    <span>{item.optionalSubjects}</span>
                    <span>
                      {item.parentClass ? (
                        <button onClick={() => onEditChildClickHandler(item)}>
                          Edit{" "}
                        </button>
                      ) : (
                        <div>
                          <button
                            onClick={() => onAddClickHandler(item.studClass)}
                          >
                            Add{" "}
                          </button>
                          /
                          <button
                            onClick={() => onEditParentClickHandler(item)}
                          >
                            Edit{" "}
                          </button>
                        </div>
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : (
            <div style={{ marginLeft: "300px" }}>
              No Data.Please insert some from right panel
            </div>
          )}

          <div></div>
        </div>
        <div className={classes.rightContainer}>{formData}</div>
      </div>
    </React.Fragment>
  );
};

export default Home;
