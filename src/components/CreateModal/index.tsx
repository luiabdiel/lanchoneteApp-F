import {  useState } from 'react';
import { useSnackDataMutate } from '../../hooks/useSnackDataMutate';
import { SnackData } from '../../interface/SnackData';
import S from './createModal.module.scss';
import Close from '../../assets/close-icon.svg';

type InputProps = {
  label: string,
  value: string | number,
  updateValue(value: any): void,
  className: string
}

type ModalProps = {
  closeModal(): void
}

const Input = ({ label, value, updateValue, className }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        onChange={(e) => updateValue(e.target.value)}
        className={className}
      />
    </>
  );
}

export function CreateModal({ closeModal }: ModalProps) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');

  const { mutate, isLoading } = useSnackDataMutate();

  const submit = () => {
    const snackData: SnackData = {
      title,
      price,
      image
    }

    mutate(snackData)
  }

  return(
    <div className={S['modal-overlay']}>
      <div className={S['modal-content']}>
        <div className={S['modal-header']}>
          <h2>Novo lanche</h2>
          <button className={S['btn-close']} onClick={closeModal}>
            <img src={Close} alt='' />
          </button>
        </div>
        <form className={S['input-container']}>
          <Input className={S['input']} label='Título' value={title} updateValue={setTitle} />
          <Input className={S['input']} label='Preço' value={price} updateValue={setPrice} />
          <Input className={S['input']} label='Imagem' value={image} updateValue={setImage} />
          <button onClick={submit} className={S['btn-secondary']}>
            {isLoading ? 'Carregando...' : 'Postar'}
          </button>
        </form>
      </div>
    </div>
  );
}
