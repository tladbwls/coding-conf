import "../CSS/InputField.scss"

function InputField ({label, value, onchange, placeholder}) {
  return (
    <div className="input-field"> 
      <label>
        {label}
      </label>
      <input
        value={value}
        onChange={onchange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;