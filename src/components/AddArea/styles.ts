import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0px;
    display: flex;
    text-align: center;

    .image {
        margin-right: 8px;
        cursor: pointer;
    }

    input {
        border: 0px;
        background-color: transparent;
        outline: 0;
        font-size: 18px;
        flex: 1;
        color: #FFF;
    }
`;