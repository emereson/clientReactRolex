import './pagesStyle/contact.css';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';

import emailjs from '@emailjs/browser';

const Contact = () => {
  const [inputsLength, setInputsLength] = useState({});
  const formRef = useRef();

  const handleInputChange = (fieldName, value) => {
    setInputsLength({ ...inputsLength, [fieldName]: value.length });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const form = formRef.current;

    emailjs
      .sendForm(
        'service_dftprff',
        'template_erbe4ql',
        form,
        'UQJFDTq49xU_vz5pa'
      )
      .then((result) => {
        form.reset();
        setInputsLength({});
        toast('💌 The form was submitted successfully 💌', {
          position: 'top-right',
          autoClose: 5001,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact__container">
      <section className="contact__frontPage">
        <span className="film-effect"></span>
        <img src="/15.webp" alt="contact creative art video" />
        <article className="contactFrontPage__texts">
          <h1>Are you ready to reserve your date?</h1>
          <h2>Give us all the Details!</h2>
          <p>
            WE WILL CUSTOMIZE A PACKAGE TO SUIT YOUR EVENT PERFECTLY
          </p>
          <span>
            <img src="/flecha.png" alt="flecha" />
          </span>
        </article>
        {/* <article className="contact__frontPage__teamImages">
          <img src="./02-min.jpg" alt="image 1" />
          <img src="./16-min.jpg" alt="image 2" />
          <img src="./4.jpg" alt="image 3" />
          <img src="./5.jpg" alt="image 4" />
        </article> */}
      </section>
      <section className="contact__formContainer">
        <img src="./16-min.webp" alt="image 2" />
        <form
          onSubmit={sendEmail}
          ref={formRef}
          className="contact__form"
        >
          <h2>CONTACT US</h2>
          <div className="contactForm__Div">
            <label
              htmlFor="name"
              className={` contactForm__DivLabel ${
                inputsLength?.address > 0
                  ? 'contactForm__DivLabel__animation'
                  : ''
              }`}
            >
              First Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              onChange={(e) =>
                handleInputChange('address', e.target.value)
              }
            />
          </div>
          <div className="contactForm__Div">
            <label
              htmlFor="lastName"
              className={` contactForm__DivLabel ${
                inputsLength?.lastName > 0
                  ? 'contactForm__DivLabel__animation'
                  : ''
              }`}
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={(e) =>
                handleInputChange('lastName', e.target.value)
              }
              required
            />
          </div>
          <div className="contactForm__Div">
            <label
              htmlFor="email"
              className={` contactForm__DivLabel ${
                inputsLength?.email > 0
                  ? 'contactForm__DivLabel__animation'
                  : ''
              }`}
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={(e) =>
                handleInputChange('email', e.target.value)
              }
              required
            />
          </div>
          <div className="contactForm__Div">
            <label
              htmlFor="phoneNumber"
              className={` contactForm__DivLabel ${
                inputsLength?.phoneNumber > 0
                  ? 'contactForm__DivLabel__animation'
                  : ''
              }`}
            >
              Phone Number
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              onChange={(e) =>
                handleInputChange('phoneNumber', e.target.value)
              }
              required
            />
          </div>
          <div className="contactForm__Div">
            <label
              htmlFor="typeEvent"
              className={` contactForm__DivLabel ${
                inputsLength?.typeEvent > 0
                  ? 'contactForm__DivLabel__animation'
                  : ''
              }`}
            >
              Event Type
            </label>
            <input
              id="typeEvent"
              name="typeEvent"
              type="text"
              onChange={(e) =>
                handleInputChange('typeEvent', e.target.value)
              }
              required
            />
          </div>
          <div className="contactForm__Div">
            <label
              htmlFor="date"
              className={` contactForm__DivLabel contactForm__DivLabel__animation `}
            >
              Event Date
            </label>
            <input
              type="date"
              name="date"
              defaultValue={new Date().toISOString().split('T')[0]} // Establecer la fecha actual en el formato adecuado
              required
            />
          </div>
          <div
            className="contactForm__Div"
            style={{ width: 'calc(100% - 1em)', marginTop: '2em' }}
          >
            <label
              htmlFor="message"
              className={` contactForm__DivLabel ${
                inputsLength?.message > 0
                  ? 'contactForm__DivLabel__animation2'
                  : ''
              }`}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="8"
              cols="50"
              onChange={(e) =>
                handleInputChange('message', e.target.value)
              }
              required
            />
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
