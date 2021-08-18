import * as Yup from "yup"

export const validationSchema = Yup.object({
  first: Yup.string().required("* Required"),
  last: Yup.string().required("* Required"),
  position: Yup.string().required("* Required"),
  notes: Yup.string().notRequired(""),
  resume: Yup.mixed().required(),
})

export const initialValues = {
  first: "",
  last: "",
  position: "",
  notes: "",
  resume: {
    fileName: "",
    type: "",
    size: "",
  },
}
