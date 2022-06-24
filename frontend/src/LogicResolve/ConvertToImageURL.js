export default function (url) {
    if (url) return `https://simple-tourism-2022-heroku-22.herokuapp.com/${url.slice(6)}`
    else return "";
}