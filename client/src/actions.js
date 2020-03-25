//users, user, name, email, contact, address, picture, modalshow

import axios from 'axios';

export const handleUserNameInput = (e) => (
{
  type: 'NAME_UPDATE',  //compulsory key!
  name: e.target.value
});

export const handleEmailInput = (e) => (
{
  type: 'EMAIL_UPDATE',  //compulsory key!
  email: e.target.value
});

export const handleContactInput = (e) => (
{
  type: 'CONTACT_UPDATE',  //compulsory key!
  contact: e.target.value
});
    
export const handleAddressInput = (e) => (
{
  type: 'ADDRESS_UPDATE',  //compulsory key!
  address: e.target.value
});

export const handleProfileInput = (e) => (
{
  type: 'PROFILE_UPDATE',  //compulsory key!
  profile_img: e.target.value
});

export const handleModalShow = (status) => (
{
  type: 'MODAL_STATUS',  //compulsory key!
  status: status
});
  
export const getCurrentUser = (user) => (

  {
    type: 'CURRENT_USER',  //compulsory key!
    current_user: user
  });
  

  export const getAllUsers = (users) => (
    {
      type: 'ALL_USERS',  //compulsory key!
      users: users
    });
      