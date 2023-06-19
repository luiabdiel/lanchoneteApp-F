import { Card } from './components/Card/Card';
import { useSnackData } from './hooks/useSnackData';
import { useState } from 'react';
import './App.scss';
import { CreateModal } from './components/CreateModal/createModal';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { data } = useSnackData();

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev)
  }

  return (
    <div className='container'>
    <h1>Lanchonete</h1>
    <div className='card-grid'>
      {data?.map(snackData =>
        <Card
          key={snackData.id}
          title={snackData.title}
          price={snackData.price}
          image={snackData.image}
        />
      )}
    </div>
      {isModalOpen &&
      <CreateModal closeModal={handleOpenModal} />}
      <button onClick={handleOpenModal}>Novo</button>
    </div>
  );
}
