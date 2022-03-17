import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import { FormControl } from 'react-bootstrap'

function Input (props) {
  const { label, name, ...rest } = props
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field as={FormControl} id={name} name={name} {...rest} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Input
