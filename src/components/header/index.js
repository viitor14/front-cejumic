import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Head, Container } from './styled';
import menu from '../../assets/images/menu.png';
import search from '../../assets/images/search.png';
import notification from '../../assets/images/notification 1.png';

export default function Header() {
  const botaoClicado = useSelector((state) => state.auth.botaoClicado);
  return (
    <Head>
      <div>
        <img src={menu} alt="menu-icon" className="menuIcon" />
      </div>

      <Container>
        <div className="lupa">
          <img src={search} alt="lupa" className="searchIcon" />

          <input type="text" placeholder="Pesquisar..." className="barraPesquisa" />
        </div>
      </Container>

      <div>
        <img src={notification} alt="notification" className="notification" />
      </div>
    </Head>
  );
}
