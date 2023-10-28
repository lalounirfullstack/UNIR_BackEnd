/***************************************
              > POSTS <
 ***************************************/
/*ALL Posts*/
SELECT * FROM blogs.posts;

/*Post by a Given Author*/
SELECT p.*,
       a.Name
FROM blogs.posts p
JOIN blogs.authors a ON a.id=p.author_id
WHERE p.author_id=3;

/*Post By a given Category*/
SELECT p.*,
       a.Name
FROM blogs.posts p
JOIN blogs.authors a ON a.id=p.author_id
WHERE p.category='Programming';

/*Update Posts*/
UPDATE blogs.posts
SET title='C++ losing steam',
    description='Lately C++ has been losing the battle of programming ...',
    category='Programming',
    updated_date='2023-10-21 03:49:30',
    author_id=9
WHERE id= 12;

/*Delete Author*/
DELETE FROM blogs.posts
WHERE id=11;