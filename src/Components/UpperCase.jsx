import React from "react";

export default function UpperCase(props)
{
    return (
        <div className="form-group">
            <label htmlFor="uppercase-letters">Add Uppercase Letters</label>
            <input checked={props.includeUpperCase} onChange={(e) => props.setIncludeUpperCase(e.target.checked)} type="checkbox" id="uppercase-letters" name="uppercase-letters" />
          </div>
    );
}