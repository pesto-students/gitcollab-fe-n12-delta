import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../../components/FormContainer'
import CheckoutSteps from '../../components/CheckoutSteps'
import { savePaymentMethod } from '../../actions/cartActions'


const PaymentScreen = ({ history }) => {


  const cart = useSelector((state) => state.cart)

  const { shippingAddress } = cart

  if (!shippingAddress.address) {
    history.push('/shipping')
  }


  const [paymentMethod, setPaymentMethod] = useState('COD')

  const dispatch = useDispatch()



  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }



  const changePaymentMethod = (e) => {
    setPaymentMethod(e.target.value)
  }
  // const notify = () => {
  //   toast("Wow so easy!");
  //   toast("Success! Check email for details", { type: "success" });
  // }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Col>
            <Form.Check
              type='radio'
              label='CASH ON DELIVERY'
              id='CASH ON DELIVERY'
              name='PaymentMethod'
              value='CASH ON DELIVERY'
              checked={paymentMethod == 'CASH ON DELIVERY'}
              onChange={changePaymentMethod}
            ></Form.Check>
          </Col>
          <Col>
            <Form.Check
              type='radio'
              label='Pay with Stripe'
              id='Pay with Stripe'
              name='PaymentMethod'
              value='Pay with Stripe'
              checked={paymentMethod == 'Pay with Stripe'}
              onChange={changePaymentMethod}
            ></Form.Check>
            {/* {isStripeVisible ?
              <StripeCheckout
                token={handleToken}
                stripeKey="pk_test_51HYmaBJSHnaZ7WbAoPN4XF6ovU9du2rQmdn95nUKdx4VbTaYLHgcNBy9s78STEFPfZxNthDs3DIPjG74qYtFFCsS00LsI5kCSB"
                currency="INR"
                amount={100}
              />
              :
              null
            } */}

          </Col>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
    // <>
    //   <ToastContainer />

    //   {/* <button onClick={notify}>Notify!</button> */}
    // </>
  )
}

export default PaymentScreen
