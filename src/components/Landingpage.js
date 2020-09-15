import React, { useState } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import logo from '../img/logo_tiggidoo.svg';
import cleaning from '../img/menage-domicile-montreal.svg';
import arrow from '../img/Icon awesome-arrow-right.svg';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import singlecleaning from '../img/emploi-entretien-menager-montreal.svg';
import check from '../img/check.svg';
import plant1 from '../img/plante.svg';
import plant2 from '../img/Plante2.svg';
import logoblanc from '../img/logo-tiggidoo-blanc.svg';
import facebook from '../img/Facebook-tiggidoo.png';
import insta from '../img/instagram-tiggidoo.png';
import linkedin from '../img/linkedin-tiggidoo.png';
import { useHistory } from 'react-router-dom';

export default function Landingpage() {
  const history = useHistory();

  const [initialform, setForm] = useState({
    name: '',
    email: '',
  });
  function handlesubmit() {
    history.push("/thankyou");
  }
  function handlechange(e) {
    setForm({
      ...initialform,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <Navbar bg='dark'>
        <Navbar.Brand>
          <img src={logo} className='imglogo' alt='React Bootstrap logo' />
        </Navbar.Brand>
        <Button className='btn ' type='submit'>
          <span className='submit'>DEVENIR PRO</span>
        </Button>
      </Navbar>
      <p className='header'>
        Pas le temps, ni le goût <span className='lg-txt'>C’est Tiggid</span>{' '}
        <span className='lg-green'>oo</span>
      </p>
      <Container>
        <Row>
          <Col>
            <p className='sm-header'>
              Trouvez votre expert en entretien ménager, c’est simple!
            </p>

            <p className='p-blue'>
              VALIDER VOTRE TARIF &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={arrow} className='imgarrow' alt='' />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CHOISISSEZ VOTRE TODOO
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={arrow} className='imgarrow' alt='' />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RÉSERVEZ EN LIGNE
            </p>
          </Col>
          <Col>
            <img
              src={cleaning}
              className='imgcleaning'
              alt=''
              align='right'
            ></img>
          </Col>
          <p className='p-reg'>
            Découvrez les Todoo, nos spécialistes du ménage prêts à faire
            briller votre logis, quand vous le voulez, comme vous le voulez.
            Chaque expert en entretien ménager est trié sur le volet par notre
            équipe et noté après chaque prestation par des utilisateurs comme
            vous. Choisissez un ou plusieurs profils préférés et dites adieu aux
            corvées.
          </p>
          <p className='sm-header'>
            Devenez client VIP : C’est gratuit et sans engagement!
          </p>
          <p className='p-blue'>PRÉ-INSCRIPTION : - 20%</p>
          <p className='p-reg'>
            Tiggidoo prendra bientôt d’assaut le marché de l’entretien ménager
            résidentiel dans la grande région de Montréal. Laissez nous votre
            courriel, nous vous préviendrons dès que nos services seront
            disponibles, en plus vous bénéficiez de -20% sur votre premier
            ménage.
          </p>
          <br />
          <Row>
            <Col>
              <label className='labelname'>Prénom</label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label className='labelname'>Courriel</label>
            </Col>
            <Col>
              <div class='input-group'>
                <input
                  name='name'
                  type='text'
                  class='nameinput1'
                  value={initialform.name}
                  placeholder='   Votre prénom'
                  onChange={handlechange}
                />

                <input
                  name='email'
                  type='text'
                  class='nameinput2'
                  value={initialform.email}
                  placeholder='   Votre courriel'
                  onChange={handlechange}
                />
              </div>
            </Col>
          </Row>
        </Row>
        <br />
        <Row>
          <Col>
            <Button className='btnsubmit' onClick={handlesubmit}>
              {' '}
              <span className='btn-text'>PRE-INSCRIPTION</span>
            </Button>
          </Col>
        </Row>
      </Container>
      <br /> <br /> <br /> <br /> <br /> <br />
      <Container className='container2'>
        <Row>
          <Col>
            <img
              src={singlecleaning}
              className='imgcleaningsingle'
              alt=''
            ></img>
          </Col>
          <Col>
            <p className='question'>
              Vous êtes un professionnel préposé au ménage ?
            </p>
            <p className='question'>
              Devenez un ToDoo !
              <span className='p-question'>
                Devenez un Todoo, gratuit, sans engagement et flexible :
                Tiggidoo est la solution pour tous les travailleurs autonomes en
                entretien ménager résidentiel.
              </span>
              <span className='question'></span>
            </p>
            <p className='question'>
              C’est vous le patron
              <span className='p-question'>
                En tant que Todoo, vous gardez le plein contrôle de votre
                horaire. Vous recevrez des offres automatiquement selon vos
                critères, votre secteur et vos disponibilités.
              </span>
            </p>

            <p className='question'>
              <br />
              Travaillez mieux, pour gagnez plus
              <span className='p-question'>
                Moins de gestion signifie plus de revenus et de liberté. Vous
                aurez accès gratuitement à des outils de gestion efficaces pour
                optimiser votre temps et augmenter vos gains.
              </span>
            </p>

            <p className='bulletin'>
              <br />
              <br />
              <br />
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={check} className='check' alt='1' />
                &nbsp;&nbsp; Inscription gratuite sans engagement
              </span>
              <span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={check} className='check' alt='1' />
                &nbsp;&nbsp; Rémunération minimum réglementée{' '}
              </span>{' '}
              <span>
                <br />
                <img src={check} className='check' alt='1' />
                &nbsp;&nbsp; Paiement sécurisé et garanti
              </span>
              <span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={check} className='check' alt='1' />
                &nbsp;&nbsp; Grande visibilité de vos services
              </span>
              <Button className='btnpro'>
                <span className='btn-text'>JE DEVIENS PRO</span>
              </Button>
            </p>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='container3'>
        <div className='row'>
          <div className='column'>
            <img src={plant1} className='plants' alt=''></img>
          </div>
          <div className='column'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={logoblanc} className='logoblanc' alt=''></img>
            <p className='imagetext'>Copiright 2020 Tout droit réservé</p>
          </div>
          <div className='column'>
            <p className='imagetext'>SUIVEZ-NOUS</p>
            <img src={facebook} alt=''></img>
            &nbsp;&nbsp;&nbsp;
            <img src={insta} alt=''></img>
            &nbsp;&nbsp;&nbsp;
            <img src={linkedin} alt=''></img>
          </div>
          <div className='column'>
            <img src={plant2} className='plants' alt='' align='right'></img>
          </div>
        </div>
      </div>
    </>
  );
}
