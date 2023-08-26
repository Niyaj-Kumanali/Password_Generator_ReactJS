import React  from "react";

export default function AddLowerCase(props)
{
    return (
        <div className="form-group">
            <label htmlFor="lowercase-letters">Add Lowercase Letters</label>
            <input checked={props.includeLowerCase} onChange={(e) => props.setIncludeLowerCase(e.target.checked)} type="checkbox" id="lowercase-letters" name="lowercase-letters" />
          </div>
    );
}