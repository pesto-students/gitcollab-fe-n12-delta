import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../../components/FormContainer'
import CheckoutSteps from '../../components/CheckoutSteps'
import { savePaymentMethod } from '../../actions/cartActions'
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const { REACT_APP_SERVER_URL } = process.env;


const PaymentScreen = ({ history }) => {


  const [product] = useState({
    name: "Tesla Roadster",
    price: 100,
    description: "Cool car"
  });

  const cart = useSelector((state) => state.cart)
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const { shippingAddress } = cart

  if (!shippingAddress.address) {
    history.push('/shipping')
  }


  const [paymentMethod, setPaymentMethod] = useState('COD')

  const dispatch = useDispatch()

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }

  async function handleToken(token) {
    console.log("userInfo", userInfo)
    const response = await axios.post(
      `${REACT_APP_SERVER_URL}/stripe/checkout`,
      { token, product }, config
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });

    }
  }
  // const notify = () => {
  //   toast("Wow so easy!");
  //   toast("Success! Check email for details", { type: "success" });
  // }

  return (
    // <FormContainer>
    //   <CheckoutSteps step1 step2 step3 />
    //   <h1>Payment Method</h1>
    //   <Form onSubmit={submitHandler}>
    //     <Form.Group>
    //       <Form.Label as='legend'>Select Method</Form.Label>
    //       <Col>
    //         <Form.Check
    //           type='radio'
    //           label='CASH ON DELIVERY'
    //           id='COD'
    //           name='COD'
    //           value='COD'
    //           checked
    //           onChange={(e) => setPaymentMethod(e.target.value)}
    //         ></Form.Check>
    //       </Col>
    //     </Form.Group>

    //     <Button type='submit' variant='primary'>
    //       Continue
    //     </Button>
    //   </Form>
    // </FormContainer>
    <>
      <ToastContainer />
      <StripeCheckout
        token={handleToken}
        stripeKey="pk_test_51HYmaBJSHnaZ7WbAoPN4XF6ovU9du2rQmdn95nUKdx4VbTaYLHgcNBy9s78STEFPfZxNthDs3DIPjG74qYtFFCsS00LsI5kCSB"
        currency="INR"
        amount={100}
      />
      {/* <button onClick={notify}>Notify!</button> */}
    </>
  )
}

export default PaymentScreen
