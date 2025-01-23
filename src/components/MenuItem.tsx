import React from 'react';

interface MenuItemProps {
  name: string;
  description: string;
  image: string;
  price: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, image, price }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <span className="text-orange-600 font-bold">{price}</span>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;