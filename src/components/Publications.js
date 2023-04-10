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
                    Ormachea, O., Villazon, A., <strong>Orellana, A.</strong>,
                    Zenteno, A. A low‑cost 3D‑printed spectrometer based on
                    Raspberry Pi. (Preprint)
                  </p>
                </li>
                <li>
                  <p>
                    Work in Progress: A Booking System for Remote Laboratories -
                    The EXPLORE Energy Digital Academy (EEDA) case study.
                    (REV2023 Conference, in process to be published)
                  </p>
                </li>
                <li>
                  <p>
                    Zenteno A., <strong>Orellana A.</strong>, Villazon A., and
                    Ormachea O. Automatic Selection of Reference Lines for
                    Spectrometer Calibration with Recurrent Neural Networks.
                    (SmartTech-IC 2022, in process to be published)
                  </p>
                </li>
                <li>
                  <p>
                    Villazon, A., Ormachea, O., Zenteno, A.,{" "}
                    <strong>Orellana, A.</strong>
                    (2023).
                    <a
                      className="link"
                      href="https://link.springer.com/chapter/10.1007/978-3-031-17091-1_21"
                      target="_blank"
                      rel="noreferrer"
                    >
                      A Low-Cost Spectrometry Remote Laboratory.
                    </a>
                    In: Auer, M.E., El-Seoud, S.A., Karam, O.H. (eds) Artificial
                    Intelligence and Online Engineering. REV 2022. Lecture Notes
                    in Networks and Systems, vol 524. Springer, Cham.
                    https://doi.org/10.1007/978-3-031-17091-1_21.
                  </p>
                </li>
                <li>
                  <p>
                    E. Rosales et al., "
                    <a
                      className="link"
                      href="https://ieeexplore.ieee.org/document/9763793"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Characterizing Java Streams in the Wild
                    </a>
                    ," 2022 26th International Conference on Engineering of
                    Complex Computer Systems (ICECCS), 2022, pp. 143-152, doi:
                    10.1109/ICECCS54210.2022.00025.
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
