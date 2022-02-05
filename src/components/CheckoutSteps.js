import React, { useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import classes from './CheckoutSteps.module.css'
// import ProgressBar from 'react-bootstrap/ProgressBar'
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";


const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  const [progressPercentage, setProgressPercentage] = useState(25);

  useEffect(() => {
    if (step1 && !step2) {
      setProgressPercentage(25);
    } else if (step1 && step2 && !step3) {
      setProgressPercentage(50)
    } else if (step1 && step2 && step3 && !step4) {
      setProgressPercentage(75)
    } else {
      setProgressPercentage(100)
    }
  }, [step1, step2, step3, step4]);
  return (
    <>
      <ProgressBar
        percent={progressPercentage}
        filledBackground="linear-gradient(to right, #9e768f, #9fa4c4)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://res.cloudinary.com/denoemywn/image/upload/v1644060297/velvbpbpx3l8wxp1rqmk.png"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://res.cloudinary.com/denoemywn/image/upload/v1644060286/ieyr2tyfioib6tkf4xrm.png"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://res.cloudinary.com/denoemywn/image/upload/v1644060492/nbiii552by4r0jvelqkd.png"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://res.cloudinary.com/denoemywn/image/upload/v1644060804/ike6d0oqat21hxm1fa1m.png"
            />
          )}
        </Step>
      </ProgressBar>
      <Nav className='d-flex justify-content-between'>
        <Nav.Item>
          {step1 ? (
            <LinkContainer to='/login'>
              <Nav.Link className={classes.links}>Sign In</Nav.Link>
            </LinkContainer>
          ) : (
            <Nav.Link disabled>Sign In</Nav.Link>
          )}
        </Nav.Item>

        <Nav.Item>
          {step2 ? (
            <LinkContainer to='/shipping'>
              <Nav.Link className={classes.links}>Shipping</Nav.Link>
            </LinkContainer>
          ) : (
            <Nav.Link disabled>Shipping</Nav.Link>
          )}
        </Nav.Item>

        <Nav.Item>
          {step3 ? (
            <LinkContainer to='/payment'>
              <Nav.Link className={classes.links}>Payment</Nav.Link>
            </LinkContainer>
          ) : (
            <Nav.Link disabled>Payment</Nav.Link>
          )}
        </Nav.Item>

        <Nav.Item>
          {step4 ? (
            <LinkContainer to='/placeorder'>
              <Nav.Link className={classes.links}>Place Order</Nav.Link>
            </LinkContainer>
          ) : (
            <Nav.Link disabled>Place Order</Nav.Link>
          )}
        </Nav.Item>

      </Nav>
      {/* <ProgressBar now={progressPercentage} label={`${progressPercentage}%`} /> */}
    </>
  )
}

export default CheckoutSteps;
