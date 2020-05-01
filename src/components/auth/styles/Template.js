import styled from 'styled-components';

const Template = styled.header`

    a {
        color: #ffffff;
        text-decoration: none;
    }

    .showcase {
        width: 100%;
        height: 550px;
        background: url('https://images.pexels.com/photos/1046896/pexels-photo-1046896.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') no-repeat center center/cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: flex-end;
        padding-bottom: 50px;
        margin-bottom: 20px;
        color: #fff;    
        margin: 4px 0;
    }

    .btn {
        cursor: pointer;
        display: inline-block;
        border:0;
        font-weight: bold;
        padding: 10px 20px;
        background: #314FE5;
        color:#ffffff;
        font-size: 15px;
        border: 1px solid #ffffff;
        margin: 10px 0;
    }

    .btn:hover {
        opacity: .7
    }

    .showcase h2,
    .showcase p {
        margin-bottom: 10px;
    }

    .container {
        width: 100%;
        margin: auto;
    }

    /* News Cards */
    .news-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    margin: 40px 0;
    
    }

    .news-cards img {
    width: 100%;
    height: 180px;
    }

    .news-cards h3 {
    font-size: 20px;
    margin: 10px 0;
    
    }

    .news-cards a {
    padding: 10px 0;
    color: #f2f2f2;
    text-transform: uppercase;
    display: inline-block;
    font-weight: bold;
    }

    /* CARDS BANNER ONE */
.cards-banner-one {
  width: 100%;
  height: 350px;
  background: url("https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  margin-bottom: 40px;
}

.cards-banner-one .content {
  width: 40%;
  padding: 90px 0 0 30px;
  color: #fff;
}

.cards-banner-one p,
.cards-banner-two p {
  margin: 10px 0 20px 0;
}

/* CARDS BANNER TWO*/
.cards-banner-two {
    width: 100%;
  height: 350px;
  background: url("https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  margin-bottom: 40px; 
  }

.cards-banner-two .content {
    width: 40%;
    padding: 90px 0 0 30px;
    color: #fff;
}



/* Follow */
.social {
  margin: 50px;
}
.social p {
  text-align: center;
  font-size: 30px;
  margin-bottom: 20px;
}
.links {
  display: flex;
  align-items: center;
  justify-content: center;
}

.links a {
  margin: 0 30px;
}

.links a i {
  font-size: 3rem;
}

/* Links */
.footer-links {
  background: #2f3640;
  color: #616161;
  font-size: 12px;
  padding: 35px 0;
}

.footer-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  align-items: flex-start;
  justify-content: center;
}

.footer-container ul {
  margin: 0 auto;
}

.footer-links li {
  line-height: 2.8;
}

.footer {
  background: #2f3640;
  color: #616161;
  font-size: 12px;
  padding: 20px 0;
  text-align: center;
  font-size: 1rem;
  padding-bottom: 20px;
}

/* Mobil */
@media (max-width: 800px) {
  .menu-btn {
    display: block;
  }

  .menu-btn:hover {
    opacity: 0.5;
  }

  .nav-main ul.nav-menu {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: #2f3640;
    width: 50%;
    height: 100%;
    border-right: #ccc 1px solid;
    opacity: 0.9;
    padding: 30px;
    transform: translateX(-500px);
    transition: transform 0.5s ease-in-out;
  }

  .nav-main ul.nav-menu li {
    padding: 20px;
    border-bottom: #ccc solid 1px;
    font-size: 14px;
  }
  .nav-main ul.nav-menu li:last-child {
    border-bottom: 0;
  }

  .nav-main ul.nav-menu.show {
    transform: translateX(-20px);
  }

  .nav-main ul.nav-menu-right {
    margin-right: 50px;
  }

  .news-cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .cards-banner-one .content,
  .cards-banner-two .content {
    width: 80%;
  }

  .footer-links .footer-container p{
    grid-template-columns: repeat(2, 1fr);
    
  }
}

@media (max-width: 500px) {

  .news-cards {
    grid-template-columns: 1fr;
  }

  .cards-banner-one .content,
  .cards-banner-two .content {
    width: 100%;
    padding: 60px 20px;
  }
  .footer-links .footer-container {
    grid-template-columns: 1fr;
  }

  .footer-links .footer-container p {
    text-align: center;
  }
}


`;

export default Template;