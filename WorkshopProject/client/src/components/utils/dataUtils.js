export const formatDate = (isoDate) => {
    const date = new Date(isoDate);

    const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;

    return formattedDate;
}

export const criteriaHandler = {
    'First Name': 'firstName',
    'Last Name': 'lastName',
    'Phone': 'phoneNumber',
    'Email': 'email',
}