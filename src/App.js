import "./styles.css";
import { useState, useEffect } from "react";

const App = () => {
  const [name, setName] = useState("friend");
  const [personType, setPersonType] = useState("lovely");

  const reactions = {
    morning: "Awesome! ☀️",
    afternoon: "Fantastic! 😎",
    evening: "Amazing! 🌙"
  };

  /*1. First run of useEffect is guaranteed no matter
  if there is anything in dependency array or what
  is in it. No dependency array means it will run
  everytime there is a re-render (state is changed)
  which is not ideal*/
  /*useEffect(() => {
    console.log("hello")
  })*/

  /*2. Add empty dependency array, console log statement
  only applies once at start*/
  /*useEffect(() => {
    console.log("hello, again!")
  }, [])*/

  /*3. Adding a specific state value means the
  initial run + only when that state value is 
  changed */
  useEffect(() => {
    console.log("hello, times three!")
  }, [personType])
  
  return (
    <div className="App">
      <div className="form-element">
        <label htmlFor="name" />
        Name:
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-element">
        <label htmlFor="personType" />
        Select a person type:
        <select
          id="personType"
          type="text"
          value={personType}
          onChange={(e) => setPersonType(e.target.value)}
        >
          <option value="lovely">Choose one!</option>
          <option value="morning">morning</option>
          <option value="afternoon">afternoon</option>
          <option value="evening">evening</option>
        </select>
        <h1>Hello there, {name} !</h1>
        <h3>
          You are{" "}
          {personType === "morning" || personType === "lovely" ? "a" : "an"}{" "}
          {personType} person. {reactions[personType]}
        </h3>
        <p>
          Update the name and then have a look at the console for the result of
          the useEffect call. :)
        </p>
      </div>
    </div>
  );
};

export default App;
