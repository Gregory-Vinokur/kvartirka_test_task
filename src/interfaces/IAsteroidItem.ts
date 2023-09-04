export interface IAsteroidItem {
  key: string;
  id: string;
  name: string;
  approachDate: string;
  diameter: number;
  isHazard?: boolean;
  missDistance: string;
  distanceUnit?: string | null;
  velocity?: {
    sec: string;
    hour: string;
  };
  fullApproachDate?: string;
  orbitingBody?: string;
  showButton?: boolean;
}