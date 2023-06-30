import { IoPersonCircleSharp } from "react-icons/io5"
import PropTypes from 'prop-types';
import { ButtonDeliteContact, ContactListItem, ContactListItemInfo, ContactListItemText } from "./Contacttem.styled"
import { useDispatch } from "react-redux"
import { deleteContact } from "redux/contactsSlice"
export const ContactItem = ({id, name, number}) => {
    const dispatch=useDispatch()
  
    function handleDelete() {
        dispatch(deleteContact(id))
    }
    
    return (<ContactListItem>
                    <IoPersonCircleSharp />
                            <ContactListItemInfo>
                                <ContactListItemText>{name}: {number}</ContactListItemText>
                                <ButtonDeliteContact
                                    type="button"
                                    onClick={handleDelete }>
                                    Delete
                                </ButtonDeliteContact> 
                            </ContactListItemInfo> 

             </ContactListItem>
        
    )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number:PropTypes.number.isRequired
}