import { SnackData } from '../../interface/SnackData';
import { priceFormatter } from '../../utils/formatter';
import S from './cards.module.scss';

export function Cards({ title, price, image} : SnackData){
  return (
    <div className={S['card']}>
      <img src={image} alt={title} />
      <div className={S['description']}>
        <h2>{title}</h2>
        <span>{priceFormatter.format(price)}</span>
      </div>
    </div>
  );
}
