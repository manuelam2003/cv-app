function GeneralForm({ onNameChange, onNumberChange, onEmailChange }) {
  return (
    <form className="generalForm">
      <h2>Full name</h2>
      <input type="text" onChange={onNameChange} />
      <h2>Phone number</h2>
      <input type="text" onChange={onNumberChange} />
      <h2>Email</h2>
      <input type="email" onChange={onEmailChange} />
    </form>
  );
}

export default GeneralForm;
