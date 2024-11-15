'use client';
import React from 'react';
import Slider from 'react-slick';

interface Testimonial {
  name: string;
  feedback: string;
  rating: number; // Menambahkan rating
}

const testimonials: Testimonial[] = [
  { name: "Albert", feedback: "MOOD really helps my child learn math in a fun way!", rating: 5 },
  { name: "Angelina", feedback: "With the environmental theme, children become more aware of the importance of protecting nature.", rating: 4 },
  { name: "Alexandria", feedback: "The virtual garden is very engaging; my children have become more eager to study.", rating: 4 },
];


const Testimonials: React.FC = () => {
  const settings = {
    dots: true, // Menambahkan indikator dots di bawah slider
    infinite: true, // Menyusun testimonial secara melingkar
    speed: 500, // Kecepatan transisi
    slidesToShow: 1, // Menampilkan satu testimonial per slide
    slidesToScroll: 1, // Setiap kali scroll hanya satu testimonial
    autoplay: true, // Mengaktifkan autoplay
    autoplaySpeed: 3000, // Kecepatan perubahan slide
  };

  return (
    <section id="testimonials" className="py-12 md:py-20 px-6 lg:px-8 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Gambar di Kiri */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="./img/testi.png" // Ganti dengan gambar sesuai kebutuhan
            alt="Testimonial"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Slider Testimonial di Kanan */}
        <div className="w-full md:w-1/2">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-4">
                <div className="card shadow-xl border-2 border-gray-200 rounded-lg">
                  <div className="card-body text-center p-6">
                    <p className="text-base md:text-lg text-gray-700 italic">“{testimonial.feedback}”</p>
                    <p className="mt-4 text-xl font-bold text-green-800">- {testimonial.name}</p>

                    {/* Menambahkan Rating */}
                    <div className="flex justify-center mt-4">
                      {/* Loop untuk menampilkan bintang */}
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill={i < testimonial.rating ? "#FFD700" : "#e4e5e9"} // Warna bintang: emas untuk rating yang ada
                          className="w-6 h-6"
                        >
                          <path d="M12 17.3l6.7 4.4-1.8-7.2 5.8-4.9-7.5-.6-2.5-7.3-2.5 7.3-7.5 .6 5.8 4.9-1.8 7.2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
