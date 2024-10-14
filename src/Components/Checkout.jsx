import "../Style/Chekout.css"
import "react-toastify/dist/ReactToastify.css";
import {useSelector} from "react-redux"

import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
const Contact = () => {
  const dispatch=useDispatch();
  const Navigate=useNavigate()
  const {cartitem} = useSelector(state=>state.cart)
  const {cartss} =cartitem
  const checkout = async()=>{
    console.log(cartss)
    dispatch({
      type:"delleteall"
    })
    dispatch({
      type:"calculatePrice",
    })
    dispatch({
      type:"storage",
    })
    Navigate("/orderPlaced")
  }
  checkout();
  return 
}

export default Contact;