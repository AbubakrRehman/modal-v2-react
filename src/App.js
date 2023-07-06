import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <button onClick={()=>setShow(true)}>Show Modal</button>
      <Modal
        show={show}
        title="Modal title"
        closeButtonText="Close"
        onClose={() => setShow(false)}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, non possimus doloribus aut nisi, amet deserunt dignissimos, perferendis aspernatur at nam fuga hic sint magni atque error quos soluta laudantium?
          Hic, iusto ex. Soluta ipsam corrupti quasi consequuntur expedita assumenda unde autem, nostrum omnis error laudantium id culpa officia quo asperiores similique eaque numquam eum tempore fugiat veniam sit totam?
          Eaque nisi voluptatibus nobis eligendi nostrum blanditiis pariatur vero dignissimos fuga? Aperiam labore quisquam recusandae a optio vitae qui corrupti natus minus quibusdam rerum dolore sapiente cumque voluptatibus, blanditiis maiores!
       </p>
      </Modal>

    </div >
  );
}

export default App;
