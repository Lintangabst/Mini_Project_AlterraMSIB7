import MaterialCard from '../components/MaterialsCard';

interface Material {
  title: string;
  description: string;
  image: string;
  path: string;
}

const materials: Material[] = [
  {
    title: 'Penjumlahan dan Pengurangan (Adding & Subtracting)',
    description:
      'Penjumlahan adalah ketika kita menambahkan dua atau lebih angka bersama-sama untuk mendapatkan angka yang lebih besar. Pengurangan adalah ketika kita mengurangi angka dari angka yang lebih besar.',
    image: '/img/adding.png',
    path: '/AdditionAndSubtracting',
  },
  {
    title: 'Perkalian dan Pembagian (Multiplying & Dividing)',
    description:
      'Perkalian adalah menambah angka yang sama berkali-kali. Pembagian adalah membagi sesuatu menjadi bagian yang lebih kecil dan sama rata.',
    image: '/img/multiply.png',
    path: '/MultiplicationAndDivision',
  },
  {
    title: 'Video Pembelajaran (Multiplying & Dividing)',
    description:
      'Tonton video pembelajaran tentang cara mengalikan dan membagi angka dengan benar.',
    image: '/img/video.png',
    path: '/VideoLearning',
  },
];

const Home: React.FC = () => {
  return (
    <section id="materials" className="py-20 px-4">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-green-800 text-center mb-12">
          Materi Pembelajaran Matematika - Eco Friendly 🌱
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {materials.map((material, index) => (
            <MaterialCard
              key={index}
              title={material.title}
              description={material.description}
              image={material.image}
              path={material.path}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
