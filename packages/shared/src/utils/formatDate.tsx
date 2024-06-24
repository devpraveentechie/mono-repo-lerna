import moment from 'moment';
const formatDate = (
  date?: Date,
format?: string,
forApi?: boolean,
forDatePicker?: boolean,
needBlankDate = true
) => {
  if (!date) return moment().toDate();
  if (!date && needBlankDate) return 0;
  if (forDatePicker) return moment(date, format).toDate();
  if (forApi) moment(date).format(format);
};
export default formatDate