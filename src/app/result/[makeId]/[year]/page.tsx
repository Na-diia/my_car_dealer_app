import {CarList} from "../../../../../components/carList/carList";
import { VehicleMake } from "../../../../../lib/types";

interface ResultPageProps {
  params: {
    makeId: string;
    year: string;
  };
};

export async function generateStaticParams() {
  const makes = await fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
  ).then((res) => res.json());

  const years = Array.from(
    { length: new Date().getFullYear() - 2014 },
    (_, i) => 2015 + i
  );

  const paths: { makeId: string; year: string }[] = [];
  makes.Results.forEach((make: VehicleMake) => {
    years.forEach((year: number) => {
      paths.push({
        makeId: make.MakeId.toString(),
        year: year.toString(),
      });
    });
  });

  return paths;
}

export default function ResultPage({ params }: ResultPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
          <CarList makeId={params.makeId} year={params.year} />
      </div>
    </div>
  );
}