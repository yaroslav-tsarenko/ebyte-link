import Header from "../components/Header";
import PageBody from "../components/PageBody";
import FooterDesktop from "../components/FooterDesktop";
import "./SignUpPage.css";

const SignUpPage = () => {
  return (
    <div className="signuppage">
      <Header />
      <PageBody />
      <FooterDesktop
        linkAppleAppStore1svg="/link--appleappstore1svg1@2x.png"
        linkGooglePlayStore1svg="/link--googleplaystore1svg1@2x.png"
      />
    </div>
  );
};

export default SignUpPage;
