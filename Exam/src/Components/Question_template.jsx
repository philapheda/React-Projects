import React, { useState } from "react";

function Question_template(props) {
  const [count, setcount] = useState(0);

  function handleChange(event) {
    if (event.target.value === props.ans) {
      console.log(event.target.value, props.ans);

      // Calculate the new count value
      const newCount = count + 1;

      // Update state
      setcount(newCount);

      // Pass the updated count to the parent function
      props.fun(newCount);
    }
  }

  console.log(count);

  return (
    <div className="shadow-lg p-7">
      <p className="text-lg mb-2">
        {props.num}. {props.question}
      </p>
      <hr />
      <ul className={`flex flex-col gap-2`}>
        <li>
          <input
            type="radio"
            id="A"
            name={props.question}
            value={props.option[0]}
            onChange={handleChange}
          />
          <label htmlFor="A" className={`ml-3`}>
            A. {props.option[0]}
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="B"
            name={props.question}
            value={props.option[1]}
            onChange={handleChange}
          />
          <label htmlFor="B" className={`ml-3`}>
            B. {props.option[1]}
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="C"
            name={props.question}
            value={props.option[2]}
            onChange={handleChange}
          />
          <label htmlFor="C" className={`ml-3`}>
            C. {props.option[2]}
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="D"
            name={props.question}
            value={props.option[3]}
            onChange={handleChange}
          />
          <label htmlFor="D" className={`ml-3`}>
            D. {props.option[3]}
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Question_template;
