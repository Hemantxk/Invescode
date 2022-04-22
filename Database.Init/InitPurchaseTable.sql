CREATE TABLE purchases(
    navdate TIMESTAMP,
    userid INT,
    amount DOUBLE PRECISION,
    stampduty DOUBLE PRECISION,
    Units DOUBLE PRECISION,
    CONSTRAINT fkconstraint_userid
        FOREIGN KEY(userid)
            REFERENCES users(id)
);