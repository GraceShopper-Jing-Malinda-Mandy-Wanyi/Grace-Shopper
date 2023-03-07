import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchUserOrders, selectUserOrders } from "./userOrdersSlice";

const Orders = () => {
  const dispatch = useDispatch();
  const {me} = useSelector((state) => state.auth)
  const userOrders = useSelector(selectUserOrders);
  // console.log(userOrders);
  // console.log(userId)
  // const user = useSelector(selectSingleUser);
  // console.log("USER", user);

  // const quantity = user.cartItems;
  // const cart = useSelector(cartItems);
  // console.log("useSelector(selectSingleUser)", user.cartItems);
  // console.log("useSelector(cartItems)", cart);
  // console.log("quantity", quantity);

  // for (const order of userOrders) {
  //   // console.log(order)
  //   const items = order.cartItems;
  //   console.log(items.length);
  // }

  useEffect(() => {
    if(me.id){
      dispatch(fetchUserOrders(me.id));
    }
  }, [me]);

  const clickHandler = () => {
    
  }

  return (
    <main className="container">
      <table className="container">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            {/* <th>View Order</th> */}
          </tr>
        </thead>
        <tbody>
          {userOrders && userOrders.length > 0 ? (
            userOrders.map((order) => {
              return (
                <tr key={order.id}>
                    <td>{order.firstName}</td>
                    <td>{order.lastName}</td>
                    <td>{order.address}</td>
                    <td><Link to={`/account/singleorder`} onClick={clickHandler}>View Order</Link></td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>It seems you haven't made any purchases yet</td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
};

export default Orders;
