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

  export const updateUser = (userData) => {
    return fetch('/api/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
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


  export const getCharacter = (characterId) => {
    return fetch(`/api/character/${characterId}`);
  };

  export const getCharacters = (currentClass) => {
    return fetch(`/api/character/class/${currentClass}`);
  }

  export const deleteCharacter = (characterId, userId) => {
    return fetch(`/api/character/${characterId}`, { 
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }), 
    });
  };