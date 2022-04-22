CREATE TABLE folios(
    amficode INT,
    userid INT,
    folionumber VARCHAR,
    CONSTRAINT fkconstraint_userid
        FOREIGN KEY(userid)
            REFERENCES users(id)
);