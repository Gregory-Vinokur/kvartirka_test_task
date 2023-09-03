import { IAsteroidResponseData } from "@/interfaces/IAsteroidResponseData";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date') ?? '';

    const response = await fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`
    );

    const data = await response.json();

    const asteroidsFromResponse = data.near_earth_objects[date];

    const asteroids = asteroidsFromResponse.map((item: IAsteroidResponseData) => ({
      id: item.id,
      name: item.name,
      approachDate: date,
      diameter:
        (item.estimated_diameter.meters.estimated_diameter_min +
          item.estimated_diameter.meters.estimated_diameter_max) /
        2,
      missDistance: {
        km: item.close_approach_data[0].miss_distance.kilometers,
        lunar: item.close_approach_data[0].miss_distance.lunar,
      },
      isHazard: item.is_potentially_hazardous_asteroid,
      velocity: {
        sec: item.close_approach_data[0].relative_velocity.kilometers_per_second,
        hour: item.close_approach_data[0].relative_velocity.kilometers_per_hour,
      },
      fullApproachDate: item.close_approach_data[0].close_approach_date_full,
      orbitingBody: item.close_approach_data[0].orbiting_body,
    }));

    return NextResponse.json(asteroids, { status: 200 });
  } catch (error) {
    console.error('Error fetching data from NASA API', error);
    return NextResponse.json({ error: 'Error fetching data from NASA API' }, { status: 500 });
  }
}