import { NavLink } from "react-router-dom";
import CouponModel from "../../../Models/CouponModel";
import "./CompanyCouponsCard.css";

interface CompanyCouponsCardProps{
    coupon: CouponModel;
}
function CompanyCouponsCard(props: CompanyCouponsCardProps): JSX.Element {
    const style = {
        style:{
        backgroundImage: `url(${"data:image/jpeg;base64," + props.coupon.image})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize:  `250px 250px`
        }
    };
    return (
        <div className="CompanyCouponsCard Box" style={style.style}>
            <div>Title: {props.coupon.title}</div>
            <div>Price: {props.coupon.price}</div>
            <div>Expire date: {props.coupon.endDate}</div>
            <div>Strat date: {props.coupon.startDate}</div>
            <div>Category: {props.coupon.category}</div>
            <div>In stock: {props.coupon.amount}</div>
            <div>Description: {props.coupon.description}</div>
            <NavLink to={"/company/update_coupon/" + props.coupon.company.id + "/" + props.coupon.id} >✏️</NavLink>
            <span> | </span>
            <NavLink to={"/company/delete_coupon/" + props.coupon.id}>🗑</NavLink>
        </div>

    );
}

export default CompanyCouponsCard;
