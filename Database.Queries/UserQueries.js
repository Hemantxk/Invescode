const createUserQuery = () => {
    let query = "INSERT INTO users $1, $2, $3, $4, $5, $6, $7 RETURNING *";
    return query;
}

const updateUserQuery = () => {
    let query = "UPDATE users SET firstname = $1, lastname = $2, email = $3, mobile = $4 WHERE id = $5 RETURNING *";
    return query;
}

const resetPassword = () => {
    let query = "UPDATE users SET hashedpassword = $1, WHERE id = $2 RETURNING *";
    return query;
}

exports.createUserQuery = createUserQuery;
exports.updateUserQuery = updateUserQuery;
exports.resetPassword = resetPassword;