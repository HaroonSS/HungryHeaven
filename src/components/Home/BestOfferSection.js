import { bannerList } from "../../utils/mockData"

const bestOfferSection = ({addressText}) => {
  return (
    <>
      <div className="res-header bestOfferSection">Best offers for you in {addressText}</div>
      <div className="image-row-container">
      {bannerList.map((banner) => (
            <div className="image-item">
              <a aria-label="Flat deals">
                <img
                  key={banner.id} 
                  src={banner.imgUrl} 
                  alt="Flat deals"
                  loading="lazy"
                />
              </a>
            </div>
      ))}
      </div>
    </>
  );
};

export default bestOfferSection;