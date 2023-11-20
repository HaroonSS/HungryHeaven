import aboutImg from "../images/about-us.png";

const About = () => {
  return (
    <div className="AboutUs">
      <div className="AboutUsContent">
        <p className="AboutUsTitle">HungryHeaven</p>
        <p className="AboutUsSubtitle">Delicious Food is Waiting For You....</p>
        <p className="AboutUsDescription">
          We build innovative products & solutions that deliver unparalleled
          convenience to urban consumers. The best part? Every bit of your work
          at <strong>HungryHeaven</strong> will help elevate the lives of our users across India.
        </p>
        <p>
          At <strong>HungryHeaven</strong>, we're passionate about delivering
          delicious meals straight to your doorstep. Our mission is to provide
          convenient and tasty dining experiences for our customers.
        </p>
        <p>
          Our dedicated team of chefs and delivery drivers work tirelessly to
          ensure you receive your favorite dishes in a timely manner. We pride
          ourselves on the quality of our food and the satisfaction of our
          customers.
        </p>
        <p>
          Thank you for choosing <strong>HungryHeaven</strong>. We look forward to
          serving you and satisfying your cravings!
        </p>
      </div>
      <div className="AboutUsImage">
        <img src={aboutImg} alt="about-us-img"></img>
      </div>
    </div>
  );
};

export default About;
