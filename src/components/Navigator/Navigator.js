import { NavLink } from 'react-router-dom';
import s from './Navigator.module.css';
const toogleActive = active => {
  const { isActive } = active;
  return isActive ? s.active : s.unActive;
};

const Navigator = () => {
  return (
    <>
      <header>
        <nav>
          <ul className={s.list}>
            <li className={s.link}>
              <NavLink to="/" className={toogleActive}>
                Home
              </NavLink>
            </li>
            <li className={s.link}>
              <NavLink to="/movies" className={toogleActive}>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Navigator;
