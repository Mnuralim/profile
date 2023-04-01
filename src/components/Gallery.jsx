import React from "react";

const Gallery = () => {
  return (
    <div>
      <div class="container border border-primary rounded-4 d-grid gap-3 mt-5">
        <h3 class="container galeri text-primary mt-2">Galeri foto</h3>
        <div class="row gap-2 gap-md-0 gap-lg-0">
          <div class="col-lg-4 col-md-6">
            <div class="card w-100">
              <img src="/asset/binaakrab.jpg" class="card-img-top" alt="#" />
              <div class="card-body">
                <h4 class="card-subtitle mb-2 text-muted fw-bold">Kegiatan</h4>
                <p class="card-text">kegiatan bina akrab mahasiswa ilmu komputer</p>
                <a href="#" class="card-link">
                  gambar lainnya
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card w-100">
              <img src="/asset/kegiatan1.jpg" class="card-img-top img-fluid" alt="#" />
              <div class="card-body">
                <h4 class="card-subtitle mb-2 text-muted fw-bold">Rapat</h4>
                <p class="card-text">Rapat Evaluasi panitia pengkaderan ilkom</p>
                <a href="#" class="card-link">
                  gambar lainnya
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card w-100">
              <img src="/asset/lab.jpg" class="card-img-top img-fluid" alt="#" />
              <div class="card-body">
                <h4 class="card-subtitle mb-2 text-muted fw-bold">Kelas</h4>
                <p class="card-text">Ruang lab ilmu komputer</p>
                <a href="#" class="card-link">
                  gambar lainnya
                </a>
              </div>
            </div>
          </div>
        </div>

        <h3 class="container galeri text-primary">Galeri Video</h3>
        <div class="row gap-2 gap-md-0 gap-lg-0 mb-2">
          <div class="col-lg-4 col-md-6">
            <div class="card w-100">
              <img src="/asset/binaakrab.jpg" class="card-img-top" alt="#" />
              <div class="card-body">
                <h4 class="card-subtitle mb-2 text-muted fw-bold">Kegiatan</h4>
                <p class="card-text">kegiatan bina akrab mahasiswa ilmu komputer</p>
                <a href="#" class="card-link">
                  video lainnya
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card w-100">
              <img src="/asset/kegiatan1.jpg" class="card-img-top" alt="#" />
              <div class="card-body">
                <h4 class="card-subtitle mb-2 text-muted fw-bold">Rapat</h4>
                <p class="card-text">Rapat Evaluasi panitia pengkaderan ilkom</p>
                <a href="#" class="card-link">
                  video lainnya
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card w-100">
              <img src="/asset/lab.jpg" class="card-img-top img-fluid" alt="#" />
              <div class="card-body">
                <h4 class="card-subtitle mb-2 text-muted fw-bold">Kelas</h4>
                <p class="card-text">Ruang lab ilmu komputer</p>
                <a href="#" class="card-link">
                  video lainnya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
