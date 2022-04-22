CREATE TABLE sells(
    navdate TIMESTAMP,
    userid INT,
    amount DOUBLE PRECISION,
    units DOUBLE PRECISION,
    CONSTRAINT fkconstraint_userid
        FOREIGN KEY(userid)
            REFERENCES users(id)
);