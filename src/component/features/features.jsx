import React from 'react'
import DATA from '../../data/features.data';
import { FeaturesContainer, FeaturesWrapper } from './styles/features.style';

class Features extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: DATA
        }
    }

    render() {

        
        const { info } = this.state;

        return (
            <FeaturesWrapper>
                {
                    info.map(({ id, title, text, icon }) => (
                        <FeaturesContainer key={id}>
                            <div className='features-icon'>{icon}</div>
                            <div className='features-text'>
                                <h1>{title}</h1>
                                <p>{text}</p>
                            </div>
                            
                            
                        </FeaturesContainer>
                    ))

                }
            </FeaturesWrapper>
        );

    }


}

export default Features