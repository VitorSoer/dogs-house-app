import { PayPalButtons } from '@paypal/react-paypal-js';
import { useState } from 'react';

const PaypalCheckout = (props) => {
    const { product } = props;

    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);

    const handleApprove = (orderID) => {
        setPaidFor(true);
    }

    if (paidFor) {
        alert('Você ajudou um pet!')
    }

    if (error){
        console.log(error);
    }

    return (

        <PayPalButtons
        style={{
            layout: 'horizontal',
            tagline: 'false',
            height: 40
        }}
            currency="BRL"
            onClick={(data, actions)=>{
                const hasAlreadyBought = false;

                if (hasAlreadyBought){
                    setError('Você já comprou este pacote, volte ao menu para escolher outro!')
                    return actions.reject();
                }else{
                    return actions.resolve();
                }

                
            }}

            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: product.description,
                            amount: {
                                value: product.price
                            }
                        }
                    ]
                })
            }}
            onApprove={async (data, actions) => {
                const order = await actions.order.capture();
                console.log("order", order);

                handleApprove(data.orderID);
            }}
            onCancel={()=>{

            }}
            onError={(err) => {
                setError(err);
                console.log("Paypal Chekout Error", err)
            }}
        />
    )

}

export default PaypalCheckout