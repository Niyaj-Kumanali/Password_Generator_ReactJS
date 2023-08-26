import React from 'react'

export default function Numbers(props) {
    return (
        <div className="form-group">
            <label htmlFor="include-numbers">Include Numbers</label>
            <input checked={props.includeNumbers} onChange={(e) => props.setIncludeNumbers(e.target.checked)} type="checkbox" id="include-numbers" name="include-numbers" />
          </div>
    )
}