const Contacts = () => {
  const formHandler = (e) => {
    e.preventDefault();
    alert("This site is no longer talking registrations");
  };
  return (
    <div className="contacts-container" id="contact">
      <div className="contact-header">
        <div className="title">
          <p>THIS IS</p>
          <h2>YOUR TIME</h2>
        </div>
        <div className="header-subtext">
          <p>Your Journey is almost underway.</p>
          <p>Reach out to our team and they will help you get set up</p>
        </div>
      </div>
      <form>
        <label htmlFor="nameLabel">Full Name</label>
        <input id="nameLabel" name="nameLabel" type="text" />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" type="text-area" rows="10" />
        <button onClick={formHandler} type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Contacts;
