export const formatDateTime = (date?: string) => {
    if (date) {
        const [d, t] = date.split(" ")

        const newDate = new Date(d).toLocaleDateString('en-US', {weekday: "long", day: "numeric", month: "long"})

        return [newDate, t]
    }
    return ["", ""]
}