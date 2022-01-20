const { Pool } = require('pg');

const pool = new Pool({
  user: 'Tony',
  password: '',
  host: 'localhost',
  database: 'bootcampx'
});

const args = process.argv;

pool.query(`
SELECT students.id as id, students.name as student_name, cohorts.name as cohort_name
FROM students JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name LIKE '${args[2]}%'
LIMIT ${args[3]};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.student_name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
  })
})
.catch(err => console.error('query error', err.stack));