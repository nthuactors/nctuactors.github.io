export default {
    get: () => {
        return new Promise(
            (resolve, reject) => {
                const url = 'https://docs.nctu.me/spreadsheets/d/1DKPZZLbZfOMt3RjzrvvIBT350CblIYPk1RItKThZXq4/pub?gid=0&single=true&output=csv'
                var xhr = new XMLHttpRequest()
                xhr.open('GET', url)
                xhr.send()
                xhr.onload = (msg) => {
                    resolve(xhr.responseText)
                    console.log(xhr.responseText)
                }
            }
        )
    }
}
