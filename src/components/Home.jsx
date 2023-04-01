import React from "react";

const Home = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row gap-2 gap-lg-0 gap-md-0">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card w-100">
              <img src="/asset/rapathmps.jpg" className="card-img-top" alt="#" />
              <div className="card-body">
                <h5 className="card-title">Rapat pembentukan panitia</h5>
                <p className="card-text">mahasiswa ilmu komputer mengadakan kegiatan silaturahmi sekaligus buka bersama...</p>
                <a href="#" className="btn btn-primary">
                  Selengkapnya
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card w-100">
              <img src="/asset/camp5.png" className="card-img-top" alt="#" />
              <div className="card-body">
                <h5 className="card-title">bina akrab mahasiswa ilmu komputer</h5>
                <p className="card-text">HMPS-IK Mengadakan kegiatan BINA AKRAB dan BAKTI SOSIAL dengan tujuan merapatkan tali persaudaraan dan meningkatkan kesadaran terhadap kebersihan lingkungan...</p>
                <a href="#" className="btn btn-primary">
                  Selengkapnya
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mt-sm-4 mt-lg-0">
            <div className="card w-100">
              <img src="/asset/kegiatan3.jpg" className="card-img-top" alt="#" />
              <div className="card-body">
                <h5 className="card-title">Healing tipis tipis pengurus hmps</h5>
                <p className="card-text">menjelang libur UAS mahasiswa ilmu komputer memilih healing di pantai labobo</p>
                <a href="#" className="btn btn-primary">
                  Selengkapnya
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mt-sm-4 mt-lg-0">
            <div className="card w-100">
              <img src="/asset/training.png" className="card-img-top" alt="#" />
              <div className="card-body">
                <h5 className="card-title">Training Microsoft Office</h5>
                <p className="card-text">Puluhan siswa-siswi Kelas IX SMP NEGERI 33 BUTON TENGAH mengikuti Traning Microsoft office yang berlangsung di laboratorium komputer SMK NEGERI 5 BUTON TENGAH hari.(17/08/22)</p>
                <a href="#" className="btn btn-primary">
                  Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
