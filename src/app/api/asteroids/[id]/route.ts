import { IApproachData } from "@/interfaces/IApproachData";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest, context: { params: { id: string } }) {
  try {

    // Получение данных астероида по его ID
    const asteroidResponse = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${context.params.id}?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`);
    const asteroidData = await asteroidResponse.json();

    // Обработка данных о сближениях
    const approaches = asteroidData.close_approach_data?.map((approach: IApproachData) => ({
      velocity: approach.relative_velocity.kilometers_per_second,
      approachTime: approach.close_approach_date_full,
      distance: approach.miss_distance.kilometers,
      orbitingBody: approach.orbiting_body,
    }));


    // Обработка данных астероида
    const asteroid = {
      id: asteroidData.id,
      name: asteroidData.name,
      diameter: (asteroidData.estimated_diameter.meters.estimated_diameter_min + asteroidData.estimated_diameter.meters.estimated_diameter_max) / 2,
      isHazard: asteroidData.is_potentially_hazardous_asteroid,
    };

    return NextResponse.json({ asteroid, approaches }, { status: 200 });
  } catch (error) {
    console.error('Error fetching data from NASA API', error);
    return NextResponse.json({ error: 'Error fetching data from NASA API' }, { status: 500 });
  }
}