import Header from "../components/Header";
import Search1 from "../components/Search1";
import Navigation4 from "../components/Navigation4";
import Navigation3 from "../components/Navigation3";
import SoutheastAsia from "../components/SoutheastAsia";
import Navigation2 from "../components/Navigation2";
import Africa from "../components/Africa";
import Navigation1 from "../components/Navigation1";
import FooterDesktop1 from "../components/FooterDesktop1";
import "./ProductListingPage.css";

const ProductListingPage = () => {
  return (
    <div className="productlistingpage">
      <Header />
      <div className="content1">
        <div className="banner">
          <div className="container1">
            <div className="slogan">
              <div className="prepaid-esims-for">
                Prepaid eSIMs for 200+ destinations in the world
              </div>
              <div className="heading-1">
                Unleashing the Power of Travel eSIM: Your Passport to Global
                Connectivity
              </div>
            </div>
          </div>
        </div>
      </div>
      <Search1 />
      <div className="navigation">
        <div className="region-parent">
          <div className="region9">
            <img className="esimnamsvg-icon1" alt="" src="/esimnamsvg1.svg" />
            <div className="north-america1">North America</div>
          </div>
          <div className="region-group">
            <div className="region10">
              <img className="image-icon37" alt="" src="/image47.svg" />
              <div className="bermuda1">Bermuda</div>
            </div>
            <div className="region11">
              <img className="image-icon38" alt="" src="/image48.svg" />
              <div className="canada1">Canada</div>
            </div>
            <div className="region12">
              <img className="image-icon39" alt="" src="/image49.svg" />
              <div className="costa-rica">Costa Rica</div>
            </div>
            <div className="region13">
              <img className="image-icon40" alt="" src="/image50.svg" />
              <div className="el-salvador">El Salvador</div>
            </div>
            <div className="region14">
              <img className="image-icon41" alt="" src="/image51.svg" />
              <div className="usa">USA</div>
            </div>
            <div className="region15">
              <img className="image-icon42" alt="" src="/image52.svg" />
              <div className="greenland">Greenland</div>
            </div>
            <div className="region16">
              <img className="image-icon43" alt="" src="/image53.svg" />
              <div className="guatemala">Guatemala</div>
            </div>
            <div className="region17">
              <img className="image-icon44" alt="" src="/image54.svg" />
              <div className="honduras">Honduras</div>
            </div>
            <div className="region18">
              <img className="image-icon45" alt="" src="/image55.svg" />
              <div className="mexico">Mexico</div>
            </div>
            <div className="region19">
              <img className="image-icon46" alt="" src="/image56.svg" />
              <div className="nicaragua">Nicaragua</div>
            </div>
            <div className="region20">
              <img className="image-icon47" alt="" src="/image57.svg" />
              <div className="panama">Panama</div>
            </div>
            <div className="region21">
              <img className="image-icon48" alt="" src="/image15.svg" />
              <div className="saint-pierre-and">Saint Pierre and Miquelon</div>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation1">
        <div className="frame-parent">
          <div className="esimsamsvg-parent">
            <img className="esimsamsvg-icon1" alt="" src="/esimsamsvg1.svg" />
            <div className="south-america1">South America</div>
          </div>
          <div className="frame-group">
            <div className="image-parent">
              <img className="image-icon49" alt="" src="/image58.svg" />
              <div className="argentina1">Argentina</div>
            </div>
            <div className="image-group">
              <img className="image-icon50" alt="" src="/image59.svg" />
              <div className="bolivia1">Bolivia</div>
            </div>
            <div className="image-container">
              <img className="image-icon51" alt="" src="/image60.svg" />
              <div className="brazil1">Brazil</div>
            </div>
            <div className="frame-div">
              <img className="image-icon52" alt="" src="/image61.svg" />
              <div className="chile">Chile</div>
            </div>
            <div className="image-parent1">
              <img className="image-icon53" alt="" src="/image62.svg" />
              <div className="colombia">Colombia</div>
            </div>
            <div className="image-parent2">
              <img className="image-icon54" alt="" src="/image63.svg" />
              <div className="ecuador">Ecuador</div>
            </div>
            <div className="image-parent3">
              <img className="image-icon55" alt="" src="/image64.svg" />
              <div className="french-guiana">French Guiana</div>
            </div>
            <div className="image-parent4">
              <img className="image-icon56" alt="" src="/image65.svg" />
              <div className="guyana">Guyana</div>
            </div>
            <div className="image-parent5">
              <img className="image-icon57" alt="" src="/image66.svg" />
              <div className="paraguay">Paraguay</div>
            </div>
            <div className="image-parent6">
              <img className="image-icon58" alt="" src="/image67.svg" />
              <div className="peru">Peru</div>
            </div>
            <div className="image-parent7">
              <img className="image-icon59" alt="" src="/image68.svg" />
              <div className="suriname">Suriname</div>
            </div>
            <div className="image-parent8">
              <img className="image-icon60" alt="" src="/image69.svg" />
              <div className="uruguay">Uruguay</div>
            </div>
          </div>
        </div>
      </div>
      <Navigation4 />
      <Navigation3 />
      <SoutheastAsia />
      <Navigation2 />
      <Africa />
      <Navigation1 />
      <FooterDesktop1
        linkAppleAppStore1svg="/link--appleappstore1svg@2x.png"
        linkGooglePlayStore1svg="/link--googleplaystore1svg@2x.png"
        linkOutputOnlinepngtoolsp="/link--outputonlinepngtoolspng@2x.png"
        linkEsimsIoBadge7png="/link--esimsiobadge7png@2x.png"
      />
    </div>
  );
};

export default ProductListingPage;
