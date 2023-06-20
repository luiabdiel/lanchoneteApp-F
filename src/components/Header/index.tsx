import S from './header.module.scss';
import Snacks from '../../assets/logo.svg';

export function Header() {
  return(
    <header className={S['header']}>
      <div className={S['header-content']}>
        <div>
          <h1>Lanches</h1>
          <p>Acompanhe os preços dos lanches</p>
        </div>
        <div>
          <img src={Snacks} alt="" />
        </div>
      </div>
    </header>
  );
}
