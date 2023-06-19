import { SnackData } from '../../interface/SnackData';
import './Card.module.scss'

export function Card({ title, price, image} : SnackData){
    return(
        <div className='card'>
          <img src={image} alt={title} />
          <h2>{title}</h2>
          <p><b>Valor: {price}</b></p>
        </div>
    );
}
