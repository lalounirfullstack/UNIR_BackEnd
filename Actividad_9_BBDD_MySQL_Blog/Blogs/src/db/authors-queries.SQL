/***************************************
              > AUTHORS <
 ***************************************/
/*All Authors*/
SELECT * FROM blogs.authors;

/*Author By ID*/
SELECT * FROM blogs.authors WHERE id=10;

/*Authors by Page*/
SELECT * FROM blogs.authors LIMIT 10 OFFSET 5;

/*Authors with Posts*/
SELECT a.*,
       p.*
FROM blogs.authors a
JOIN blogs.posts p ON a.id=p.author_id;

/*Update Author*/
UPDATE blogs.authors
SET name='Edgar Roe',
    email='eroe@yahoo.com'
WHERE id= 4;

/*Delete Author*/
DELETE FROM blogs.authors
WHERE id=11;



