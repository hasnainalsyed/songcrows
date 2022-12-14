import React from "react";

const Team = () => {
  const teamMembers = [
    {
      url: "https://twitter.com",
      img: "/images/destruction.png",
      name: "@destructioneth",
      designation: "Founder and Dev",
    },
    {
      url: "https://twitter.com",
      img: "/images/alemf.png",
      name: "@ale_nf",
      designation: "Artist & Design",
    },
    {
      url: "https://twitter.com",
      img: "/images/blueaxolotl.png",
      name: "@BlueAxolotlETH",
      designation: "Community Manager",
    },
    // {
    //   url: "https://twitter.com",
    //   img: "/images/joel.png",
    //   name: "@Joel_",
    //   designation: "Discord Mod",
    // },
  ];

  return (
    <div className="row team justify-content-center">
      <div className="col-12">
        <div className="heading text-center">
          <h2>THE CRO CROW TEAM </h2>
        </div>
      </div>
      {teamMembers.map(({url, img, name, designation }) => {
        return (
          <div className="col-md-4" key={name}>
            <a
              href={url}
              className="team-member"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={img}
                alt="Destruction"
                className="img-fluid"
              />
              <h4>{name}</h4>
              <p>{designation}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Team;
