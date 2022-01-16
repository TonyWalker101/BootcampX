SELECT assignments.day as day, COUNT(assignments.day) as number_of_assignments, SUM(assignments.duration) as duration
  FROM assignments
  GROUP by day
  ORDER BY day;