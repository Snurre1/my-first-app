import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as R from "../register/index.styled"

const schema = yup
  .object({
    fullName: yup.string().min(3, 'Your full name should be at least 3 characters.').max(20).required("Please enter your full name"),
      subject: yup.string().min(3, 'Your subject should be at least 3 characters.').max(20).required("Please enter your subject"),
      email: yup.string().email().required(),
      body: yup.string().min(3,'Your body should be at least 3 characters.').max(40).required("Please enter your message"),
  })
  .required();

function RegisterPerson() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data)
  }

    return (
      <div>
       <R.registerStraight> <h1>Register</h1></R.registerStraight>
            <R.widthForm>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Full Name</label>
                    <input type="text" name="fullName" placeholder='Full Name' {...register('fullName')} />
                    <p>{errors.fullName?.message}</p>
                    <label>Subject</label>
                    <input type="text" name="Subject" placeholder='Subject' {...register('subject')} />
                    <p>{errors.subject?.message}</p>
                    <label>E-mail</label>
                    <input type="text" name="email" placeholder='E-mail' {...register('email')} />
                    <p>{errors.email?.message}</p>
                    <label>Body</label>
                    <input type="text" name="body" placeholder='Body' {...register('body')} />
                    <p>{errors.body?.message}</p>
                    <R.buttonStyling type='submit'>Submit</R.buttonStyling>
                </form>
            </R.widthForm>
        </div>
  );
}

export default RegisterPerson;