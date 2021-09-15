import React, { useState } from "react";
import './App.css';
import Field from "./components/fileds";
import Languages from "./components/languages";
import Translate from "./components/translate";

const App = () => {
  const [language, setLanguage] = useState("ru");
  const [text, setText] = useState("");

  return (
    <div>
      <Field label="Enter English" onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}

export default App
