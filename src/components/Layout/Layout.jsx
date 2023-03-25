import { NavLink, Outlet } from 'react-router-dom';
import { Container } from 'components/App.styled';

export const Layout = () => {
  return (
    <Container>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
