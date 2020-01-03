import * as React from 'react';
import styles from './linkStyles'

interface IProps {}

export default (props: IProps) => {
    return (
        <div className="container border-light rounded" style={styles.container}>
            Link
        </div>
    );
}
