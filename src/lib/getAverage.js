function getAverage(numbers = []) {

    numbers = numbers.filter(x => x)

    const sum = numbers.reduce((a, b) => a + b, 0)
    const avg = (sum / numbers.length) || 0

    return avg
}

export default getAverage