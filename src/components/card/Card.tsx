import { SnackData } from '../../interface/SnackData';
import { priceFormatter } from '../../utils/formatter';
import Styles from './Card.module.scss'

export function Card({ title, price, image} : SnackData){
    return(
        <div className={Styles.card}>
          <img src={image} alt={title} />
          <h2>{title}</h2>
          <p><b>{priceFormatter.format(price)}</b></p>
        </div>
    );
}
