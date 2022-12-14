import React from "react";
import Benefits from "./Benefits";
import FAQs from "./FAQs";
import FirstLine from "./FirstLine";
import Gallery from "./Gallery";
import SecondLine from "./SecondLine";
import SocialIcons from "./SocialIcons";
import Team from "./Team";

const Main = () => {
  return (
    <>
      <section id="hero">
        <div className="hero-sect">
          <img
            src="/images/main-banner.png"
            alt="Main Banner"
            className="img-fluid w-100"
          />
        </div>
      </section>

      <section id="half-n-half">
        <div className="half-n-half">
          <div className="container">

            <FirstLine />

            <div className="row align-items-center pt-3 pb-5 half-n-half-sect right">
              <div className="col-12 col-lg-7">
                <div className="content">
                  <h3>THE EARLY CROW</h3>
                  <p>CRO CROW is the very first NFT on the Cronos Chain. </p>
                  <p>Edition #1 was minted on block #946, just 1 hour and 27 minutes after Cronos was launched: <a href="/">source</a></p>
                  <p>This is the main NFT of the CRO CROW ecosystem, and holders passively earn a share of the project profits via airdrops or royalty distribution.</p>
                </div>
              </div>
              <div className="col-12 col-lg-5">
                <div className="img-wrapper right">
                  <img src="/images/crocrow_gif-1.gif" alt="Crow Songs" className="img-fluid" />
                </div>
              </div>
            </div>

            <SecondLine />

            <Gallery />

            <FirstLine />

            {/* <div className="row align-items-center pt-3 pb-5 half-n-half-sect left">
              <div className="col-lg-5 col-md-6">
                <div className="img-wrapper left">
                  <img src="/images/cronospunk_gif-2.gif" alt="Crow Songs" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="content text-end">
                  <h3>CRONOS PUNK</h3>
                  <p>CRONOS PUNK was the second NFT deployed on the Cronos Chain. </p>
                  <p>The contract was deployed 5 hours after CRO CROW, on block #4257: <a href="/">source</a></p>
                  <p>This NFT eventually adopted by the CRO CROW team, since the original team became inactive and the community wanted to move forward..</p>
                </div>
              </div>
            </div> */}

            {/* <FirstLine /> */}

            <Benefits />
            <SecondLine />
            <Team />
            <FirstLine />
            <FAQs />
            <SecondLine />

          </div>
        </div>
      </section>

      <footer>
        <div className="img-wrapper">
          <img src="/images/footer.gif" alt="Song Crows" className="img-fluid w-100" />
        </div>
        <div className="footer-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="img-fluid d-flex flex-row align-items-center">
                  <img src="/logo.png" alt="Song Crows" className="img-fluid" />
                  <p className="mb-0 ms-3 text-white lh-1">contact@songcrows.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Main;
