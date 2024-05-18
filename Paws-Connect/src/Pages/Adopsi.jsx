import React from "react";
import styles from "../style";
import { Link } from "react-router-dom";
import AdopsiItem from "../Components/AdopsiItem";
import {
  channie,
  channie2,
  channie3,
  channie4,
  channie5,
  channie6,
  channie7,
  channie8,
  channie9,
} from "../assets";
import NavHeader from "../Components/NavHeader";

const Adopsi = () => {
  return (
    <>
      <NavHeader
        nav="Profil Kucing"
        page="Beranda"
        pagenav1=">"
        page2="Adopsi"
      />
      <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className="grid grid-cols-3 gap-16 p-4">
          <div>
            <Link to="/adopsi-detail">
              <AdopsiItem
                image={channie}
                name="Channie"
                desc="Gen : Betina  *   Usia : 8 Bulan"
              />
            </Link>
          </div>
          <div>
            <AdopsiItem
              image={channie2}
              name="Channie"
              desc="Gen : Betina  *   Usia : 8 Bulan"
            />
          </div>
          <div>
            <AdopsiItem
              image={channie3}
              name="Channie"
              desc="Gen : Betina  *   Usia : 8 Bulan"
            />
          </div>
          <div>
            <AdopsiItem
              image={channie4}
              name="Channie"
              desc="Gen : Betina  *   Usia : 8 Bulan"
            />
          </div>
          <div>
            <AdopsiItem
              image={channie5}
              name="Channie"
              desc="Gen : Betina  *   Usia : 8 Bulan"
            />
          </div>
          <div>
            <AdopsiItem
              image={channie6}
              name="Channie"
              desc="Gen : Betina  *   Usia : 8 Bulan"
            />
          </div>
          <div>
            <AdopsiItem
              image={channie7}
              name="Channie"
              desc="Gen : Betina  *   Usia : 8 Bulan"
            />
          </div>
          <div>
            <AdopsiItem
              image={channie8}
              name="Channie"
              desc="Gen : Betina  *   Usia : 8 Bulan"
            />
          </div>
          <div>
            <AdopsiItem
              image={channie9}
              name="Channie"
              desc="Gen : Betina  *   Usia : 8 Bulan"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Adopsi;
