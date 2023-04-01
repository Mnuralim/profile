import React from "react";

function Kemahasiswaan() {
  return (
    <div>
      <div className="container mt-4">
        <h2 className="justify-content-center text-center">Program & Kegiatan Kemahasiswaan</h2>
      </div>

      <div className="container mt-5">
        <div className="row gap-2 gap-lg-0 gap-md-0">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card w-100">
              <img src="./asset/kegiatan1.jpg" className="card-img-top" alt="#" />
              <div className="card-body">
                <h5 className="card-title">Rapat evaluasi panita pengkaderan maba ilkom 2022</h5>
                <p className="card-text">mahasiswa ilmu komputer mengadakan kegiatan pengkaderan mahasiswa baru ilmu komputer</p>
                <a href="#" className="btn btn-primary">
                  Selengkapnya
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card w-100">
              <img src="./asset/kegiatan2.jpg" className="card-img-top" alt="#" />
              <div className="card-body">
                <h5 className="card-title">Kajian rutin oleh mahasiswa ilmu komputer usn buteng</h5>
                <p className="card-text">pengurus hmps mengadakan kegiatan kajian rutin dengan mengundang beberapa pemateri</p>
                <a href="#" className="btn btn-primary">
                  Selengkapnya
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mt-sm-4 mt-lg-0">
            <div className="card w-100">
              <img src="./asset/kegiatan3.jpg" className="card-img-top" alt="#" />
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
              <img src="./asset/kegiatan4.jpg" className="card-img-top" alt="#" />
              <div className="card-body">
                <h5 className="card-title">Sosialisasi mahasiswa ilmu komputer</h5>
                <p className="card-text">mahasiswa ilmu komputer usn buteng tengah melakukan sosialisasi di SMKN 1 BUTON TENGAH</p>
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
}

export default Kemahasiswaan;
