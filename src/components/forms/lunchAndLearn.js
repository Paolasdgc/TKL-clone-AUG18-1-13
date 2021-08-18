import React from "react"
import { Formik } from "formik"
import { navigate } from "gatsby"
import {
  initialValues,
  validationSchema,
} from "./validation/lunchLearnFormValidation"
import Select from "react-select"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function DesignForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => {
        const body = {
          name: values.name,
          company: values.company,
          website: values.website,
          phone: values.phone,
          selectedLunchTour: values.selectedLunchTour,
          selectedPlantTour: values.selectedPlantTour,
          selectedLocation: values.selectedLocation,
        }

        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "lunch-learn", ...body }),
        })
          .then(result => {
            navigate("/thank-you")
          })

          .catch(error => alert(`error`))
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => {
        return (
          <div className="form-container">
            <form
              name="lunch-learn"
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
                    Email <p className="warning"> {errors.email}</p>
                  </p>
                  <input
                    type="email"
                    onChange={handleChange}
                    value={values.email}
                    name="email"
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
                <label>
                  <p className="label-title">
                    Phone <p className="warning"> {errors.phone}</p>
                  </p>
                  <input
                    onChange={handleChange}
                    value={values.phone}
                    type="tel"
                    name="phone"
                  />
                </label>
              </div>

              <div className="label-container">
                <label className="remove-bottom-border">
                  <p className="label-title">
                    Choose Presentation{" "}
                    <p className="warning"> {errors.selectedPresentation}</p>
                  </p>
                  <Select
                    placeholder="Select.."
                    onChange={selectedOption => {
                      handleChange("selectedPresentation")(selectedOption.value)
                    }}
                    styles={customStyles}
                    options={initialValues.presentations}
                  />
                </label>
              </div>
              <div className="label-container">
                <label className="remove-bottom-border">
                  <p className="label-title">
                    Choose Plant Tour
                    <p className="warning"> {errors.selectedProduct}</p>
                  </p>
                  <Select
                    placeholder="Select.."
                    onChange={selectedOption => {
                      handleChange("selectedProduct")(selectedOption.value)
                    }}
                    styles={customStyles}
                    options={initialValues.plantTourProducts}
                  />
                </label>
              </div>
              <div className="label-container">
                <label className="remove-bottom-border">
                  <p className="label-title">
                    Choose Plant Location
                    <p className="warning"> {errors.selectedPlantLocation}</p>
                  </p>
                  <Select
                    placeholder="Select.."
                    onChange={selectedOption => {
                      handleChange("selectedLocation")(selectedOption.value)
                    }}
                    styles={customStyles}
                    options={initialValues.plantTourLocation}
                  />
                </label>
              </div>
              <button type="submit">SUBMIT</button>
            </form>
          </div>
        )
      }}
    </Formik>
  )
}

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "#14a94b" : "white",
    backgroundColor: state.isSelected ? "white" : "#14a94b",
    borderBottom: "1px solid white",
  }),
  control: () => ({
    marginTop: "0.5em",
    alignItems: "center",
    minHeight: "38px",
    backgroundColor: "#14a94b",
    borderRadius: "1px",
    borderWidth: "1px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    position: "relative",
    borderColor: "white",
    cursor: "pointer",
    border: "1px solid white",
  }),
  placeholder: (provided, state) => ({
    color: "white",
  }),

  singleValue: (provided, state) => ({
    color: "white",
    marginLeft: "2px",
    marginRight: "2px",
    maxWidth: "calc(100% - 8px)",
    overflow: "hidden",
    position: "absolute",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    top: "50%",
    transform: "translateY(-50%)",
    boxSizing: "borderBox",
  }),

  indicatorSeparator: (provided, state) => ({
    alignSelf: "stretch",
    backgroundColor: "white",
    marginLeft: "2px",
    width: "1px",
    boxSizing: "border-box",
  }),
}
