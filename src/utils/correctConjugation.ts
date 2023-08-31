export const correctConjugation = (formattedDistance: number): string => {
  if (formattedDistance === 1) {
    return 'лунная орбита';
  } else if (formattedDistance >= 2 && formattedDistance <= 4) {
    return 'лунные орбиты';
  } else if (formattedDistance >= 5 && formattedDistance <= 20) {
    return 'лунных орбит';
  } else if (formattedDistance % 10 === 1) {
    return 'лунная орбита';
  } else if (formattedDistance % 10 >= 2 && formattedDistance % 10 <= 4) {
    return 'лунные орбиты';
  } else {
    return 'лунных орбит';
  }
}