import React, { createContext, useContext, useState } from "react";

export interface Car {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    type: string; 
}

const initialCars: Car[] = [
    {
        id: 1,
        name: "Mercedes S63",
        image: "https://pngimg.com/d/mercedes_PNG80146.png",
        description: 'The Mercedes S63 combines elegant design with powerful performance.',
        price: 150000,
        type: "sedan"
    },
    {
        id: 2,
        name: "BMW M4 Coupe",
        image: "https://www.lloydmotorgroup.com/ImageLibrary/images/BMW/Retail/Master/New%20Cars/M%20Cars/M4%20Coupe%20Gallery/BMW-G82-M4-Tanzanite-Blue-thmub.png",
        description: 'The BMW M4 delivers precise handling and thrilling acceleration.',
        price: 78000,
        type: "coupe"
    },
    {
        id: 3,
        name: "Audi Q7",
        image: "https://www.freeiconspng.com/uploads/audi-q7-car-png-image-black-jeep-2.png",
        description: 'The Audi Q7 blends dynamic performance with modern design.',
        price: 30000,
        type: "suv"
    },
];

interface CarsContextType {
    cars: Car[];
}

const CarsContext = createContext<CarsContextType | undefined>(undefined);

export const CarsProvider = ({ children }: { children: React.ReactNode }) => {
    const [cars] = useState<Car[]>(initialCars);

    return (
        <CarsContext.Provider value={{ cars }}>
            {children}
        </CarsContext.Provider>
    );
};

export const useCars = () => {
    const context = useContext(CarsContext);
    if (!context) throw new Error("useCars must be used within a CarsProvider");
    return context;
};