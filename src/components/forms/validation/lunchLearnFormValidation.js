import * as Yup from "yup"

export const validationSchema = Yup.object({
  name: Yup.string().required("* Required"),
  email: Yup.string().required("* Required"),
  company: Yup.string().required("* Required"),
  phone: Yup.string().required("* Required"),
  selectedPresentation: Yup.string().required("* Required"),
  selectedProduct: Yup.string().required("* Required"),
  selectedLocation: Yup.string().required("* Required"),
})

export const initialValues = {
  name: "",
  company: "",
  phone: "",
  selectedPresentation: "",
  selectedProduct: "",
  selectedLocation: "",
  presentations: [
    {
      value: "Architectural Precast Concrete",
      label: "Architectural Precast Concrete",
    },
    { value: "Structural Options", label: "Structural Options" },
    {
      value: "Hollow Core Floor and Roof Slabs",
      label: "Hollow Core Floor and Roof Slabs",
    },
    {
      value: "Designing Precast Concrete Schools",
      label: "Designing Precast Concrete Schools",
    },
    {
      value: "Designing Precast Concrete Schools",
      label: "Designing Precast Concrete Schools",
    },
    {
      value: "Precast Concrete Helps attain LEED Certification",
      label: "Precast Concrete Helps attain LEED Certification",
    },

    {
      value: "Sustainable Practices for Designing Parking Garages",
      label: "Sustainable Practices for Designing Parking Garages",
    },
    {
      value: "Accelerated Bridge Construction",
      label: "Accelerated Bridge Construction",
    },
    {
      value: "Total Precast Concrete Structures",
      label: "Total Precast Concrete Structurestruction",
    },
    {
      value: "Total Precast Concrete Structures",
      label: "Total Precast Concrete Structurestruction",
    },
    {
      value: "Total Precast Concrete Structures",
      label: "Total Precast Concrete Structurestruction",
    },
    {
      value: "Precast Concrete Commercial and Industrial Buildings",
      label: "Precast Concrete Commercial and Industrial Buildings",
    },
    {
      value: "CPCI Life Cycle Assessment",
      label: "CPCI Life Cycle Assessment",
    },
  ],
  plantTourProducts: [
    {
      value: "Architectural Precast Concrete",
      label: "Architectural Precast Concrete",
    },
    {
      value: "Structural Precast Concrete",
      label: "Structural Precast Concrete",
    },
  ],

  plantTourLocation: [
    {
      value: "Halifax, NS",
      label: "Halifax, NS",
    },
    {
      value: "Saint John, NB",
      label: "Saint John, NB",
    },
    {
      value: "Quebec City, QC",
      label: "Quebec City, QC",
    },
    {
      value: "Montreal, QC",
      label: "Montreal, QC",
    },

    {
      value: "Ottawa, ON",
      label: "Ottawa, ON",
    },
    {
      value: "Toronto, ON",
      label: "Toronto, ON",
    },
    {
      value: "Sudbury, ON",
      label: "Sudbury, ON",
    },
    {
      value: "Windsor, ON",
      label: "Windsor, ON",
    },
    {
      value: "Winnipeg, MB",
      label: "Winnipeg, MB",
    },
    {
      value: "Saskatoon, SK",
      label: "Saskatoon, SK",
    },
    {
      value: "Calgary, AB",
      label: "Calgary, AB",
    },
    {
      value: "Edmonton, AB",
      label: "Edmonton, AB",
    },
    {
      value: "Vancouver, BC",
      label: "Vancouver, BC",
    },
    {
      value: "Vancouver Island, BC",
      label: "Vancouver Island, BC",
    },
  ],
}
