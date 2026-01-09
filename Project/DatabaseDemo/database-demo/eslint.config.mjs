use demo

create table users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    UserName VARCHAR(100) NOT NULL,
    Password VARCHAR(255) NOT NULL
);

create table task (
    TaskID INT AUTO_INCREMENT PRIMARY KEY,
    TaskTitle VARCHAR(200) NOT NULL,
    TaskDescription TEXT,
    IsCompleted BOOLEAN DEFAULT FALSE,
    UserID INT,
    FOREIGN KEY (UserID) REFERENCES users(UserID)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
