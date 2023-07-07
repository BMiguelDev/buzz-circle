import { formatDistanceToNowStrict, parseISO } from "date-fns";

interface PropTypes {
    dateString?: string;
    className?: string;
}

const TimePeriod = ({ dateString, className }: PropTypes) => {
    let timePeriod = "Unknown time";
    if (dateString) {
        const parsedDate = parseISO(dateString);
        timePeriod = formatDistanceToNowStrict(parsedDate, { addSuffix: true });
    }
    return <p className={className}>{timePeriod}</p>;
};

export default TimePeriod;
