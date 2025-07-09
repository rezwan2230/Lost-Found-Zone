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
    return new Date(`${date.month}-${date.day}-${date.year}`).toISOString();
};

export default dateToISO;
