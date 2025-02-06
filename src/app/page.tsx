'use client';
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {

      const [selectedMake, setSelectedMake] = useState<string>("");
      const [selectedYear, setSelectedYear] = useState<string>("");
      const [car, setCar] = useState<any[]>([]);
    
      const years = Array.from(
        { length: new Date().getFullYear() - 2014 },
        (_, i) => 2015 + i
      );
    
      const isNextEnabled = selectedMake && selectedYear;
  
      useEffect(() => {
        fetchCar();
      }, []);
  
      const fetchCar = async () => {
          try {
              const response = await fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json");
              const data = await response.json();
              setCar(data.Results);
          
          } catch (error) {
              setCar([]);
          }
      };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-slate-400">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-lg mx-auto bg-slate-50 rounded-2xl shadow-lg p-8 space-y-8">
          <div className="space-y-2 text-center ">
            <h1 className="text-4xl font-bold text-gray-800">Car Selection</h1>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Select Car
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white shadow-sm"
                value={selectedMake}
                onChange={(e) => setSelectedMake(e.target.value)}
              >
                <option value="">Choose a car make</option>
                {car.map((make) => (
                  <option key={make.MakeId} value={make.MakeId}>
                    {make.MakeName}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-blue-950">
                Select Year
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white shadow-sm"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option value="">Choose a year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <Link
              href={
                isNextEnabled ? `/result/${selectedMake}/${selectedYear}` : "#"
              }
              className={`block w-full py-3 px-4 text-center rounded-lg text-lg font-semibold transition-all duration-200 ${
                isNextEnabled
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
            Next
            </Link>
          </div>
          
        </div>
      </main>
    </div>
  );
}