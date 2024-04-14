export function AddMinutesToDate(date: any, minutes: any) {
    date = new Date(date);
    return new Date(date.getTime() + minutes * 60000);
}
