import { Card } from './components/Card/Card';
import { useSnackData } from './hooks/useSnackData';
import './App.scss';

export function App() {
  const { data } = useSnackData();

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
    </div>
  );
}
