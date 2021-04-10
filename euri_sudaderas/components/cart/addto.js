import { useMutation, gql } from "@apollo/client";
import { useContext } from 'react';
import { AppContext } from '../../context/app-context';

const ADD_PRODUCT_TO_CART = gql`
    mutation ($id: Int!) {
        addToCart(input: {productId: $id}) {
            clientMutationId
        }
    }
`;

export default function AddToCartButton({ id }) {

    const [ cart, setCart ] = useContext( AppContext );
    const [addToCart, { loading, error }] = useMutation(ADD_PRODUCT_TO_CART);

    const handleAddToCart = (event) => {
        event.preventDefault();
        
        if ( process.browser ) {

            let existingCart = localStorage.getItem('cart')
            
            if(existingCart) {

                existingCart = parseInt(existingCart)
                setCart(existingCart + 1)
                localStorage.setItem('cart', existingCart + 1)

            } else {

                setCart(1)
                localStorage.setItem('cart', 1)

            }
        }

        addToCart({ variables: { id: id } });
    }

    return (
        <div>
            <button disabled={loading} onClick={handleAddToCart}>
                Add to cart
            </button>
        </div>
    )
}