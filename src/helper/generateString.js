export function generateString(length) {
    const result = Math.random().toString(36).substring(2, length + 2)
    return result;
}
