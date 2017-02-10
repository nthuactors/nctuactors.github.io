export default {
    get: () => {
        return new Promise(
            (resolve, reject) => {
                const key = '1DKPZZLbZfOMt3RjzrvvIBT350CblIYPk1RItKThZXq4'
                const url = 'https://spreadsheets.google.com/tq?key=' + key + '&tqx=out:csv'
                var xhr = new XMLHttpRequest()
                xhr.open('GET', url)
                xhr.send()
                xhr.onload = (msg) => {
                    resolve(xhr.responseText)
                    // console.log(xhr.responseText)
                }
            }
        )
    }
}
