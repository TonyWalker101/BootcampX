SELECT name, email, phone
  FROM students
  WHERE end_date > '0001-01-01'
    AND github IS NULL;