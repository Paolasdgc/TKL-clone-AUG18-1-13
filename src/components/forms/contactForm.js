import React from "react"
import { Formik } from "formik"
import { navigate } from "gatsby"
import {
  initialValues,
  validationSchema,
} from "./validation/contactFormValidation"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function ContactForm({ data, copy }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => {
        const body = {
          name: values.name,
          jobTitle: values.jobTitle,
          company: values.company,
          email: values.email,
          website: values.website,
          phone: values.phone,
        }

        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...values }),
        })
          .then(() => {
            navigate("/thank-you", { state: { body } })
          })
          .catch(error => alert(error))
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => {
        return (
          <div className="form-container">
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <div className="label-container">
                <label>
                  <p className="label-title">
                    Name <p className="warning"> {errors.name}</p>
                  </p>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={values.name}
                    name="name"
                  />{" "}
                </label>
                <label>
                  <p className="label-title">
                    Job Title <p className="warning"> {errors.jobTitle}</p>
                  </p>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={values.jobTitle}
                    name="jobTitle"
                  />
                </label>
              </div>
              <div className="label-container">
                <label>
                  <p className="label-title">
                    Company <p className="warning"> {errors.company}</p>
                  </p>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={values.company}
                    name="company"
                  />{" "}
                </label>
              </div>
              <div className="label-container">
                <label>
                  <p className="label-title">
                    Email <p className="warning"> {errors.email}</p>
                  </p>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                  />{" "}
                </label>
                <label>
                  <p className="label-title">
                    Website <p className="warning"> {errors.website}</p>
                  </p>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={values.website}
                    name="website"
                  />{" "}
                </label>
              </div>
              <div className="label-container">
                <label>
                  <p className="label-title">
                    Number <p className="warning"> {errors.phone}</p>
                  </p>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={values.phone}
                    name="phone"
                  />{" "}
                </label>
              </div>
              <button type="submit">
                SUBMIT <ArrowRight />
              </button>
            </form>
          </div>
        )
      }}
    </Formik>
  )
}

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      fill="white"
      height="25px"
      width="2em"
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <path
        d="M508.875 248.458l-160-160c-4.167-4.167-10.917-4.167-15.083 0-4.167 4.167-4.167 10.917 0 15.083l141.792 141.792H10.667C4.771 245.333 0 250.104 0 256s4.771 10.667 10.667 10.667h464.917L333.792 408.458c-4.167 4.167-4.167 10.917 0 15.083a10.634 10.634 0 007.542 3.125c2.729 0 5.458-1.042 7.542-3.125l160-160c4.166-4.166 4.166-10.916-.001-15.083z"
        className="active-path"
        data-original="#000000"
      ></path>
    </svg>
  )
}
