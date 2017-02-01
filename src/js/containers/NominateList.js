import { connect } from 'react-redux'
import Components from 'components'
import Actions from 'js/actions'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    getNominate: () => dispatch(Actions.Nominate.get())
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.NominateList)
