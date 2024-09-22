// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Title,
  Description,
  InputArea,
  TextArea,
  Button,
  Message,
} from './styles';

function App() {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  const baseURL = 'https://cake-backend-100913224573.asia-east2.run.app/'; // Replace with your API URL

  const handleSubmit = async () => {
    setMessage('');
    if (key && !value) {
      // Only key is provided
      try {
        const response = await axios.get(`${baseURL}items/${key}`);
        setValue(response.data.value);
        setMessage('Value retrieved successfully!');
      } catch (error) {
        setMessage(
          error.response?.data?.detail || 'An error occurred while retrieving the value.'
        );
      }
    } else if (key && value) {
      // Both key and value are provided
      try {
        // Try to update the item
        await axios.put(`${baseURL}items/${key}`, { key, value });
        setMessage('Value updated successfully!');
      } catch (error) {
        if (error.response?.status === 404) {
          // If key doesn't exist, create a new item
          try {
            await axios.post(`${baseURL}items`, { key, value });
            setMessage('New key-value pair created successfully!');
          } catch (postError) {
            setMessage(
              postError.response?.data?.detail ||
                'An error occurred while creating the key-value pair.'
            );
          }
        } else {
          setMessage(
            error.response?.data?.detail || 'An error occurred while updating the value.'
          );
        }
      }
    } else {
      setMessage('Please enter at least a key.');
    }
  };

  return (
    <Container>
      <Title>Cake Key-Value Store</Title>
      <Description>
        A simple interface to interact with your key-value database. Enter a key to retrieve its value, or provide both key and value to create or update an entry.
      </Description>
      <InputArea>
        <TextArea
          placeholder="Key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <TextArea
          placeholder="Value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </InputArea>
      <Button onClick={handleSubmit}>Go!</Button>
      {message && <Message>{message}</Message>}
    </Container>
  );
}

export default App;
