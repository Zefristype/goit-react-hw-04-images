import { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import { Header, Form, SearchBtn, LabelBtn, Input } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      return;
    }
    onSubmit(searchQuery);
  };
  const handleChange = e => {
    const value = e.currentTarget.value;
    setSearchQuery(value);
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <SearchBtn type="submit">
          <AiOutlineSearch size={25} />
          <LabelBtn>Search</LabelBtn>
        </SearchBtn>

        <Input
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
        />
      </Form>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
