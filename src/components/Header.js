import propTypes from 'prop-types'

const Header = ({ tittle }) => {
  return (
    <header>
        <h1>{tittle}</h1>
    </header>
  )
}

Header.defaultProps = {
    tittle: 'Task Tracker',
}

Header.propTypes = {
    tittle: propTypes.string.isRequired,
}

// CSS styling in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header