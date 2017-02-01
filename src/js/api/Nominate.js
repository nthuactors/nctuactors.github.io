export default {
    get: () => {
        return new Promise(
            (resolve, reject) => {
                const key = '150LgUPHFsZQwB--gIJ4jw509_lCHbYsrDjvve6GEIzU'
                const url = 'https://spreadsheets.google.com/tq?key=' + key + '&tqx=out:csv'
                var xhr = new XMLHttpRequest()
                xhr.open('GET', url)
                xhr.send()
                xhr.onload = (msg) => {
                    resolve(xhr.responseText)
                }
            }
        )
    }
}
