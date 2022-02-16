import styled from "styled-components";

export const GalleryStyle = styled.div`

display: grid;
grid-template: repeat(7, 5vw) / repeat(8, 1fr);
grid-gap: 1.5rem;
padding: 1.5rem;

.p-1 {
    grid-row: 1 / span 2;
    grid-column: 1 / span 2;
}

.p-2 {
    grid-row: 1 / span 3;
    grid-column: 3 / span 3;
}

.p-3 {
    grid-row: 1 / span 2;
    grid-column: 6 / 7;
}

.p-4 {
    grid-row: 1 / span 2;
    grid-column: 7 / -1;
}

.p-5 {
    grid-row: 3 / span 3;
    grid-column: 1 / span 2;
}

.p-6 {
    grid-row: 4 / span 2;
    grid-column: 3 / span 2;
}

.p-7 {
    grid-row: 4 / 5;
    grid-column: 5 / 6;
}

.p-8 {
    grid-row: 3 / span 2;
    grid-column: 6 / span 2;
}

.p-9 {
    grid-row: 3 / span 3;
    grid-column: 8 / -1;
}

.p-10 {
    grid-row: 6 / span 2;
    grid-column: 1 / 2;
}

.p-11 {
    grid-row: 6 / span 2;
    grid-column: 2 / span 2;
}

.p-12 {
    grid-row: 6 / span 2;
    grid-column: 4 / 5;
}

.p-13 {
    grid-row: 5 / span 3;
    grid-column: 5 / span 3;
}

.p-14 {
    grid-row: 6 / span 2;
    grid-column: 8 / -1;
}

.image{
    cursor: pointer;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;

        :hover{
            transform: scale(1.2);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
    }
}

@media only screen and (max-width: 1024px){
    grid-gap: 1rem;
}

`
