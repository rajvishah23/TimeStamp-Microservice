

exports.timeStamp = (request, response, next) => {
    const { date_str } = request.params;
    const is_date = (date_str) => {
        return date_str instanceof Date && !isNaN(date_str);
    } 
    let date = new Date(date_str)
    if (!is_date) {
        return response.status(403).json({ msg: 'invalid date' })
    }
    return response.json({
        unix: date.getTime(),
        utc: date.toUTCString()
    })
}
