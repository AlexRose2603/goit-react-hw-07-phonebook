import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Container, Title, Section, Total } from './App.styled';
import { fetchContacts } from 'store/operations';
import { selectError, selectIsLoading } from 'store/selectors';
import { initialContacts } from 'store/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Filter />
      <Section>Contacts</Section>
      {isLoading && !error && <b>Wait for it...</b>}
      <ContactList />
      <Total>Total number of contacts: {initialContacts.items.length}</Total>
    </Container>
  );
};
