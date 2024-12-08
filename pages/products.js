import {data} from '../components/data'

export default function Products(){

  return (
    <div className="flex flex-wrap gap-6 justify-center p-4">
      {data && data.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden w-64"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">{product.title}</h3>
            <p className="text-gray-500">{product.location}</p>
            <p className="text-indigo-600 font-semibold mt-2">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

