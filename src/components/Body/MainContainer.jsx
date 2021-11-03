import MyMarkets from "./MyMarkets";
import DealsAndOffers from "./DealsAndOffers";
import Apparel from "./Apparel";
import Electronics from "./Electronics";
import RequestForQuotation from "./RequestForQuotation";
import RecommendedItems from "./RecommendedItems";
import TradeServices from "./TradeServices";
import ChooseRegion from "./ChooseRegion";

const MainContainer = () => {
  return (
    <>
      {/* LeftSide NavBar */}
      <div class="container">
        
        <MyMarkets/>
        <DealsAndOffers/>
        <Apparel/>
        <Electronics/>
        <RequestForQuotation/>
        <RecommendedItems/>
        <TradeServices/>
        <ChooseRegion/>

       
        <article class="my-4">
          <img src="assets/images/banners/ad-sm.png" class="w-100" />
        </article>
      </div>
    </>
  );
};

export default MainContainer;
