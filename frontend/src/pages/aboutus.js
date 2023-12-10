import { useNavigate } from "react-router-dom";

function AboutUsPage() {
  const navigate = useNavigate();

  const back = () => {
    navigate("/register");
  };

  const styles = {
    backButton: {
      backgroundColor: "#f0f0f0",
      color: "#333",
      padding: "10px 15px",
      border: "none",
      borderRadius: "3px",
      cursor: "pointer",
      marginTop: "10px",
      marginLeft: "5px",
    },
  };

  return (
    <div>
      <h1 style={{ marginTop: 20 }}>About Us</h1>
      <div>
        <h4 style={{ textAlign: "left", marginLeft: 200, color: "green" }}>
          Authors
        </h4>
        <p style={{ textAlign: "left", marginLeft: 250 }}>
          Our project is the collaborative effort of four dedicated individuals:
          Trung Tran, Zahra Shaikh, Kolby Salmond and Jasper Nguyen
        </p>
        <h4 style={{ textAlign: "left", marginLeft: 200, color: "green" }}>
          Purpose of Project
        </h4>
        <p style={{ textAlign: "left", marginLeft: 250, marginRight: 250 }}>
          At our core, we are committed to helping you make the most of your
          culinary journey. Our project was born from a shared passion for
          cooking, nutrition, and the desire to make meal planning a breeze.
          With this in mind, our primary goals are twofold:
          <ol>
            <li style={{ textAlign: "left", marginRight: 250 }}>
              Recipe Generation: We aim to simplify your cooking experience by
              generating recipes tailored to the ingredients you already have in
              your pantry. No more last-minute grocery runs or wasted food;
              we've got you covered.
            </li>
            <li style={{ textAlign: "left", marginRight: 250 }}>
              Nutrition Tracking: We want to empower you to make informed
              decisions about your diet. Our project includes features that help
              you track the nutritional content of your meals, making it easier
              to meet your health and fitness goals.
            </li>
          </ol>
          We are here to support you in meeting your health needs and goals
          while also saving you money and time in the kitchen.
        </p>
        <h4 style={{ textAlign: "left", marginLeft: 200, color: "green" }}>
          School/Organization
        </h4>
        <p style={{ textAlign: "left", marginLeft: 250, marginRight: 250 }}>
          Our project is a product of the creative and innovative minds at San
          Jose State University. We are proud to have had the opportunity to
          develop this platform as part of our academic journey.
        </p>
        <h4 style={{ textAlign: "left", marginLeft: 200, color: "green" }}>
          Release Date
        </h4>
        <p style={{ textAlign: "left", marginLeft: 250, marginRight: 250 }}>
          Our project is set to be officially launched in December 2023. We
          can't wait to share it with you and help you revolutionize the way you
          approach cooking and nutrition.
        </p>
      </div>
      <button onClick={back} style={styles.backButton}>
        Back
      </button>
    </div>
  );
}

export default AboutUsPage;
