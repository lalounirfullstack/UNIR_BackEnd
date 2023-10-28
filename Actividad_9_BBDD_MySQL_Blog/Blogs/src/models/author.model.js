/**
 * Description: Finds and returns all Authors Records.
 * @returns {Query} All Authors from Authors Table
 */
const getAllAuthors = () =>{
    return db.query('SELECT * FROM authors');
}

/**
 * Description:  Finds and returns all Authors that match AuthorId.
 * @param authorId
 * @returns {Query} Authors that match AuthorId
 */
 const selectAuthorById = (authorId) =>{
    return db.query('SELECT * FROM authors WHERE id = ?', [authorId])
 }


/**
 * Description: Query number of records starting at a given position
 * @param page
 * @param limit
 * @returns {Query} Returns limited number of records staring at a given position
 */
 const selectAuthorsByPage = (page, limit) =>{
    return db.query('SELECT * FROM authors limit ? offset ?' , [limit, (page-1) * limit]);
 }

/**
 * Description: Inserts Author into Author Table
 * @param name
 * @param email
 * @param image
 * @returns {Query} Insert records with name, email, and image data.
 */
const insertAuthor = ({name, email, image})=>{
    return db.query(
        'INSERT INTO authors (name, email, image) values(?,?,?)', [name, email, image] )
}

/**
 * Description: Updates author record that matches given Id.
 * @param authorId
 * @param name
 * @param email
 * @param image
 * @returns {Query} Update records with provided data for the matching record id.
 */
const updateAuthorById = (authorId, {name, email, image}) => {
    return db.query('UPDATE authors SET name=IFNULL(?,name), email=IFNULL(?,email), image=IFNULL(?,image) WHERE id=?',
    [name, email, image, authorId]    )
}

/**
 * Description:  Deletes author record that matches given Id.
 * @param authorId
 * @returns {Query} Deletes record
 */
const deleteAuthorById = (authorId) => {
    return db.query('DELETE FROM authors WHERE id=?', [authorId])
}

module.exports = {getAllAuthors, selectAuthorById, insertAuthor, updateAuthorById, deleteAuthorById, selectAuthorsByPage }