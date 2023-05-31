import '../styles/utilities.css'
import '../styles/Contact.css'
import { Formik } from 'formik'

import * as Yup from 'yup'

const Contact = () => {
  const ValidationSchema = Yup.object().shape({
    name: Yup.string()
      .max(50, 'The name is too long')
      .required('Name is Required'),
    email: Yup.string().email('Invalid Email').required('Email is required'),
    message: Yup.string()
      .max(200, 'Message has reached the max limit')
      .required('Message is required'),
  })
  return (
    <div className=' contact__container' id='experience_page'>
      <main className='form__container'>
        <h1>Contact Form</h1>

        <Formik
          // initial values
          initialValues={{ name: '', email: '', message: '' }}
          // Validation
          validationSchema={ValidationSchema}
          validateOnChange={true}
          validateOnBlur={true}
          // Submit
          onSubmit={(values) => console.log(values)}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
            handleBlur,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className='form__group'>
                <label
                  htmlFor='name'
                  style={{
                    color: `${
                      errors.name && touched.name
                        ? 'rgb(248 113 113)'
                        : '#3e497a'
                    }`,
                  }}
                >
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : (
                    'Name'
                  )}
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Your Name'
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <div className='form__group'>
                <label
                  htmlFor='email'
                  style={{
                    color: `${
                      errors.email && touched.email
                        ? 'rgb(248 113 113)'
                        : '#3e497a'
                    }`,
                  }}
                >
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : (
                    'Email'
                  )}
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Your Email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className='form__group'>
                <label
                  htmlFor='message'
                  style={{
                    color: `${
                      errors.message && touched.message
                        ? 'rgb(248 113 113)'
                        : '#3e497a'
                    }`,
                  }}
                >
                  {errors.message && touched.message ? (
                    <div>{errors.message}</div>
                  ) : (
                    'Message'
                  )}
                </label>
                <textarea
                  name='message'
                  id='message'
                  placeholder='Your kind Words'
                  cols={30}
                  rows={10}
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></textarea>
              </div>

              <button type='submit'>Send message</button>
            </form>
          )}
        </Formik>
      </main>
    </div>
  )
}
export default Contact
