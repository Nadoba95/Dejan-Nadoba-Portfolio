import { motion } from "framer-motion";
import { linksData } from "../../data/linksData";

import "./Contact.css";

const email = "https://formsubmit.co/ajax/dejannadobaa@gmail.com";

function Contact() {
  const transition = { type: "spring", duration: 1, delay: 0.5 };

  function submitHandler(e) {
    e.preventDefault();

    // fetch(email, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: "",
    //     title: "",
    //     message: "I'm from Devro LABS",
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error(error));
  }

  return (
    <div className="contact" id="contact">
      <div className="title">Contact</div>
      <form onSubmit={submitHandler} action={email} method="post">
        <div className="form-control">
          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div className="form-control">
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            name="message"
            id="message"
            rows={10}
            maxLength="350"
          />
        </div>
        <button type="submit">Send</button>
      </form>

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
    </div>
  );
}

export default Contact;
