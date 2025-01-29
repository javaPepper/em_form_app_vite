import { useState } from 'react';

export function LoginForm() {

  const [isClosed, setClosed] = useState<boolean>(false);
  const [isChanged, setChanged] = useState<boolean>(false);

  const handleChangeVisibilty = () => {
    setChanged(!isChanged);
  }

  const handleCloseForm = () => {
    setClosed(true);
  }

  return (
    <div className='loginForm'>
      <div className={!isClosed ? "formWrapper" : "closed"}>
        <div className='logoWrapper'></div>
        <div className='formArea'>
          <h1 className='header'></h1>
          <form className='form'>
            <div className='textInputWrapper'>
              <label htmlFor='inputName' className='inputLabel'>
                Email
              </label>
              <input
                type='email'
                id='inputName'
                className='textInput'
                />
            </div>
            <div className='textInputWrapper'>
              <label htmlFor='inputPassword' className='inputLabel'>
                Password
              </label>
              <div className='passwordWrapper'>
                <input
                  type={isChanged ? "text" : "password"}
                  id='inputPassword'
                  className='passwordInput'
                />
                <img
                  src={isChanged ?
                    "../src/assets/hide-password.svg" :
                    "../src/assets/show-password.svg"}
                  alt='showPassword'
                  className='passwordIcon'
                  onClick={handleChangeVisibilty}
                />
              </div>
            </div>
            <button className='button'>I'm in</button>
          </form>
        </div>
        <img
          src="../src/assets/close-icon.svg"
          alt='close'
          className='closeIcon'
          onClick={handleCloseForm}
          />
      </div>
    </div>
  );
}
