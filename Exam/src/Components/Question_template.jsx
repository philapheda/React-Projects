import React, { useState } from 'react'

function Question_template(props) {
    const [selected, setselected] = useState(false)
    function handleChange (event) {
        setselected(event.target.value)
        console.log(event)
    }
    const option = props.option
    const displayed = option.map((option) => (
        <label key={option}>
          <input
            name={option}
            type="radio"
            value={option}
            checked = {selected === name}
            onChange={handleChange}
          />
          {option}
        </label>
      ))
  return (
    <div>
        <p>props.question</p>
        {displayed}
    </div>
  )
}

export default Question_template