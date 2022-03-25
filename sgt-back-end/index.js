const pg = require('pg');
const express = require('express');
const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
  select *
    from "grades"
    `;
  db.query(sql)
    .then(result => {
      const gradesTable = result.rows;
      res.status(200).json(gradesTable);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occurred' });
    });
});

app.use(express.json());

app.post('/api/grades', (req, res) => {

  const insertGrades = req.body;
  if (!insertGrades.name || !insertGrades.course ||
      !insertGrades.score || insertGrades.score < 0 ||
      insertGrades.score > 100) {
    res.status(400).json({ error: 'There are missing or invalid parameters' });
    return;
  }

  const sql = `
  insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
  `;

  const params = [insertGrades.name, insertGrades.course, insertGrades.score];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occurred' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
