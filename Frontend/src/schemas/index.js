import * as yup from "yup"

const basicSchema = yup.object().shape({
    nom: yup.string("Please enter a valid name").required("Required"),
    num_serie: yup.number().positive().integer().required("Required"),
    designation: yup.string().required("Required"),
    marque: yup.string().required("Required"),
    madele: yup.string().required("Required"),
    details: yup.string().required("Required"),
    date: yup.date().required("Required")

})

export default basicSchema