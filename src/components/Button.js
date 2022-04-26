// import protoTypes from 'proto-types'

const Button = ({color, text, onClick}) => {
  

  return <button onClick={onClick} 
   style={{ backgroundColor: color}} 
  className='btn'>
      {text}
    </button>
}

// Button.defaultProps = {
//     color: 'steelblue',
// }

// Button.protoTypes = {
//     text: protoTypes.string,
//     color: protoTypes.string,
// }
export default Button