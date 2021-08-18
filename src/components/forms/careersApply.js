import React from "react"
import { Formik } from "formik"
import { navigate } from "gatsby"
import {
  initialValues,
  validationSchema,
} from "./validation/careersFormValidation"

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
          first: values.first,
          last: values.last,
          position: values.position,
          notes: values.notes,
          resume: values.resume,
        }
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "careers", ...values }),
        })
          .then(result => {
            navigate("/thank-you")
          })
          .catch(error => alert(error))
      }}
    >
      {({ handleSubmit, handleChange, values, errors, setFieldValue }) => {
        return (
          <div className="form-container">
            <form
              name="careers"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              style={{ padding: "0", marginTop: "2em" }}
              onSubmit={handleSubmit}
            >
              <div className="label-container">
                <label>
                  <p className="label-title">
                    First <p className="warning"> {errors.first}</p>
                  </p>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={values.first}
                    name="first"
                  />{" "}
                </label>
                <label>
                  <p className="label-title">
                    Last <p className="warning"> {errors.last}</p>
                  </p>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={values.last}
                    name="last"
                  />
                </label>
              </div>
              <div className="label-container">
                <label>
                  <p className="label-title">
                    Position <p className="warning"> {errors.position}</p>
                  </p>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={values.position}
                    name="position"
                  />{" "}
                </label>
              </div>
              <div style={{ borderBottom: "none" }} className="label-container">
                <label style={{ borderBottom: "none" }}>
                  <p className="label-title">
                    Notes <p className="warning"> {errors.email}</p>
                  </p>
                  <textarea
                    type="text"
                    onChange={handleChange}
                    value={values.notes}
                    name="notes"
                  />{" "}
                </label>
              </div>
              <p>Resume</p>
              <div id="upload_button">
                <label className="label-upload">
                  <input
                    name="resume"
                    onChange={event => {
                      setFieldValue("resume", event.currentTarget.files[0])
                    }}
                    type="file"
                  />
                  <div className="upload-custom">{values.resume.name}</div>
                  <div className="browse-button">
                    <p>Browse...</p>
                  </div>
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
