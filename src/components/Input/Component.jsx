export function Input({ id, placeholder, type }) {
  function onChangeAction() {
    console.log("change", { id });
  }

  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={onChangeAction}
      className="welcome-input"
    ></input>
  );
}
