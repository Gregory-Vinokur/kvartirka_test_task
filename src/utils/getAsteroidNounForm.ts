export function getAsteroidNounForm(count: number) {
  if (count === 1) {
    return 'астероид';
  } else if (count >= 2 && count <= 4) {
    return 'астероида';
  } else {
    return 'астероидов';
  }
}
