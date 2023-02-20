import Image from "../../assets/profile.jpg";

const Profile = () => {
  return (
    <div className="profile">
      <img className="image" src={Image} alt="My image" />

      <div className="text">
        <p className="intro">
          This app/website was designed and developed by the great Segun Owolabi
          A.K.A Segun Drey, A.K.A Sosh Carter, A.K.A Seego Manny, A.K.A Owzbi
          Lion, A.K.A Ikotun boy wey dey go foreign.
        </p>

        <p className="bio">
          Seego is a Result oriented, practical, creative and technical web
          development professional with two years experience designing and
          developing sites from concept to roll out. Foundational grasp of
          various JavaScript, CSS and HTML options, Sass, React, development
          platforms and security requirements. An unwavering commitment to
          company goals, with the ability to build productive relationships,
          resolve complex issues and win customer loyalty. Adept in detecting,
          troubleshooting and contributing to the resolution of flaws in code of
          web products. Work well under pressure and time constraints within
          high-volume environments. Looking for a position where I can enhance
          my knowledge of design principles and grow with the organization
        </p>

        <div className="socials">
          <a href="https://github.com/seeego">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png"
              alt="my github"
            />{" "}
          </a>
          <a href="https://twitter.com/seego">
            <img
              src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
              alt="my github"
            />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
