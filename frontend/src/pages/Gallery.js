import React, { useState } from "react";
import "./Gallery.css";

const images = [
  {
    src: "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795014/1_a5pru9.jpg",
    alt: "Фото 1",
    tall: true,
  },
  {
    src: "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795016/5_o3kq0i.jpg",
    alt: "Фото 2",
    tall: false,
  },
  {
    src: "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795016/6_huvb74.jpg",
    alt: "Фото 3",
    tall: true,
  },
  {
    src: "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795023/17_pon7cb.jpg",
    alt: "Фото 4",
    tall: false,
  },
  {
    src: "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795017/7_smdkcl.jpg",
    alt: "Фото 5",
    tall: true,
  },
  {
    src: "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795025/19_cqt8yn.jpg",
    alt: "Фото 6",
    tall: true,
  },
  {
    src: "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795021/14_sm5fcu.jpg",
    alt: "Фото 7",
    tall: true,
  },
  {
    src: "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795025/20_x0vlhd.jpg",
    alt: "Фото 8",
    tall: false,
  },
  {
    src: "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795017/4_ht19vi.jpg",
    alt: "Фото 9",
    tall: false,
  },
  {
    src: "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795028/23_xmfrnk.jpg",
    alt: "Фото 10",
    tall: false,
  },
  {
    src: "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795022/15_wd0vyg.jpg",
    alt: "Фото 11",
    tall: true,
  },
  {
    src: "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795029/24_ucrzal.jpg",
    alt: "Фото 12",
    tall: false,
  },
  {
    src: "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795020/12_avn1xw.jpg",
    alt: "Фото 13",
    tall: true,
  },
  {
    src: "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795021/13_tsbilo.jpg",
    alt: "Фото 14",
    tall: false,
  },
  {
    src: "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795015/3_cjqai1.jpg",
    alt: "Фото 15",
    tall: true,
  },
  {
    src: "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795025/18_o6i1xy.jpg",
    alt: "Фото 16",
    tall: true,
  },
  {
    src: "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795027/21_xjzfh9.jpg",
    alt: "Фото 17",
    tall: true,
  },
  {
    src: "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795030/26_ffrkfa.jpg",
    alt: "Фото 18",
    tall: false,
  },
  {
    src: "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795022/16_mtirnx.jpg",
    alt: "Фото 19",
    tall: false,
  },
  {
    src: "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795015/2_de37m9.jpg",
    alt: "Фото 20",
    tall: false,
  },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-page">
      <h2 className="gallery-title">Галерея</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className={`gallery-item-wrapper ${img.tall ? "tall" : ""}`}
            onClick={() => setSelectedImage(img.src)}
          >
            <img src={img.src} alt={img.alt} className="gallery-item" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Фото" className="lightbox-image" />
        </div>
      )}
    </div>
  );
}

export default Gallery;
