const BASE_URL = 'http://localhost:3001/api/v1';

export const fetchUserProfile = (token) => {
    return fetch(`${BASE_URL}/user/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({}),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la requête.');
            }
            return response.json();
        });
};
export const loginUser = (data) => {
    return fetch(`${BASE_URL}/user/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),

    })
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                console.log("Erreur lors de la connexion");
            }
        })
}
export const editNameCallApi = (token, firstName, lastName) => {
   return fetch(`${BASE_URL}/user/profile`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
        }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la requête.');
            }
            return response.json();
        });
}