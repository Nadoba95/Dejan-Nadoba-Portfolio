import { useState } from "react";
import { motion } from "framer-motion";
import { linksData } from "../../data/linksData";
import useInput from "../../hooks/use-input";

import "./Contact.css";

const email = "https://formsubmit.co/ajax/dejannadobaa@gmail.com";
const isNotEmpty = (value) => value.trim() !== "";

function Contact() {
  const [messageSuccessfullySent, setMessageSuccessfullySent] = useState(false);
  const transition = { type: "spring", duration: 1, delay: 0.5 };

  const desktop = window.innerWidth >= 1200;

  const {
    value: enteredEmail,
    valueIsValid: emailIsValid,
    checkValueIsValid: checkEmailIsValid,
    setEnteredValueIsValid: setEmailIsValid,
    valueChangeHandler: emailChangeHandler,
    reset: resetEmailInput,
    valueRef: emailRef,
  } = useInput(
    (value) => value.trim().includes("@") && value.trim().includes(".com")
  );

  const {
    value: enteredTitle,
    valueIsValid: titleIsValid,
    checkValueIsValid: checkTitleIsValid,
    setEnteredValueIsValid: setTitleIsValid,
    valueChangeHandler: titleChangeHandler,
    reset: resetTitleInput,
    valueRef: titleRef,
  } = useInput(isNotEmpty);

  const {
    value: enteredMessage,
    valueIsValid: messageIsValid,
    checkValueIsValid: checkMessageIsValid,
    setEnteredValueIsValid: setMessageIsValid,
    valueChangeHandler: messageChangeHandler,
    reset: resetMessageInput,
    valueRef: messageRef,
  } = useInput(isNotEmpty);

  function submitHandler(e) {
    e.preventDefault();

    setMessageSuccessfullySent(false);

    if (!checkEmailIsValid) {
      setEmailIsValid(false);
      emailRef.current.focus();
      return;
    }
    if (!checkTitleIsValid) {
      setTitleIsValid(false);
      setEmailIsValid(true);
      titleRef.current.focus();
      return;
    }
    if (!checkMessageIsValid) {
      setMessageIsValid(false);
      setTitleIsValid(true);
      messageRef.current.focus();
      return;
    }

    fetch(email, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: enteredEmail,
        title: enteredTitle,
        message: enteredMessage,
      }),
    })
      .then((response) => response.json())
      .then((data) => setMessageSuccessfullySent(true))
      .catch((error) =>
        alert(`Failed to send message, please try again...` + error.message)
      );

    resetEmailInput();
    resetTitleInput();
    resetMessageInput();
    setEmailIsValid(true);
    setTitleIsValid(true);
    setMessageIsValid(true);
  }

  const emailInputClasses = !emailIsValid ? "error" : "";
  const titleInputClasses = !titleIsValid ? "error" : "";
  const messageInputClasses = !messageIsValid ? "error" : "";

  return (
    <div className="contact" id="contact">
      <div className="title">Contact</div>
      <div>
        <div className="contact__info">
          <div>Email: dejannadobaa@gmail.com</div>
          <div>Mobile: +381614413166</div>
        </div>
        <form onSubmit={submitHandler} action={email} method="post">
          <div className="form-control">
            <label htmlFor="email">Your Email</label>
            <input
              ref={emailRef}
              type="email"
              name="email"
              className={emailInputClasses}
              id="email"
              value={enteredEmail}
              onChange={emailChangeHandler}
            />
          </div>
          {!emailIsValid && (
            <p className="error-message">Please enter a valid email</p>
          )}
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input
              ref={titleRef}
              type="text"
              name="title"
              className={titleInputClasses}
              id="title"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          {!titleIsValid && (
            <p className="error-message">Please enter a title</p>
          )}
          <div className="form-control">
            <label htmlFor="message">Message</label>
            <textarea
              ref={messageRef}
              type="text"
              name="message"
              className={messageInputClasses}
              id="message"
              rows={10}
              maxLength="350"
              value={enteredMessage}
              onChange={messageChangeHandler}
            />
          </div>
          {!messageIsValid && (
            <p className="error-message">Please write some message</p>
          )}
          {messageSuccessfullySent && (
            <p className="sent-message">
              You message is successfully sent, thank you!
            </p>
          )}
          <button className="form-btn" type="submit">
            Send
          </button>
          {desktop ? (
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={transition}
              className="social-links-container"
            >
              <ul className="social-links">
                {linksData.map((data, i) => {
                  return (
                    <li key={i}>
                      <a
                        href={data.link}
                        title={data.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {data.icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ) : (
            <div className="social-links-container">
              <ul className="social-links">
                {linksData.map((data, i) => {
                  return (
                    <li key={i}>
                      <a
                        href={data.link}
                        title={data.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {data.icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
