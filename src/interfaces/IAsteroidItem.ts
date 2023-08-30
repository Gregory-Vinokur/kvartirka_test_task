export interface IAsteroidItem {
  key: string;
  name: string;
  approachDate: string;
  diameter: number;
  isHazard?: boolean;
  missDistance: string;
  velocity?: {
    sec: string;
    hour: string;
  };
  fullApproachDate?: string;
  orbitingBody?: string;
}