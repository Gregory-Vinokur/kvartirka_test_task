export interface IAsteroidData {
  id: string;
  name: string;
  approachDate: string;
  diameter: number;
  isHazard?: boolean;
  missDistance: {
    lunar: string;
    km: string;
  };
  velocity?: {
    sec: string;
    hour: string;
  };
  distanceUnit?: string | null;
  fullApproachDate?: string;
  orbitingBody?: string;
}

export interface AsteroidsListDataType {
  asteroids: Array<IAsteroidData>;
}