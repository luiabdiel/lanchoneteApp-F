import { useState } from 'react';
import { Cards, CreateModal } from '..';
import { useSnackData } from '../../hooks/useSnackData';
import S from './card.module.scss';

export function Card() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev)
  }
  const { data } = useSnackData();

  return(
    <div className={S['card-container']}>
      <button className={S['btn']} onClick={handleOpenModal}>
        Adicionar
      </button>
      <div className={S['card-grid']}>
        {data?.map(snackData =>
          <Cards
          key={snackData.id}
          title={snackData.title}
            price={snackData.price}
            image={snackData.image}
            />
            )}
        {isModalOpen &&
        <CreateModal closeModal={handleOpenModal} />}
      </div>
  </div>
  );
}
