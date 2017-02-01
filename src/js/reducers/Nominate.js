import { handleActions } from 'redux-actions'
import csvjson from 'csvjson'

const initialState = {
    list: {}
}

export default handleActions({
    GET_NOMINATE: {
        next (state, {payload}) {
            let csv = csvjson.toArray(payload, {
                delimiter: ',',
                quote: '"'
            })
            return {
                csv
            }
        },
        throw (state, {payload}) {
            console.log('error here')
            return state
        }
    }
}, initialState)
