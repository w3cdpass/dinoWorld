// src/components/Body.jsx
import React from 'react';

const Body = () => {
    const dinosaurs = [
        {
            name: "Tyrannosaurus Rex",
            era: "Late Cretaceous",
            diet: "Carnivore",
            size: "40 ft long, 12 ft tall",
            fact: "Had the strongest bite of any land animal ever, with a force of 8,000 pounds.",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Tyrannosaurus_Rex_Holotype.jpg"
        },
        {
            name: "Triceratops",
            era: "Late Cretaceous",
            diet: "Herbivore",
            size: "30 ft long, 10 ft tall",
            fact: "Its skull could make up one-third of its entire body length.",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/LA-Triceratops_mount-2.jpg"
        },
        {
            name: "Velociraptor",
            era: "Late Cretaceous",
            diet: "Carnivore",
            size: "6 ft long, 2 ft tall",
            fact: "Contrary to Jurassic Park, they were feathered and about the size of a turkey.",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Velociraptor_skeleton_white_background.jpg"
        },
        {
            name: "Brachiosaurus",
            era: "Late Jurassic",
            diet: "Herbivore",
            size: "85 ft long, 40 ft tall",
            fact: "One of the tallest dinosaurs, with nostrils on top of its head.",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Brachiosaurus_mount.jpg"
        },
        {
            name: "Stegosaurus",
            era: "Late Jurassic",
            diet: "Herbivore",
            size: "30 ft long, 14 ft tall",
            fact: "Had a brain the size of a walnut, weighing just 2.8 ounces.",
            image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Journal.pone.0138352.g001A.jpg"
        },
        {
            name: "Pteranodon",
            era: "Late Cretaceous",
            diet: "Carnivore",
            size: "20 ft wingspan",
            fact: "Not actually a dinosaur, but a flying reptile that lived alongside them.",
            image: "https://upload.wikimedia.org/wikipedia/commons/7/77/Pteranodon_amnh_martyniuk.jpg"
        }
    ];

    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Discover the <span className="text-amber-400">Dinosaurs</span>
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-300">
                        Fascinating creatures that ruled the Earth for over 160 million years
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {dinosaurs.map((dino, index) => (
                        <div
                            key={index}
                            className="bg-gray-700 overflow-hidden shadow-xl rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 "
                                    src={dino.image}
                                    alt={dino.name}
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-100 mb-2">{dino.name} <span className='text-amber-300 text-2xl p-1 rounded-2xl bg-amber-800'>wiki</span></h3>
                                <div className="flex space-x-4 mb-3">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-600 text-amber-300">
                                        {dino.era}
                                    </span>
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${dino.diet === 'Carnivore' ? 'bg-red-900/30 text-red-300' : 'bg-green-900/30 text-green-300'
                                        }`}>
                                        {dino.diet}
                                    </span>
                                </div>
                                <p className="text-gray-300 mb-4">
                                    <span className="font-semibold text-gray-100">Size:</span> {dino.size}
                                </p>
                                <div className="bg-gray-600/50 p-4 rounded-lg border-l-4 border-amber-400">
                                    <p className="text-amber-100 italic">"{dino.fact}"</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-gray-700/50 backdrop-blur-sm rounded-xl p-8 border border-gray-600">
                    <h2 className="text-2xl font-bold text-gray-100 mb-4">Dinosaur Facts</h2>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="flex-shrink-0 h-6 w-6 text-amber-400">✓</span>
                            <p className="ml-3 text-gray-300">
                                The word "dinosaur" comes from Greek meaning "terrible lizard"
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="flex-shrink-0 h-6 w-6 text-amber-400">✓</span>
                            <p className="ml-3 text-gray-300">
                                Birds are the only living descendants of dinosaurs
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="flex-shrink-0 h-6 w-6 text-amber-400">✓</span>
                            <p className="ml-3 text-gray-300">
                                Some dinosaurs like Argentinosaurus weighed up to 100 tons
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="flex-shrink-0 h-6 w-6 text-amber-400">✓</span>
                            <p className="ml-3 text-gray-300">
                                The smallest known dinosaur was about the size of a chicken
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Body;