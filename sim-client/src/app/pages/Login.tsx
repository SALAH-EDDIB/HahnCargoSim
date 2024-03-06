import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useStore } from '../stores/Store';
import MyTextInput from '../common/form/MyTextInput';


const LoginPage = () => {

  const { userStore } = useStore();

  const socialStyle = {
    padding: "5px 12px 4px 50px"
  }

  const initialState = {
    username: '',
    password: '',
    error: null,
    
  }

  const [LoginForm] = useState(initialState)

  const loginSchema = Yup.object().shape({
    username: Yup.string().required('Username Required'),
    password: Yup.string().required('Password is required'),
  })
  return (

    <section className="section">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
            <div className="login-brand  ">
              <h1 className='text-primary'>CargoConnect</h1>
            </div>

            <div className="card card-primary">
              <div className="card-header"><h4>Login</h4></div>

              <div className="card-body">
                <Formik
                  enableReinitialize
                  initialValues={LoginForm}
                  onSubmit={(values, { setErrors }) => userStore.login(values).catch(error => setErrors({ error }))}
                  validationSchema={loginSchema}
                >
                  {({errors, touched, handleSubmit, isSubmitting, isValid, dirty }) => (
                    <Form onSubmit={handleSubmit} autoComplete="off" >
                      <p className='text-danger' >{errors.error && "Username or password is incorrect"}</p>
                      <div className="form-group">
                      <div className="d-block">
                          <label htmlFor="username" className="control-label">Username</label>
                          
                        </div>
                        <MyTextInput id="username" type="text" className="form-control" name="username" tabIndex={1}   />
                      </div>

                      <div className="form-group">
                        <div className="d-block">
                          <label htmlFor="password" className="control-label">Password</label>
                          
                        </div>
                        <MyTextInput id="password" type="password" className="form-control" name="password" tabIndex={2}   />
                      </div>

                     

                      <div className="form-group">
                        <button 
                          type="submit" 
                          className={`btn btn-primary btn-lg btn-block 
                          ${!isValid ? "disabled" : ""} 
                          ${isSubmitting ? "btn-progress" : ""}`} 
                          tabIndex={4}
                        >
                          Login
                        </button>
                      </div>
                    </Form>
                  )}

                </Formik>
                <div className="text-center mt-4 mb-3">
                  <div className="text-job text-muted">Login With Social</div>
                </div>
                <div className="row sm-gutters">
                  <div className="col-6">
                    <Link to="#" className="btn btn-block btn-social btn-facebook" style={socialStyle}>
                      <span className="fab fa-facebook"></span> Facebook
                        </Link>
                  </div>
                  <div className="col-6">
                    <Link to="#" className="btn btn-block btn-social btn-twitter" style={socialStyle}>
                      <span className="fab fa-twitter"></span> Twitter
                        </Link>
                  </div>
                </div>

              </div>
            </div>
           
           
          </div>
        </div>
      </div>
    </section>


  );
}

export default LoginPage;
