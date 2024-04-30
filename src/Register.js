// src/Register.js

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Register = () => {
  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', values);
      console.log('Registration successful:', response.data);
      // Redirect to login page upon successful registration
      // Replace '/login' with the desired route
      window.location.href = '/login';
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle registration error (e.g., display error message to user)
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label>Password:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
