import styled from 'styled-components';
import { breakpoint } from 'breakpoints';

const TwoColumns = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    @media screen and (min-width: ${breakpoint.S}) {
        flex-direction: row;
    }
`;

export default TwoColumns;
