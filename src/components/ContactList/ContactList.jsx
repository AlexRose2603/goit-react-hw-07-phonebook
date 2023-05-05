import {
  Container,
  List,
  Contact,
  Name,
  Number,
  DeleteBtn,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'store/selectors';
import { deleteContact } from 'store/operations';
import { selectContactFilter } from 'store/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectContactFilter);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <Container>
      <List>
        {filteredContacts.map(({ id, name, number }) => (
          <Contact key={id}>
            <Name>{name}</Name>
            <Number>{number}</Number>
            <DeleteBtn
              onClick={() => dispatch(deleteContact(id))}
              type="button"
            >
              Delete
            </DeleteBtn>
          </Contact>
        ))}
      </List>
    </Container>
  );
};
