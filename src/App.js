import React, { useState } from "react";
import "./App.css";
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from "./Character";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { COPY_Fail, COPY_SUCCESS } from "./message";

import Numbers from "./Components/Numbers";
import LowerCase from "./Components/LowerCase";
import Symbols from "./Components/Symbols";
import UpperCase from "./Components/UpperCase";
import PasswordLength from "./Components/PasswordLength";
import PasswordBox from "./Components/PasswordBox";

export default function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(26);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handleGeneratePassword = () => {
    if (
      !includeUpperCase &&
      !includeLowerCase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      notify("To generate password you must select atleast one checkbox", true);
    } else {
      let characterList = "";
      if (includeNumbers) {
        characterList = characterList + numbers;
      }
      if (includeUpperCase) {
        characterList = characterList + upperCaseLetters;
      }
      if (includeLowerCase) {
        characterList = characterList + lowerCaseLetters;
      }
      if (includeSymbols) {
        characterList = characterList + specialCharacters;
      }
      setPassword(createPassword(characterList));
      notify("Password is generated successfully", false);
    }
  };

  const createPassword = (characterList) => {
    let password = "";
    const characterListLength = characterList.length;
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      password = password + characterList.charAt(characterIndex);
    }
    return password;
  };

  const handleCopyPassword = (e) => {
    if (password === "") {
      notify(COPY_Fail, true);
    } else {
      copyToClipboard(password);
      notify(COPY_SUCCESS);
    }
  };

  const copyToClipboard = (password) => {
    navigator.clipboard.writeText(password);
  };

  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="generator">
          <h2 className="generator__header">Password Generator</h2>
          <PasswordBox
            password={password}
            handleCopyPassword={handleCopyPassword}
          />
          <PasswordLength
            passwordLength={passwordLength}
            setPasswordLength={setPasswordLength}
          />
          <UpperCase
            includeUpperCase={includeUpperCase}
            setIncludeUpperCase={setIncludeUpperCase}
          />
          <LowerCase
            includeLowerCase={includeLowerCase}
            setIncludeLowerCase={setIncludeLowerCase}
          />
          <Numbers
            includeNumbers={includeNumbers}
            setIncludeNumbers={setIncludeNumbers}
          />
          <Symbols
            includeSymbols={includeSymbols}
            setIncludeSymbols={setIncludeSymbols}
          />
          <button onClick={handleGeneratePassword} className="generator__btn">
            Generate Password
          </button>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </div>
  );
}
