interface Idate {
  calendar: {
    identifier: string;
  };
  day: number;
  era: string;
  month: number;
  year: number;
}
const dateToISO = (date: Idate) => {
  if (!date) {
    return new Date().toISOString();
  }
  return new Date(`${date?.month}-${date?.day}-${date?.year}`).toISOString();
};

export default dateToISO;
