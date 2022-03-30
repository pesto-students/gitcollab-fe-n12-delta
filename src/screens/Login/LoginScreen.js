import React, { useState, useEffect } from 'react'
import FormContainer from '../../components/FormContainer';
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import classes from './Login.module.css';
import { login } from '../../actions/userActions';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  let redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      if (history.action == "POP") {
        redirect = "cart"
      }
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  const guestLogin = (e) => {
    e.preventDefault()
    dispatch(login('john@example.com', '123456'))
  }

  const adminLogin = (e) => {
    e.preventDefault()
    dispatch(login('admin@example.com', '123456'))
  }

  return (
    <FormContainer className={classes.form}>
      <Form onSubmit={submitHandler}>
        <h1>SIGN IN</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter email'></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter password'></Form.Control>
        </Form.Group>

        <Button type='submit' variant='secondary' className={classes.signIn} >
          Sign In
        </Button>
        <Button type='submit' variant='secondary' onClick={guestLogin} className={classes.signIn}>
          Guest Login
        </Button>
        <Button type='submit' variant='secondary' onClick={adminLogin}>
          Admin Login
        </Button>
        <Row className='py-3'>
          <Col>
            New Customer? {''}
            <Link to='/register'>
              Register
            </Link>
          </Col>
        </Row>
      </Form>
    </FormContainer >
  )
}

export default LoginScreen;
