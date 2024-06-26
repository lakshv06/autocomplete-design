import { useState } from "react";
import "./App.css";
import AutoCompleteControl from "./pages/AutoCompleteControl";

function App() {
  const firstAutoCompValObject = {
    required: true,
  };

  const [searchTerm, setSearchTerm] = useState<string>("");

  // add values for getting search terms, cache values and then show top 10 in search term in that.
  // Now filter values on the basis of that

  return (
    <div className="m-3 p-3 rounded-2 border border-secondary-subtle">
      <div className="d-flex flex-column">Put autocomplete controls here.</div>
      <AutoCompleteControl
        controlKey="auto-1"
        type="text"
        validationObject={firstAutoCompValObject}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
}

export default App;
