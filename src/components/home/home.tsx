import * as React from 'react';
import styles from './homeStyles'
import { Card } from 'react-bootstrap';

interface IProps { }

export default (props: IProps) => {
    return (
        <div className="container-fluid border-light" style={styles.container}>
            <div className="container">
                <div className="row">

                    <div className="col-sm" style={styles.tittlebody}>

                        <h1 style={styles.h1}>Lorem ipsum, dolor sit amet consectetur add.</h1>
                        <p style={styles.p}>Harum tenetur facere iste quidem excepturi inventore! Commodi similique inventore ad, veritatis molestiae magni vero.</p>

                    </div>
                    <div className="col-sm">
                        <Card>
                            <Card.Img variant="top" src="../../assets/1.png" />
                            <Card.Body>
                                <Card.Title>
                                    Card Title
                            </Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo magni reprehenderit ipsa vel, ducimus eveniet sunt, dolorum iusto illo voluptatibus laudantium totam quaerat doloremque molestiae? Non nam doloremque maxime saepe.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div >
    );
}
