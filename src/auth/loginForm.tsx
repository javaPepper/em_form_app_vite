import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export function LoginForm() {
  const [isClosed, setClosed] = useState<boolean>(false);
  const [isChanged, setChanged] = useState<boolean>(false);

  interface Values {
    email: string;
    password: string;
  }

  const handleChangeVisibilty = () => {
    setChanged(!isChanged);
  };

  const handleCloseForm = () => {
    setClosed(true);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('required'),
    password: Yup.string().min(8, 'Minimum 8 symbols'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setClosed(true)
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(values as Values),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res: Response) => {
          if (!res.ok) {
            throw new Error('Server failure');
          }
          return res.json();
        })
        .then((data: Values) => {
          console.log(`Succeeded: ${data}`);
          alert('Your data delivered successfully')
        })
        .catch((err: Error) => {
          console.error(`Error: ${err.message}`);
        });
    },
  });

  return (
    <div className='loginForm'>
      <div className={!isClosed ? 'formWrapper' : 'closed'}>
        <div className='logoWrapper'></div>
        <div className='formArea'>
          <h1 className='header'></h1>
          <form className='form' onSubmit={formik.handleSubmit}>
            <div className='textInputWrapper'>
              <label htmlFor='email' className='inputLabel'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                defaultValue={formik.values.email}
              />
              {formik.errors.email &&
                formik.touched.email &&
                formik.errors.email}
            </div>
            <div className='textInputWrapper'>
              <label htmlFor='password' className='inputLabel'>
                Password
              </label>
              <div className='passwordWrapper'>
                <input
                  type={isChanged ? 'text' : 'password'}
                  id='password'
                  className='password'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  defaultValue={formik.values.password}
                />
                <div
                  className={isChanged ? 'passwordIconHide' : 'passwordIconShow'}
                  onClick={handleChangeVisibilty}
                  >
                </div>
              </div>
              {formik.errors.password &&
                formik.touched.password &&
                formik.errors.password}
            </div>
            {formik.isValid ? (
              <button
                className='button'
                type='submit'
                disabled={!(formik.isValid && formik.touched)}
              >
                I'm in
              </button>
            ) : (
              <button className='buttonDisabled' type='submit'>
                I'm in
              </button>
            )}
          </form>
        </div>
        <div
        className='closeIcon'
        onClick={handleCloseForm}
        >
        </div>
      </div>
    </div>
  );
}
