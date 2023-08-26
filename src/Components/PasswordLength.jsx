import React from "react";

export default function PasswordLength(props)
{
    return (
        <div className="form-group">
            <label htmlFor="password-strength">Password length</label>
            <input className="pw" defaultValue={props.passwordLength} onChange={(e) => props.setPasswordLength(e.target.value)} type="number" id="password-stregth" name="password-strength" max="26" min="8" />
          </div>
    )
}