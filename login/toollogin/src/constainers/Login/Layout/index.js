import React from 'react';
import styles from '.index.less';

export default class Login extends React.Component{

    render(){
        const{children}=this.props;
        return(

            <div className={styles.main}>
                <header>
                    <h1 className={styles.logo}>
                        HAND
                    </h1>
                    <h2 className={styles.slogan}>
                        HAND让IT变得更简单！
                    </h2>
                </header>
                <section>
                    {children}
                </section>
                <footer>
                    <button className={styles.downloadApp}>
                        下载APP
                    </button>
                </footer>
            </div>
        );
    }
}