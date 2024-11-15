import Link from 'next/link';

interface MaterialCardProps {
  title: string;
  description: string;
  image: string;
  path: string;
}

const MaterialCard: React.FC<MaterialCardProps> = ({ title, description, image, path }) => {
  return (
    <div className="shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow max-w-xs">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-6">
        <h5 className="font-bold text-green-800 mb-4 text-xl">{title}</h5>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          href={path}
          className="inline-block px-6 py-2 border-2 border-green-800 text-green-800 hover:bg-green-800 hover:text-white transition-colors rounded-lg"
        >
          Pelajari Lebih Lanjut
        </Link>
      </div>
    </div>
  );
};

export default MaterialCard;
