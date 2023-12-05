import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import des styles Bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { FaLocationDot } from "react-icons/fa6";
import {FaPhoneAlt} from 'react-icons/fa'; // Importer l'icône de téléphone depuis FontAwesome

function App() {
    return (
        //Contenu principale  de la page 
        <div>
            {/*Bar de navigation Logo, adresse et contact */}
            <Navbar bg="secondary" variant="light" expand="lg" className="text-white">
                <Container className='text-white'>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="logoGYM.svg"
                            width="80"
                            height="80"
                            className="d-inline-block align-middle	"/>{' '}
                        <h2 className="d-inline-block align-middle	">KaayTreun</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <FaPhoneAlt/> 221 33 000 00 00 | <FaLocationDot /> Dakar, Avenue RizOlait
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/*Contient l'ensemble des packs et titre*/}
            <Container className='mt-5'>
                {/*Titre*/}
                <h1 className="text-center mb-5">Nos Packs</h1>
                {/*Contient l'ensemble des packs*/}
                <div className="mt-5 d-flex justify-content-around">

                    {/*Car descriptif pour le pack Only Fitness*/}
                    <Card
                        style={{
                            width: '20rem'
                        }}>
                        <Card.Img
                            variant="top"
                            src="https://business.ladn.eu/wp-content/uploads/2021/11/gamification-fitness-park-concept-salle-sport-experience-digitale1.jpg"
                            style={{
                                height: '200px',
                                objectFit: 'cover'
                            }}/>
                        <Card.Body
                            style={{
                                position: 'relative'
                            }}>
                            <Card.Title>Pack "Only Fitness"</Card.Title>
                            <Card.Text>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Accès illimité à notre espace fitness ultramoderne.</li>
                                    <li class="list-group-item">Séances d'entraînement variées pour tous les niveaux.</li>
                                    <li class="list-group-item">Cours de groupe dynamiques pour des résultats optimaux.</li>
                                </ul>
                            </Card.Text>
                            <Button
                                variant="secondary"
                                style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    margin: '1rem'
                                }}>25000 XOF/mois</Button>
                        </Card.Body>
                    </Card>
                    
                    {/*Car descriptif pour le pack BodyBuilder*/}
                    <Card
                        style={{
                            width: '20rem'
                        }}>
                        <Card.Img
                            variant="top"
                            src="https://www.uniquefitness.fr/data/uploads/2022/05/crosstraining.jpg"
                            style={{
                                height: '200px',
                                objectFit: 'cover'
                            }}/>
                        <Card.Body
                            style={{
                                position: 'relative'
                            }}>
                            <Card.Title>Pack "Bodybuilder"</Card.Title>
                            <Card.Text>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Accès illimité à notre espace de musculation ultramoderne.</li>
                                    <li class="list-group-item">Équipement spécialisé pour la musculation et la croissance musculaire</li>
                                    <li class="list-group-item">Accès à des séances d'entraînement avancées et à des conseils personnalisés.</li>
                                </ul>
                            </Card.Text>
                            <Button
                                variant="secondary"
                                style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    margin: '1rem',
                                }}>35 000 XOF/mois</Button>
                        </Card.Body>
                    </Card>

                    {/*Car descriptif pour le pack All acces*/}
                    <Card
                        style={{
                            width: '20rem'
                        }}>
                        <Card.Img
                            variant="top"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4738m1JnPVxryPdbLBhuiBgPbnzJcvh6-vrYF0RDVyK0DY2S6d6Z9xTS1T4lbhY8ZudY&usqp=CAU"
                            style={{
                                height: '200px',
                                objectFit: 'cover'
                            }}/>
                        <Card.Body
                            style={{
                                position: 'relative',
                                height: '23rem'
                            }}>
                            <Card.Title>Pack "All Access Plus"</Card.Title>
                            <Card.Text>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Accès complet à toutes nos installations, y compris la piscine et le sauna.</li>
                                    <li class="list-group-item">Cours exclusifs de fitness aquatique et séances de relaxation.</li>
                                    <li class="list-group-item">Avantages VIP, y compris des réductions sur nos programmes spéciaux.</li>
                                </ul>
                            </Card.Text>
                            <Button
                                variant="secondary"
                                style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    margin: '1rem'
                                }}>50 000 XOF/mois</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
            
            {/*Formulaire d'abonnement*/}
            <Container fluid="fluid" className='p-5 mt-5 bg-secondary text-white '>
                <h1
                    className="text-right mb-5 mt-5"
                    style={{
                        maxWidth: '1020px',
                        margin: 'auto'
                    }}>Je m'abonne</h1>
                <Form
                    style={{
                        maxWidth: '1020px',
                        margin: 'auto'
                    }}>
                    <Form.Group className="mb-3">
                        <Form.Label>Prénom & Nom</Form.Label>
                        <Form.Control type="text" placeholder="Entrez votre Prénom et Nom"/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Entrez votre email"/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Choix de Pack</Form.Label>
                        <Form.Select>
                            <option>Choisissez un pack</option>
                            <option>Only Fitness</option>
                            <option>Bodybuilder</option>
                            <option>All Access Plus</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            label="J'ai lu et J'accepte les conditions et le réglement de la salle."/>
                    </Form.Group>

                    <Button variant="light" type="submit">
                        Soumettre
                    </Button>
                </Form>
            </Container>
            
        </div>
    );
}

export default App;
