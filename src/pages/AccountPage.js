import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent10 from "../components/FrameComponent10";
import FooterDesktop from "../components/FooterDesktop";
import "./AccountPage.css";

const AccountPage = () => {
  return (
    <div className="accountpage">
      <FrameComponent9
        yourCart="Welcome, Darnell"
        viewOrEditYourCartBeforeC="Your Personal Dashboard"
      />
      <FrameComponent10 />
      <FooterDesktop
        linkAppleAppStore1svg="/link--appleappstore1svg@2x.png"
        linkGooglePlayStore1svg="/link--googleplaystore1svg@2x.png"
        linkOutputOnlinepngtoolsp="/link--outputonlinepngtoolspng@2x.png"
        linkEsimsIoBadge7png="/link--esimsiobadge7png@2x.png"
      />
    </div>
  );
};

export default AccountPage;
