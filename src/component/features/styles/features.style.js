import styled from 'styled-components';

export const FeaturesWrapper = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5rem;

    margin: 12.5rem 0;
    
    @media only screen and (max-width: 480px){
        margin: 7.5rem 0;
    }
`

export const FeaturesContainer = styled.div`
        
    display: grid;
    grid-template-columns:  min-content 1fr;
    grid-column-gap: 2rem;
    
    width: 35rem;
    height: 15rem;

    .features-text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
    }

    .features-icon{
        font-size: 5rem;
        grid-row: 1 / span 2;
        
    }

    h1{
        font-size: 2rem;
    }

    p{
        font-size: 1.75rem;
    }

`