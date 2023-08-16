import {Form, Formik} from "formik";
import {PriceRateProfile} from "./PriceRateProfile/PriceRateProfile.tsx";

const RenderedForm = () => {
  return (
    <>
      <Formik
      initialValues={{test: "test"}}
      onSubmit={(test) => console.log(test)}
      >
        <Form>
          <PriceRateProfile />
        </Form>
      </Formik>
    </>
  )
}
export default RenderedForm;