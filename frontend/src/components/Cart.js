import { useDispatch, useSelector } from "react-redux";
import url from '../env'
import { useCookies } from 'react-cookie';
import { removeProductFromCart } from "../redux/reducers/cartSlice";
import {  toast } from 'react-toastify';

/* eslint-disable jsx-a11y/anchor-is-valid */
function Cart() {
    const [cookies, setCookie,removeCookie] = useCookies(['cartdata']);
    const dispatch = useDispatch();


    var ansCartData = useSelector(state=> state.cart.value);
    console.log(ansCartData);

    var deleteData = (ev,id)=>{
        ev.preventDefault();
        console.log(id);

        var ansCookies = cookies.cartdata;
        console.log(ansCookies.length);
        if(ansCookies.length > 1){
            console.log(ansCookies);

            var remainigProducts = ansCookies.filter(obj=>obj._id != id);
            console.log(remainigProducts);

            const currentDate = new Date();
            const nextDate = new Date();

            nextDate.setDate(currentDate.getDate() + 1);
            console.log(nextDate);

            var arrDataInString = JSON.stringify(remainigProducts);

            setCookie('cartdata', arrDataInString, { expires : nextDate });
            dispatch(removeProductFromCart(remainigProducts));
            console.log('Product Deleted From Cart');
        }
        else{
            console.log('Remove Last Record');
            removeCookie('cartdata');
            dispatch(removeProductFromCart([]));
        }
        toast("Product Deleted From Cart!");
    }

    return (
        <section>
            <section id="cart_items">
                <div class="container">
                    <div class="breadcrumbs">
                        <ol class="breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li class="active">Shopping Cart</li>
                        </ol>
                    </div>
                    <div class="table-responsive cart_info">
                        <table class="table table-condensed">
                            <thead>
                                <tr class="cart_menu">
                                    <td class="image">Item</td>
                                    <td class="description"></td>
                                    <td class="price">Price</td>
                                    <td class="quantity">Quantity</td>
                                    <td class="total">Total</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                
                            {
                                ansCartData && ansCartData.length>0 && ansCartData.map(obj=>
                                    
                                    <tr>
                                    <td class="cart_product">
                                        <a href=""><img style={{width:'85px'}} src={url.nodeapipath+"/Assets/Uploads/"+obj.productpath} alt=""></img></a>
                                    </td>
                                    <td class="cart_description">
                                        <h4><a href="">{obj.productname}</a></h4>
                                        
                                    </td>
                                    <td class="cart_price">
                                        <p>{obj.productprice}</p>
                                    </td>
                                    <td class="cart_quantity">
                                        <div class="cart_quantity_button">
                                        <p>{obj.productdiscount}%</p>
                                        </div>
                                    </td>
                                    <td class="cart_total">
                                        <p class="cart_total_price">
                                            {obj.productprice - (obj.productprice*obj.productdiscount/100)}
                                        </p>
                                    </td>
                                    <td class="cart_delete">
                                        <a class="cart_quantity_delete" href="#" onClick={(ev)=>{ deleteData(ev,obj._id) }}><i class="fa fa-times"></i></a>
                                    </td>
                                </tr>
                                    
                                )
                            }
                                
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section id="do_action">
                <div class="container">
                    <div class="heading">
                        <h3>What would you like to do next?</h3>
                        <p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="chose_area">
                                <ul class="user_option">
                                    <li>
                                        <input type="checkbox"></input>
                                            <label>Use Coupon Code</label>
                                    </li>
                                    <li>
                                        <input type="checkbox"></input>
                                            <label>Use Gift Voucher</label>
                                    </li>
                                    <li>
                                        <input type="checkbox"></input>
                                            <label>Estimate Shipping & Taxes</label>
                                    </li>
                                </ul>
                                <ul class="user_info">
                                    <li class="single_field">
                                        <label>Country:</label>
                                        <select>
                                            <option>United States</option>
                                            <option>Bangladesh</option>
                                            <option>UK</option>
                                            <option>India</option>
                                            <option>Pakistan</option>
                                            <option>Ucrane</option>
                                            <option>Canada</option>
                                            <option>Dubai</option>
                                        </select>

                                    </li>
                                    <li class="single_field">
                                        <label>Region / State:</label>
                                        <select>
                                            <option>Select</option>
                                            <option>Dhaka</option>
                                            <option>London</option>
                                            <option>Dillih</option>
                                            <option>Lahore</option>
                                            <option>Alaska</option>
                                            <option>Canada</option>
                                            <option>Dubai</option>
                                        </select>

                                    </li>
                                    <li class="single_field zip-field">
                                        <label>Zip Code:</label>
                                        <input type="text"></input>
                                    </li>
                                </ul>
                                <a class="btn btn-default update" href="">Get Quotes</a>
                                <a class="btn btn-default check_out" href="">Continue</a>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="total_area">
                                <ul>
                                    <li>Cart Sub Total <span>$59</span></li>
                                    <li>Eco Tax <span>$2</span></li>
                                    <li>Shipping Cost <span>Free</span></li>
                                    <li>Total <span>$61</span></li>
                                </ul>
                                <a class="btn btn-default update" href="">Update</a>
                                <a class="btn btn-default check_out" href="">Check Out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Cart;