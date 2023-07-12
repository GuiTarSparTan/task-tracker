import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ tittle, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>{tittle}</h1>
      <Button
        color={showAdd ? 'red' : 'steelblue'}
        text={showAdd ? 'Close' : 'Add'} 
        onClick={onAdd}
      />
    </header>
  )
}

Header.defaultProps = {
  tittle: 'Task Tracker',
}

Header.propTypes = {
  tittle: PropTypes.string.isRequired,
}

// CSS styling in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header