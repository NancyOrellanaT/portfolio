import TrackVisibility from "react-on-screen";
import "animate.css";

export const Publications = () => {
  return (
    <section className="publication" id="publications">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="publication-box">
              <TrackVisibility>
                {({ isVisible }) => (
                  <h2
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    Publications
                  </h2>
                )}
              </TrackVisibility>
              <ul>
                <li>
                  <p>
                    O. Ormachea, A. Villazon, <strong>A. Orellana</strong> and
                    A. Zenteno, "A low‑cost 3D‑printed spectrometer based on
                    Raspberry Pi". (Preprint)
                  </p>
                </li>
                <li>
                  <p>
                    A. Villazon, O. Ormachea, <strong>A. Orellana</strong>, A.
                    Zenteno, and T. Fransson, "Work in Progress: A Booking
                    System for Remote Laboratories - The EXPLORE Energy Digital
                    Academy (EEDA) case study". (REV2023 Conference, in process
                    to be published)
                  </p>
                </li>
                <li>
                  <p>
                    A. Zenteno, <strong>A. Orellana</strong>, A.Villazon and O.
                    Ormachea, "Automatic Selection of Reference Lines for
                    Spectrometer Calibration with Recurrent Neural Networks".
                    (SmartTech-IC 2022, in process to be published)
                  </p>
                </li>
                <li>
                  <p>
                    A. Villazon, O. Ormachea, A. Zenteno, and{" "}
                    <strong>A. Orellana</strong>, "
                    <a
                      className="link"
                      href="https://link.springer.com/chapter/10.1007/978-3-031-17091-1_21"
                      target="_blank"
                      rel="noreferrer"
                    >
                      A Low-Cost Spectrometry Remote Laboratory
                    </a>
                    " in Artificial Intelligence and Online Engineering, 2023.
                  </p>
                </li>
                <li>
                  <p>
                    E. Rosales, A. Rosa, M. Basso, A. Villazon,{" "}
                    <strong>A. Orellana</strong>, A. Zenteno, et al., "
                    <a
                      className="link"
                      href="https://ieeexplore.ieee.org/document/9763793"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Characterizing Java Streams in the Wild
                    </a>
                    " 26th International Conference on Engineering of Complex
                    Computer Systems (ICECCS), Mar. 2022.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
