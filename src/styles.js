// src/styles.js
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #121212;
  color: #ffffff;
  min-height: 100vh;
  padding: 2rem;
  font-family: 'Roboto', sans-serif;

  /* Center content vertically and horizontally */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* Hide scrollbar */
  overflow: hidden;
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  text-align: center;
`;

export const Description = styled.p`
  margin-bottom: 2rem;
  font-size: 1.2rem;
  color: #b0b0b0;
  text-align: center;
  max-width: 600px;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextArea = styled.textarea`
  width: 100%;
  max-width: 5000px;
  height: 100px;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #1e1e1e;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  resize: none;

  &:focus {
    outline: 2px solid #bb86fc;
  }

  /* Hide scrollbar in textarea */
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* For Firefox */
`;

export const Button = styled.button`
  background-color: #bb86fc;
  color: #000000;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3700b3;
    color: #ffffff;
  }
`;

export const Message = styled.p`
  margin-top: 1.5rem;
  font-size: 1rem;
  color: #03dac6;
  text-align: center;
  max-width: 600px;
`;
