import PropTypes from 'prop-types';


const App = ({ tittle }) => {
  return (
    <>
      <h1>{ tittle }</h1>
    </>
  )
}

App.propTypes = {
  tittle: PropTypes.string.isRequired,
}

export default App;