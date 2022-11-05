import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () =>{
        console.log('click');
    }

  return (
    <header className='header'>
       <h1>{title}</h1> 
       <Button color='green' text='add' onClick={onClick}/>
    </header>
  )
}

//Default Props
Header.defaultProps = {
    title: 'Task Tracker',

}

//PropTypes
Header.propTypes = {
    title: PropTypes.string.isRequired,

}

//inline Styling
// const headingStyling ={
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header