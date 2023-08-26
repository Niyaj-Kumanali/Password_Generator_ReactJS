import React from "react";

export default function Symbols(props)
{
    return (
        <div className="form-group">
            <label htmlFor="include-symbols">Include Symbols</label>
            <input checked={props.includeSymbols} onChange={(e) => props.setIncludeSymbols(e.target.checked)} type="checkbox" id="include-symbols" name="include-symbols" />
          </div>
    )
}