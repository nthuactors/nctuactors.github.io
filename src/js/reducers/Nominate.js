import { handleActions } from 'redux-actions'
import csvjson from 'csvjson'

const initialState = {
    list: []
}

export default handleActions({
    GET_NOMINATE: {
        next (state, {payload}) {
            let csv = csvjson.toArray(payload, {
                delimiter: ',',
                quote: '"'
            })
            csv.shift()
            let list = csv.map((ele) => ({
                'name': ele[0],
                'introduction': ele[1],
                'photo': ele[2],
                'first': !!ele[3],
                'last': !!ele[4]
            }))
            return {
                list
            }
        },
        throw (state, {payload}) {
            console.log('error here')
            return state
        }
    }
}, initialState)
