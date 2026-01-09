use mom

CREATE TABLE MeetingType (
    MeetingTypeID     INT AUTO_INCREMENT PRIMARY KEY,
    MeetingTypeName   VARCHAR(100) NOT NULL,
    Remarks           VARCHAR(255),
    Created           DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    Modified          DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
                      ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE Meetings (
    MeetingID             INT AUTO_INCREMENT PRIMARY KEY,
    MeetingDate           DATETIME NOT NULL,
    MeetingTypeID         INT NOT NULL,
    MeetingDescription    VARCHAR(255),
    DocumentPath          VARCHAR(255),
    Created               DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    Modified              DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
                          ON UPDATE CURRENT_TIMESTAMP,
    IsCancelled           TINYINT(1) NOT NULL DEFAULT 0,
    CancellationDateTime  DATETIME NULL,
    CancellationReason    VARCHAR(255),

    CONSTRAINT fk_meetings_meetingtype
      FOREIGN KEY (MeetingTypeID)
      REFERENCES MeetingType(MeetingTypeID)
      ON UPDATE CASCADE
      ON DELETE RESTRICT
) ENGINE=InnoDB;

CREATE TABLE Staff (
    StaffID        INT AUTO_INCREMENT PRIMARY KEY,
    StaffName      VARCHAR(150) NOT NULL,
    MobileNo       VARCHAR(20),
    EmailAddress   VARCHAR(150),
    Remarks        VARCHAR(255),
    Created        DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    Modified       DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
                   ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE MeetingMember (
    MeetingMemberID  INT AUTO_INCREMENT PRIMARY KEY,
    MeetingID        INT NOT NULL,
    StaffID          INT NOT NULL,
    IsPresent        TINYINT(1) NOT NULL DEFAULT 0,
    Remarks          VARCHAR(255),
    Created          DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    Modified         DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
                     ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_meetingmember_meeting
      FOREIGN KEY (MeetingID)
      REFERENCES Meetings(MeetingID)
      ON UPDATE CASCADE
      ON DELETE CASCADE,

    CONSTRAINT fk_meetingmember_staff
      FOREIGN KEY (StaffID)
      REFERENCES Staff(StaffID)
      ON UPDATE CASCADE
      ON DELETE RESTRICT
) ENGINE=InnoDB;
