import React from 'react';
import styles from '.index.less';
import Particle from 'zhihu-particle';


export default class Background extends React.Component{
    componentDidMount(){
        new Particle(this.Background,{interactive:true,density:'low'});
    }

    render(){
        return(
            <div ref={(Background)=>{
                this.Background=Background;
            }
            }
            className={styles.Background}></div>
        )
    }
}