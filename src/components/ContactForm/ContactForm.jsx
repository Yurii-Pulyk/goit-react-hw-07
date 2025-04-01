import * as Yup from 'yup';
import { useId } from 'react';
import { Formik, Form, Field } from 'formik';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  number: Yup.string().required('Required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const contactFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            className={css.input}
          />
          {errors.name && touched.name ? <div>{errors.name}</div> : null}
          <label htmlFor={contactFieldId}>Contact</label>
          <Field
            type="tel"
            name="number"
            id={contactFieldId}
            className={css.input}
          />
          {errors.number && touched.number ? <div>{errors.number}</div> : null}
          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
