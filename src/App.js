import { useState } from 'react';
import './App.css';
import Form from './Form';
import dataContext from './context';

const { Provider } = dataContext;

// class InputComponent extends Component {
//   render() {
//     return (
//       <Consumer>
//         {(value) => {
//           return <input value={value.mail} type='email' className='form-control' id='exampleFormControlInput1' placeholder='name@example.com' />;
//         }}
//       </Consumer>
//     );
//   }
// }

function App() {
  const [data, setData] = useState({
    mail: 'name@example.com',
    text: 'some text',
  });

  return (
    <Provider value={data}>
      <Form text={data.text} />
      <button
        onClick={() =>
          setData({
            mail: 'second@example.com',
            text: 'another text',
          })
        }
      >
        Click me
      </button>
    </Provider>
  );
}

export default App;
