import { useEffect, useState } from "react"
import { useSnackDataMutate } from "../../hooks/useSnackDataMutate";
import { SnackData } from "../../interface/SnackData";
import Styles from './createModal.module.scss'

type InputProps = {
  label: string,
  value: string | number,
  updateValue(value: any): void
}

type ModalProps = {
  closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      />
    </>
  );
}

export function CreateModal({ closeModal }: ModalProps) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');

  const { mutate, isSuccess, isLoading } = useSnackDataMutate();

  const submit = () => {
    const snackData: SnackData = {
      title,
      price,
      image
    }

    mutate(snackData)
  }

  useEffect(() => {
    if(!isSuccess) return;
    closeModal();
  }, [isSuccess]);

  return(
    <div className={Styles.modalOverlay}>
      <div className={Styles.modalBoy}>
        <h2>Cadastre um novo item</h2>
        <form className={Styles.inputContainer}>
          <Input label='Title' value={title} updateValue={setTitle} />
          <Input label='price' value={price} updateValue={setPrice} />
          <Input label='image' value={image} updateValue={setImage} />
          <button onClick={submit} className={Styles.btnSecondary}>
            {isLoading ? 'Carregando...' : 'Postar'}
          </button>
        </form>
      </div>
    </div>
  );
}
