import { useState } from "react";
import { useFormik } from "formik";

export function LoginForm() {
  const [isClosed, setClosed] = useState<boolean>(false);
  const [isChanged, setChanged] = useState<boolean>(false);

  const handleChangeVisibilty = () => {
    setChanged(!isChanged);
  };

  const handleCloseForm = () => {
    setClosed(true);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { setSubmitting }) => {
      fetch('https://example.com')
        .then((res: Response) => {
          if(res.ok) {
            console.log(values);
          }
            console.log(res);
        })
        .catch((err: Error) => {
          alert(err.message);
        })
      setSubmitting(false);
    },
  });

  return (
    <div className='loginForm'>
      <div className={!isClosed ? "formWrapper" : "closed"}>
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
            </div>
            <div className='textInputWrapper'>
              <label htmlFor='password' className='inputLabel'>
                Password
              </label>
              <div className='passwordWrapper'>
                <input
                  type={isChanged ? "text" : "password"}
                  id='password'
                  className='password'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  defaultValue={formik.values.password}
                />
                <img
                  src={
                    isChanged
                      ? "../src/assets/hide-password.svg"
                      : "../src/assets/show-password.svg"
                  }
                  alt='showPassword'
                  className='passwordIcon'
                  onClick={handleChangeVisibilty}
                />
              </div>
            </div>
            <button
              className='button'
              type='submit'
              disabled={formik.isSubmitting}
            >
              I'm in
            </button>
          </form>
        </div>
        <img
          src='../src/assets/close-icon.svg'
          alt='close'
          className='closeIcon'
          onClick={handleCloseForm}
        />
      </div>
    </div>
  );
}
