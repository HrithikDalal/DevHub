import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

const formatDate = date => dayjs.utc(date).format('YYYY/MM/DD');

export default formatDate;
