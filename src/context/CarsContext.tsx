import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchCars, fetchOneCar } from "../../api/api";

export interface Car {
    _id: string;
    name: string;
    image: string;
    description: string;
    price: number;
    type: string;
}

interface CarsContextType {
    cars: Car[];
    loading: boolean;
    error: string | null;
    getCars: (filters?: any) => void;
    getCarById: (id: string) => Promise<Car | null>;
}

const CarsContext = createContext<CarsContextType | undefined>(undefined);

export const CarsProvider = ({ children }: { children: React.ReactNode }) => {
    const [cars, setCars] = useState<Car[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const getCars = async (filters = {}) => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchCars(filters);
            setCars(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const getCarById = async (id: string) => {
        const existingCar = cars.find(c => c._id === id);
        if (existingCar) return existingCar;

        try {
            return await fetchOneCar(id);
        } catch (err) {
            console.error(err);
            return null;
        }
    };

    useEffect(() => {
        getCars();
    }, []);

    return (
        <CarsContext.Provider value={{ cars, loading, error, getCars, getCarById }}>
            {children}
        </CarsContext.Provider>
    );
};

export const useCars = () => {
    const context = useContext(CarsContext);
    if (!context) throw new Error("useCars must be used within a CarsProvider");
    return context;
};