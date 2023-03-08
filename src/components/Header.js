import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ tittle }) => {
  const onClick = () => {
    console.log('Click')
  }

  return (
    <header className='header'>
      <h1>{tittle}</h1>
      <Button color='steelblue' text='Add' onClick={onClick} />
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