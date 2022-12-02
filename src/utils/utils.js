export function mapping(users) {
    return users.map(user => {
        return {
            id: (user.id.value === null) ? user.phone + user.dob.age : user.id.value,
            firstName: user.name.first,
            lastName: user.name.last,
            age: user.dob.age,
            address: `${user.location.street.name}, ${user.location.street.number}`,
            postcode: user.location.postcode,
            email: user.email,
            gender: user.gender,
            phone: user.phone,
            city: user.location.city,
            country: user.location.country,
            smallImgURL: user.picture.medium,
            largeImgURL: user.picture.large,
        };
    });
}