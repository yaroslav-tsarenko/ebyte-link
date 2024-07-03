import FrameComponent9 from "../components/FrameComponent9";
import CartItems from "../components/CartItems";
import FooterDesktop from "../components/FooterDesktop";
import "./CartDetailsPage.css";

const CartDetailsPage = () => {
  return (
    <div className="cartdetailspage">
      <FrameComponent9
        yourCart="Your Cart"
        viewOrEditYourCartBeforeC="View or edit your cart before checkout"
      />
      <CartItems />
      <FooterDesktop
        linkAppleAppStore1svg="/link--appleappstore1svg@2x.png"
        linkGooglePlayStore1svg="/link--googleplaystore1svg@2x.png"
        linkOutputOnlinepngtoolsp="/link--outputonlinepngtoolspng@2x.png"
        linkEsimsIoBadge7png="/link--esimsiobadge7png@2x.png"
      />
    </div>
  );
};

export default CartDetailsPage;
