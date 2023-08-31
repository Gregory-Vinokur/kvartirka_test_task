export const formatDate = (inputDate: string) => {
  const monthsCodes = [
    'янв',
    'фев',
    'мар',
    'апр',
    'май',
    'июн',
    'июл',
    'авг',
    'сен',
    'окт',
    'ноя',
    'дек',
  ];

  const dateParts = inputDate.split('-');
  const day = dateParts[2];
  const monthIndex = parseInt(dateParts[1], 10) - 1;
  const month = monthsCodes[monthIndex];
  const year = dateParts[0];

  return `${day} ${month} ${year}`;
}