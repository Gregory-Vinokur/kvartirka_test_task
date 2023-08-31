export interface IApproachData {
  relative_velocity: {
    kilometers_per_second: number;
  };
  close_approach_date_full: string;
  miss_distance: {
    kilometers: number;
  };
  orbiting_body: string;
}