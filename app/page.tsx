"use client";
import Card from '@/components/Card';
import Tab from '../components/Tab';
import Image from 'next/image';
import ayamBakar from '../public/images/nasi-ayam-bakar.jpg'
import ayamGoreng from '../public/images/ayam-goreng.jpg'
import nasiGoreng from '../public/images/nasi-goreng.jpg'
import mieGoreng from '../public/images/mie-tektek.jpg'
import airMineral from '../public/images/air-mineral.jpg'
import tehManis from '../public/images/teh-manis.jpg'
import { useState } from 'react';
import Header from '@/components/Header';
export default function Home() {

  const menus:any[]= [
    {
      name: "Ayam Bakar",
      price: 20,
      description: "Ayam Bakar dengan nasi hangat dan sambal",
      image: ayamBakar,
      category: 'Makanan'
    },
    {
      name: "Ayam Goreng",
      price: 20,
      description: "Ayam Goreng dengan nasi hangat dan sambal",
      image: ayamGoreng,
      category: 'Makanan'
    },
    {
      name: "Nasi Goreng",
      price: 15,
      description: "Nasi goreng spesial dengan telur dan acar",
      image: nasiGoreng,
      category: 'Makanan'
    },
    {
      name: "Mie Goreng",
      price: 15,
      description: "Mie goreng spesial dengan telur dan acar",
      image: mieGoreng,
      category: 'Makanan'
    },
    {
      name: "Teh Manis",
      price: 5,
      description: "Tah manis segar",
      image: tehManis,
      category: 'Minuman'
    },
    {
      name: "Air Mineral",
      price: 5,
      description: "Air mineral",
      image: airMineral,
      category: 'Minuman'
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState<string>("Makanan");

  const categories = ["Makanan", "Minuman"];
  const filteredMenus = menus.filter((menu) => menu.category === selectedCategory);

  return (
    <div className="bg-neutral-200 h-screen">
      <Header/>
      <Tab categories={categories}
      selectedCategory={selectedCategory}
      onSelectCategory={setSelectedCategory}/>
      <div className="relative h-dvh rounded-t-3xl mt-24 bg-gradient-to-r from-indigo-500 to-indigo-800">
        <div className="relative top-[-80px]">
          <div className="grid grid-cols-2 gap-2 p-3">
            {filteredMenus.map((menu:any) => (
              // Card
              <div key={menu.name} className="shadow rounded-lg bg-white p-3 mt-2 relative">
                  <Image  src={menu.image} className="w-56 h-36 object-cover" alt="" />
                  <h3 className="text-lg font-semibold text-neutral-700 mt-4">{menu.name}</h3>
                  <div className="absolute top-3 left-3 bg-red-600 opacity-80">
                    <p className="text-white px-2 font-semibold">{menu.price}K</p>
                  </div>
                  <button className="border border-indigo-500 rounded-2xl px-3 py-1 text-indigo-500 font-semibold text-sm hover:bg-indigo-500 hover:duration-400 hover:transition-colors hover:text-white">Tambah</button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
