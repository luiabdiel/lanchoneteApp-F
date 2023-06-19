import { Card } from './components/card/Card';
import { SnackData } from './interface/SnackData';
import './App.scss';

export function App() {
  const data: SnackData[] = [];

  return (
    <div className='container'>
    <h1>Lanchonete</h1>
    <div className='card-grid'>
      {data.map(snackData =>
        <Card
          title={snackData.title}
          price={snackData.price}
          image={snackData.image}
        />
      )}
    </div>
    </div>
  );
}
