import { CuisinesList } from "../../utils/mockData";

const Cuisines = ({ addressText }) => {
  return (
    <>
      <div className="res-header">What's on your mind?</div>
      <div className="image-scroll-container">

        {Object.keys(CuisinesList).map((key) => (
          <div key={key} className="image-item">
            <img src={CuisinesList[key]?.imgUrl} className="" loading="lazy" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Cuisines;
