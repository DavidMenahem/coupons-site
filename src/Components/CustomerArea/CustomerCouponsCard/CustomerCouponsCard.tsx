import CouponModel from "../../../Models/CouponModel";
import "./CustomerCouponsCard.css";

interface CustomerCouponsCardProps{
    coupon: CouponModel;
    buy?: (cuponId: number) => void;
}

function CustomerCouponsCard(props: CustomerCouponsCardProps): JSX.Element {
    const style = {
        style:{
        backgroundImage: `url(${"data:image/jpeg;base64," + props.coupon.image})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize:  `250px 250px`
        }
    };
    return (
        <div className="CustomerCouponsCard Box" style={style.style}>
			<h3>{props.coupon.title}</h3>
            <div>Price: {props.coupon.price}</div>
            <div>Expire date: {props.coupon.endDate}</div>
            <div>StartDate: {props.coupon.startDate}</div>
            <div>Category: {props.coupon.category}</div>
            <div>Amount in stock: {props.coupon.amount}</div>
            <div>Description: {props.coupon.description}</div>
            {props.buy &&
                <button onClick={() => props.buy(props.coupon.id)}>🛒</button>
            }
        </div>
    );
}

export default CustomerCouponsCard;
