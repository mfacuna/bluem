import * as React from 'react';
import styles from './footerStyles'

interface IProps { }

export default (props: IProps) => {
    return (
        <div className="container-fluid" style={styles.container}>
            <div className="container">
                <div className="row">
                    <div className="col-sm" style={styles.tittlebody}>
                        <h1 style={styles.h1}>Footer</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum modi laudantium 
                            laborum repellat, excepturi voluptatem sunt odit libero eveniet culpa numquam
                            nam assumenda repudiandae quasi, animi nemo iusto eligendi sint.</p>
                    </div>
                    <div className="col-sm">
                    </div>
                </div>
            </div>
        </div >
    );
}
