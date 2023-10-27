/**
 * Description: Finds and returns all Posts Records.
 * @returns {Query} All Posts from Posts Table
 */
const getAllPosts = () =>{
    return db.query('SELECT * FROM posts');
}

/**
 * Description:  Finds and returns all Posts created by a given Author.
 * @param authorId
 * @returns {Query} Posts that match AuthorId
 */
 const selectPostByAuthorId = (authorId) =>{
    return db.query('SELECT * FROM posts WHERE id = ?', [authorId])
 }

/**
 * Inserts Posts into Posts Table
 * @param title
 * @param description
 * @param category
 * @param authors_id
 * @returns {Query} Insert records with title, description, category and author id data
 */
const insertPost = ({title, description, category, authors_id})=>{
    return db.query(
        'INSERT INTO posts (title, description, category, authors_id) values(?,?,?,?)', [title, description, category, authors_id] )
}

/**
 * Updates post record that matches given Id
 * @param postId
 * @param title
 * @param description
 * @param category
 * @param updated_date
 * @param authors_id
 * @returns {Query} Update records with provided data for the matching record id.
 */
const updatePostById = (postId, {title, description, category, updated_date, authors_id }) => {
    return db.query('UPDATE posts SET title=IFNULL(?,title), description=IFNULL(?,description),category=IFNULL(?,category),updated_date=?, authors_id=IFNULL(?,authors_id)  WHERE id=?',
    [title, description, category,updated_date, authors_id, postId])
}

/**
 * Deletes posts record that matches given Id.
 * @param postId
 * @returns {Query}
 */
const deletePostById = (postId) => {
    return db.query('DELETE FROM posts WHERE id=?', [postId])
}

module.exports = {getAllPosts, selectPostByAuthorId, insertPost, updatePostById, deletePostById }