export default class DateUtils {
    static getFormattedDate(date: Date) {
        /* 
        Date Format: Day Date Month 
        Example: Mon, 2 Oct 
        */
        return date.toLocaleDateString("en-US", {
            weekday: "short",
            day: "numeric",
            month: "short",
        });
    }
}
