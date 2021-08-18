import * as Yup from "yup"

export const validationSchema = Yup.object({
  name: Yup.string().required("* Required"),
  jobTitle: Yup.string().required("* Required"),
  email: Yup.string().required("* Required"),
  website: Yup.string().notRequired(""),
  company: Yup.string().required("* Required"),
  phone: Yup.string().required("* Required"),
})

export const initialValues = {
  name: "",
  jobTitle: "",
  email: "",
  website: "",
  company: "",
  phone: "",
}
