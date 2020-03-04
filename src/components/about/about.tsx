import * as React from 'react';
import styles from './aboutStyles'

interface IProps {}

export default (props: IProps) => {
    return (
        <div className="container-fluid border-light" style={styles.container}>
            <div className="container">
                <div className="row">

                    <div className="col-sm" style={styles.tittlebody}>

                        <h1 style={styles.h1}>About</h1>
                        <p style={styles.p}>Harum tenetur facere iste quidem excepturi inventore! Commodi similique inventore ad, veritatis molestiae magni vero.</p>

                    </div>
                    <div className="col-sm">

                    </div>
                </div>
            </div>
        </div >
    );
}
