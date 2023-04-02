import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="profil container mt-5">
        <div className="text-center pt-4">
          <h3 className="fw-bold">PROFIL HMPS-IK FTI USN KOLAKA</h3>
        </div>
        <div className="row text-dark lh-4 mt-3 align-items-center text-center">
          <div id="visi" className="visi col-12 pt-3 ">
            <h2 className="fw-bold text-primary">Visi</h2>
            <center>
              <ol className="uppercase">
                <li>
                  Menjadikan HMPS-IK berprinsip
                  <span> DIGITAL </span> (Disiplin, Giat dan Total dengan menjaga konsistensi tanggung jawab berorganisasi dan memelihara keharmonisan)
                </li>
                <li>menjadikan mahasiswa Ilmu Komputer yang partisipatif, loyalitas dan adaptif terhadap HMPS - IK</li>
              </ol>
            </center>
            <h2 className="fw-bold text-primary">Misi</h2>
            <center>
              <ol className="uppercase">
                <li>MENJADIAKAN MAHASISWA ILMU KOMPUTER SEBAGAI MAHASISWA YANG PENUH DENGAN KREATIFITAS</li>
                <li>MENJADIKAN PROGRAM STUDI ILMU KOMPUTER SEBAGAI PROGRAM STUDI YANG TERPANDANG.</li>
              </ol>
            </center>

            <h2 className="fw-bold text-primary">Sejarah</h2>
            <center>
              <p className="uppercase">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sunt asperiores voluptate repellat quaerat aperiam pariatur dolore veritatis, eaque quas eius autem cupiditate magni, sint natus omnis id perspiciatis explicabo.
                Pariatur praesentium provident ullam velit beatae! Officia et deserunt excepturi eos tempora fuga. Illum deleniti officiis perspiciatis, qui laborum dicta recusandae amet? Tempora omnis velit sint, amet sit neque sapiente.
                Sed, totam quod inventore, dolores impedit ipsam alias quibusdam atque tempore ea odio quis, doloremque assumenda. Explicabo deserunt, in soluta consequatur doloremque mollitia. Ea, aspernatur sint minus praesentium nostrum
                iste?
              </p>
            </center>
            <div>
              <h2 id="struktur" className="fw-bold text-primary">
                Struktur Organisasi
              </h2>
              <a href="#">
                <img className="gambar" src="/asset/struktur (2).png" alt="struktur" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
