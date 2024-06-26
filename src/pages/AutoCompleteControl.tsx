import { ReactElement } from "react";
import { AutoCompleteControlProps } from "../interfaces/global.interaces";

function AutoCompleteControl(props: AutoCompleteControlProps): ReactElement {
  const { controlKey, type, validationObject, searchTerm, setSearchTerm } =
    props;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="">
      <div className="d-flex flex-column">
        <label
          className=""
          id={`label-autocomplete-control-${controlKey}`}
          htmlFor={`input-autocomplete-control-${controlKey}`}
        >
          Auto-Complete Field here*
        </label>
        <input
          type={type}
          required={validationObject.required}
          id={`input-autocomplete-control-${controlKey}`}
          className=""
          value={searchTerm}
          onChange={handleInputChange}
        />
        {validationObject.required && <div>bhar de</div>}
      </div>
    </div>
  );
}

export default AutoCompleteControl;
