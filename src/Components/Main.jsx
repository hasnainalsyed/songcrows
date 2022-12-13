import React from "react";
import Benefits from "./Benefits";
import SocialIcons from "./SocialIcons";

const Main = () => {
  return (
    <>
      <section id="hero">
        <div className="hero-sect">
          <img
            src="/images/main-banner.png"
            alt="Main Banner"
            className="img-fluid"
          />
        </div>
      </section>

      <section id="half-n-half">
        <div className="half-n-half">
          <div className="container">

            <div className="row first-line">
              <div className="col-12">
                <div class="group">
                  <hr
                    aria-orientation="horizontal"
                    class="chakra-divider css-44cso2"
                  />
                  <img src="images/crow-1.png" alt="Song Crow" className="img-fluid" />
                  <img src="images/crow-2.png" alt="Song Crow" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="row align-items-center pt-3 pb-5 half-n-half-sect right">
              <div className="col-lg-7 col-md-6">
                <div className="content">
                  <h3>THE EARLY CROW</h3>
                  <p>CRO CROW is the very first NFT on the Cronos Chain. </p>
                  <p>Edition #1 was minted on block #946, just 1 hour and 27 minutes after Cronos was launched: <a href="/">source</a></p>
                  <p>This is the main NFT of the CRO CROW ecosystem, and holders passively earn a share of the project profits via airdrops or royalty distribution.</p>
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="img-wrapper right">
                  <img src="/images/crocrow_gif-1.gif" alt="Crow Songs" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="row second-line">
              <div className="col-12">
                <div class="group">
                  <hr
                    aria-orientation="horizontal"
                    class="chakra-divider css-44cso2"
                  />
                  <img src="images/crow-1.png" alt="Song Crow" className="img-fluid" />
                  <img src="images/crow-2.png" alt="Song Crow" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="row align-items-center pt-3 pb-5 half-n-half-sect left">
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
            </div>

            <div className="row first-line">
              <div className="col-12">
                <div class="group">
                  <hr
                    aria-orientation="horizontal"
                    class="chakra-divider css-44cso2"
                  />
                  <img src="images/crow-1.png" alt="Song Crow" className="img-fluid" />
                  <img src="images/crow-2.png" alt="Song Crow" className="img-fluid" />
                </div>
              </div>
            </div>

            <Benefits />

            <div className="row second-line">
              <div className="col-12">
                <div class="group">
                  <hr
                    aria-orientation="horizontal"
                    class="chakra-divider css-44cso2"
                  />
                  <img src="images/crow-1.png" alt="Song Crow" className="img-fluid" />
                  <img src="images/crow-2.png" alt="Song Crow" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="row team justify-content-center">
              <div className="col-12">
                <div className="heading text-center">
                  <h2>THE CRO CROW TEAM   </h2>
                </div>
              </div>
              <div className="col-md-4">
                <a href="www.twitter.com" className="team-member" target='_blank' rel="noreferrer">
                  <img src="/images/destruction.png" alt="Destruction" className="img-fluid" />
                  <h4>@destructioneth</h4>
                  <p>Founder and Dev</p>
                </a>
              </div>
              <div className="col-md-4">
                <a href="www.twitter.com" className="team-member" target='_blank' rel="noreferrer">
                  <img src="/images/alemf.png" alt="Alemf" className="img-fluid" />
                  <h4>@ale_nf</h4>
                  <p>Artist & Design</p>
                </a>
              </div>
              <div className="col-md-4">
                <a href="www.twitter.com" className="team-member" target='_blank' rel="noreferrer">
                  <img src="/images/blueaxolotl.png" alt="Blueaxolotl" className="img-fluid" />
                  <h4>@BlueAxolotlETH</h4>
                  <p>Community Manager</p>
                </a>
              </div>
              <div className="col-md-4">
                <a href="www.twitter.com" className="team-member" target='_blank' rel="noreferrer">
                  <img src="/images/joel.png" alt="Joel" className="img-fluid" />
                  <h4>@Joel_</h4>
                  <p>Discord Mod</p>
                </a>
              </div>
            </div>

            <div className="row first-line">
              <div className="col-12">
                <div class="group">
                  <hr
                    aria-orientation="horizontal"
                    class="chakra-divider css-44cso2"
                  />
                  <img src="images/crow-1.png" alt="Song Crow" className="img-fluid" />
                  <img src="images/crow-2.png" alt="Song Crow" className="img-fluid" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer>
        <div className="img-wrapper">
          <img src="/images/footer.gif" alt="Song Crows" className="img-fluid" />
        </div>
        <div className="footer-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="img-fluid d-flex flex-row align-items-center">
                  <img src="/logo.png" alt="Song Crows" className="img-fluid" />
                  <p className="mb-0 ms-3 text-white lh-1 fs-3">contact@songcrows.com</p>
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
