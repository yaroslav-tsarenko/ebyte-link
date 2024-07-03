import Hero from "../components/Hero";
import Search from "../components/Search";
import FrameComponent3 from "../components/FrameComponent3";
import EasyToUseContent from "../components/EasyToUseContent";
import SimCardCompatibility from "../components/SimCardCompatibility";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Posts from "../components/Posts";
import FooterDesktop from "../components/FooterDesktop";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="header1">
          <div className="header-left">
            <img className="logo-icon" loading="lazy" alt="" src="/logo.svg" />
            <div className="list">
              <div className="nav-links-content">
                <nav className="nav-link-items">
                  <a
                    className="item-link"
                    href="https://www.figma.com/design/JHDjExuuScqtwlEpYTij5a?node-id=2-30570"
                    target="_blank"
                  >
                    SIM Cards
                  </a>
                  <a
                    className="item-link1"
                    href="https://www.figma.com/design/JHDjExuuScqtwlEpYTij5a?node-id=2-43782"
                    target="_blank"
                  >
                    Delivery Options
                  </a>
                  <a
                    className="item-link2"
                    href="https://www.figma.com/design/JHDjExuuScqtwlEpYTij5a?node-id=2-45472"
                    target="_blank"
                  >
                    Reviews
                  </a>
                  <a
                    className="item-link3"
                    href="https://www.figma.com/design/JHDjExuuScqtwlEpYTij5a?node-id=2-47074"
                    target="_blank"
                  >
                    FAQ
                  </a>
                </nav>
                <div className="item-link4">
                  <div className="gradient" />
                  <a
                    className="esims"
                    href="https://www.figma.com/design/JHDjExuuScqtwlEpYTij5a?node-id=2-2"
                    target="_blank"
                  >
                    eSIMs
                  </a>
                </div>
              </div>
            </div>
            <div className="header-right">
              <div className="language-icon-parent">
                <img
                  className="language-icon"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
                <div className="background">
                  <a className="a">0</a>
                </div>
              </div>
              <div className="link">
                <a
                  className="a1"
                  href="https://www.figma.com/design/JHDjExuuScqtwlEpYTij5a?node-id=2-47572"
                  target="_blank"
                >
                  $
                </a>
                <div className="currency-symbol">
                  <a className="usd">USD</a>
                </div>
              </div>
              <img
                className="link-icon"
                loading="lazy"
                alt=""
                src="/link.svg"
              />
            </div>
          </div>
        </div>
      </header>
      <Hero />
      <Search />
      <FrameComponent3 />
      <section className="easy-to-use-content-parent">
        <EasyToUseContent />
        <SimCardCompatibility />
      </section>
      <FrameComponent1 />
      <FrameComponent />
      <section className="destinations">
        <div className="title">
          <div className="headings">
            <h1 className="heading-2">All over the world</h1>
            <div className="heading-3">Choose your destination</div>
          </div>
          <div className="content">
            <div className="regions-parent">
              <div className="regions">Regions</div>
              <div className="region-icons">
                <div className="region">
                  <img
                    className="esimeursvg-icon"
                    loading="lazy"
                    alt=""
                    src="/esimeursvg.svg"
                  />
                  <a
                    className="europe"
                    href="https://www.figma.com/design/P4CcAfvPitpB581k8Qiybz?node-id=2-51543"
                    target="_blank"
                  >
                    Europe
                  </a>
                </div>
                <div className="region1">
                  <img
                    className="esimnamsvg-icon"
                    loading="lazy"
                    alt=""
                    src="/esimnamsvg.svg"
                  />
                  <div className="north-america">North America</div>
                </div>
                <div className="region2">
                  <img
                    className="esimsamsvg-icon"
                    alt=""
                    src="/esimsamsvg.svg"
                  />
                  <div className="south-america">South America</div>
                </div>
                <div className="region3">
                  <img
                    className="esimcarsvg-icon"
                    alt=""
                    src="/esimcarsvg.svg"
                  />
                  <div className="caribbean">Caribbean</div>
                </div>
                <div className="region4">
                  <img
                    className="esimasisvg-icon"
                    alt=""
                    src="/esimasisvg.svg"
                  />
                  <div className="asia">Asia</div>
                </div>
                <div className="region5">
                  <img
                    className="esimseasvg-icon"
                    alt=""
                    src="/esimseasvg.svg"
                  />
                  <div className="south-east-asia">South East Asia</div>
                </div>
                <div className="region6">
                  <img
                    className="esimocnsvg-icon"
                    alt=""
                    src="/esimocnsvg.svg"
                  />
                  <div className="oceania">Oceania</div>
                </div>
                <div className="region7">
                  <img
                    className="esimafrsvg-icon"
                    alt=""
                    src="/esimafrsvg.svg"
                  />
                  <div className="africa">Africa</div>
                </div>
                <div className="region8">
                  <img
                    className="esimmeasvg-icon"
                    alt=""
                    src="/esimmeasvg.svg"
                  />
                  <div className="middle-east">Middle East</div>
                </div>
              </div>
            </div>
            <div className="title-parent">
              <div className="title1">
                <div className="countries">Countries</div>
                <div className="paragraphborder">
                  <div className="buttons">
                    <div className="button-a">A</div>
                    <div className="button-b">B</div>
                    <div className="button-c">C</div>
                    <div className="button-d">D</div>
                    <div className="button-e">E</div>
                    <div className="button-f">F</div>
                    <div className="button-g">G</div>
                    <div className="button-h">H</div>
                    <div className="button-i">I</div>
                    <div className="button-j">J</div>
                    <div className="button-k">K</div>
                    <div className="button-l">L</div>
                    <div className="button-m">M</div>
                    <div className="button-n">N</div>
                    <div className="button-o">O</div>
                    <div className="button-p">P</div>
                    <div className="button-q">Q</div>
                    <div className="button-r">R</div>
                    <div className="button-s">S</div>
                    <div className="button-t">T</div>
                    <div className="button-u">U</div>
                    <div className="button-v">V</div>
                    <div className="button-w">W</div>
                    <div className="button-x">X</div>
                    <div className="button-y">Y</div>
                    <div className="button-z">Z</div>
                  </div>
                </div>
              </div>
              <div className="country-icons">
                <div className="a2">A</div>
                <div className="row">
                  <img className="image-icon" alt="" src="/image-4.svg" />
                  <div className="armenia">Armenia</div>
                </div>
                <div className="row1">
                  <img className="image-icon1" alt="" src="/image-5@2x.png" />
                  <div className="bahamas">Bahamas</div>
                </div>
                <div className="row2">
                  <img className="image-icon2" alt="" src="/image-6.svg" />
                  <div className="bolivia">Bolivia</div>
                </div>
                <div className="row3">
                  <img className="image-icon3" alt="" src="/image-7.svg" />
                  <div className="belgium">Belgium</div>
                </div>
                <div className="row4">
                  <img className="image-icon4" alt="" src="/image-8.svg" />
                  <div className="afghanistan">Afghanistan</div>
                </div>
                <div className="row5">
                  <img className="image-icon5" alt="" src="/image-9.svg" />
                  <div className="aruba">Aruba</div>
                </div>
                <div className="row6">
                  <img className="image-icon6" alt="" src="/image-10.svg" />
                  <div className="bahrain">Bahrain</div>
                </div>
                <div className="row7">
                  <img className="image-icon7" alt="" src="/image-11.svg" />
                  <div className="bonaire">Bonaire</div>
                </div>
                <div className="row8">
                  <img className="image-icon8" alt="" src="/image-12.svg" />
                  <div className="brunei">Brunei</div>
                </div>
                <div className="row9">
                  <img className="image-icon9" alt="" src="/image-13.svg" />
                  <div className="aland-islands">Aland Islands</div>
                </div>
                <div className="row10">
                  <img className="image-icon10" alt="" src="/image-14.svg" />
                  <div className="azerbaijan">Azerbaijan</div>
                </div>
                <div className="row11">
                  <img className="image-icon11" alt="" src="/image-15.svg" />
                  <div className="balearic-islands">Balearic islands</div>
                </div>
                <div className="row12">
                  <img className="image-icon12" alt="" src="/image-16@2x.png" />
                  <div className="bosnia-and-herzegovina">
                    Bosnia and Herzegovina
                  </div>
                </div>
                <div className="row13">
                  <img className="image-icon13" alt="" src="/image-17.svg" />
                  <div className="bulgaria">Bulgaria</div>
                </div>
                <div className="row14">
                  <img className="image-icon14" alt="" src="/image-18.svg" />
                  <div className="albania">Albania</div>
                </div>
                <div className="row15">
                  <img className="image-icon15" alt="" src="/image-19.svg" />
                  <div className="azores">Azores</div>
                </div>
                <div className="row16">
                  <img className="image-icon16" alt="" src="/image-20.svg" />
                  <div className="barbados">Barbados</div>
                </div>
                <div className="row17">
                  <img className="image-icon17" alt="" src="/image-21.svg" />
                  <div className="botswana">Botswana</div>
                </div>
                <div className="c">C</div>
                <div className="row18">
                  <img className="image-icon18" alt="" src="/image-22.svg" />
                  <div className="algeria">Algeria</div>
                </div>
                <div className="row19">
                  <img className="image-icon19" alt="" src="/image-23.svg" />
                  <div className="andorra">Andorra</div>
                </div>
                <div className="row20">
                  <img className="image-icon20" alt="" src="/image-24.svg" />
                  <div className="belarus">Belarus</div>
                </div>
                <div className="row21">
                  <img className="image-icon21" alt="" src="/image-25.svg" />
                  <div className="brazil">Brazil</div>
                </div>
                <div className="row22">
                  <img className="image-icon22" alt="" src="/image-26@2x.png" />
                  <div className="cabo-verde">Cabo Verde</div>
                </div>
                <div className="row23">
                  <img className="image-icon23" alt="" src="/image-27.svg" />
                  <div className="anguilla">Anguilla</div>
                </div>
                <div className="row24">
                  <img className="image-icon24" alt="" src="/image-28.svg" />
                  <div className="australia">Australia</div>
                </div>
                <div className="row25">
                  <img className="image-icon25" alt="" src="/image-29@2x.png" />
                  <div className="benin">Benin</div>
                </div>
                <div className="row26">
                  <img className="image-icon26" alt="" src="/image-30.svg" />
                  <div className="british-virgin-islands">
                    British Virgin Islands
                  </div>
                </div>
                <div className="row27">
                  <img className="image-icon27" alt="" src="/image-31.svg" />
                  <div className="cameroon">Cameroon</div>
                </div>
                <div className="row28">
                  <img className="image-icon28" alt="" src="/image-32.svg" />
                  <div className="antigua-and-barbuda">Antigua and Barbuda</div>
                </div>
                <div className="row29">
                  <img className="image-icon29" alt="" src="/image-33.svg" />
                  <div className="austria">Austria</div>
                </div>
                <div className="row30">
                  <img className="image-icon30" alt="" src="/image-34.svg" />
                  <div className="bermuda">Bermuda</div>
                </div>
                <div className="row31">
                  <img className="image-icon31" alt="" src="/image-35.svg" />
                  <div className="burkina-faso">Burkina Faso</div>
                </div>
                <div className="row32">
                  <img className="image-icon32" alt="" src="/image-36.svg" />
                  <div className="canada">Canada</div>
                </div>
                <div className="row33">
                  <img className="image-icon33" alt="" src="/image-37.svg" />
                  <div className="argentina">Argentina</div>
                </div>
                <div className="b">B</div>
                <div className="row34">
                  <img className="image-icon34" alt="" src="/image-38.svg" />
                  <div className="bhutan">Bhutan</div>
                </div>
                <div className="row35">
                  <img className="image-icon35" alt="" src="/image-39.svg" />
                  <div className="bangladesh">Bangladesh</div>
                </div>
                <div className="row36">
                  <img className="image-icon36" alt="" src="/image-15.svg" />
                  <div className="canary-islands">Canary islands</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-wrapper">
        <div className="container">
          <div className="background1" />
          <div className="heading-2-they-trust-simopti-wrapper">
            <h1 className="heading-21">People who trusts us</h1>
          </div>
          <div className="overlays">
            <div className="overlay-content">
              <div className="background2" />
              <div className="overlay" />
              <div className="overlay1" />
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial-content">
              <img className="icon" loading="lazy" alt="" src="/icon-18.svg" />
              <div className="i-recently-used">
                I recently used Ebytelink's eSIM during my trip to Europe, and I
                couldn't be happier with the service. The activation process was
                incredibly easy; I simply scanned the QR code, and within
                minutes, I was connected. The data speeds were excellent,
                allowing me to stream videos and make video calls without any
                issues.
              </div>
            </div>
          </div>
          <div className="reviewer">
            <div className="reviewer-info">
              <img className="ekomipng-icon" alt="" src="/ekomipng@2x.png" />
              <div className="reviewer-name">
                <div className="alexis-dosithee">Alexis Dosithee</div>
                <img
                  className="stars-fullsvg-fill-icon"
                  loading="lazy"
                  alt=""
                  src="/starsfullsvg-fill.svg"
                />
              </div>
            </div>
            <div className="reviews-link">
              <div className="see-all-reviews">See all reviews</div>
              <img className="icon1" alt="" src="/icon-19.svg" />
            </div>
          </div>
        </div>
      </section>
      <Posts />
      <FooterDesktop
        linkAppleAppStore1svg="/link--appleappstore1svg@2x.png"
        linkGooglePlayStore1svg="/link--googleplaystore1svg@2x.png"
        linkOutputOnlinepngtoolsp="/link--outputonlinepngtoolspng@2x.png"
        linkEsimsIoBadge7png="/link--esimsiobadge7png@2x.png"
      />
    </div>
  );
};

export default HomePage;
