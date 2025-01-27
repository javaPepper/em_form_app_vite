export function LoginForm() {
  return (
    <div className='loginForm'>
      <div className='formWrapper'>
        <div className='logoWrapper'></div>
        <div className='formArea'>
          <h1 className='header'></h1>
          <form className='form'>
            <div className='textInputWrapper'>
              <label form='inputName' className='inputLabel'>
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
                  type={"password"}
                  id='inputPassword'
                  className='passwordInput'
                />
                <img
                  src="../src/assets/show-password.svg"
                  alt='hidePassword'
                  className='passwordIcon'
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
          />
      </div>
    </div>
  );
}
