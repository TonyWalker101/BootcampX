const { Pool } = require('pg');

const pool = new Pool({
  user: 'Tony',
  password: '',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohorts
  FROM assistance_requests 
    JOIN teachers ON assistance_requests.teacher_id = teachers.id
    JOIN students ON assistance_requests.student_id = students.id
    JOIN cohorts ON students.cohort_id = cohorts.id
  WHERE cohorts.name LIKE '${process.argv[2] || 'JUL02'}%'
  ORDER BY teachers.name;
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohorts}: ${user.teacher}`);
  })
})
.catch(err => console.error('query error', err.stack));