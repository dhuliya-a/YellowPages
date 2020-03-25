
import {handleAddressInput ,handleContactInput, handleEmailInput, 
        handleModalShow, handleProfileInput, handleUserNameInput}
from './actions';

const initialState = {
  name: 'User Name',
  contact: '0000000000',
  email: 'Default Email',
  address: 'Default Address',
  profile_img: 'Default Picture',
  current_user: {},
  users: []
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case NAME_UPDATE:
      return {
        name: action.name
      };

    case EMAIL_UPDATE:
    return {
      email: action.email
    };

    case CONTACT_UPDATE:
    return {
      contact: action.contact
    };

    case ADDRESS_UPDATE:
    return {
      address: action.address
    };

    case PROFILE_UPDATE:
    return {
      profile: action.profile
    };

    case MODAL_STATUS:
    return {
      status: action.status
    };

    case CURRENT_USER:
    return {
      current_user: action.current_user
    };

    case ALL_USERS:
    return {
      users: action.users
    };

    default:
      return state;
  }
}

  export default reducer;