export default function (url) {
    if (url) return `${process.env.SERVER_API}${url.slice(6)}`
    else return "";
}