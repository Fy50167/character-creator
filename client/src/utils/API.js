export const getMe = (token) => {
    return fetch('/api/profile', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  };

  export const getUser = (userEmail) => {
    const url = `/api/profile?email=${encodeURIComponent(userEmail)}`;
    return fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  
  export const createUser = (userData) => {
    return fetch('/api/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  export const loginUser = (userData) => {
    return fetch('/api/profile/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  export const createCharacter = (characterData) => {
    return fetch('/api/character', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(characterData),
    });
  };
  
