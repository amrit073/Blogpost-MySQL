const getAllPost = (req, res) => {
    req.getConnection((err, connection) => {
        query = `select * from posts order by id desc`
        connection.query(query, [], (err, result) => {
            if (err) throw err
            console.log(result);
            res.render('./blog-pages/blogs.ejs', { result: result })


        })
    })
}

const getOnePost = (req, res) => {
    id = req.params.id
    console.log(id);
    req.getConnection((err, connection) => {
        query = `select * from posts where id = "${id}"`
        connection.query(query, [], (err, result) => {
            if (err) throw err
            console.log(result);
            res.render('./blog-pages/blogs.ejs', { result: result })



        })
    })
}

const savePost = (req, res) => {
    req.getConnection((err, connection) => {
        console.log(req.body);
        var {name , title , body} = req.body
        query = `insert into posts values (default , "${name}" , "${title}" ,"${body}" )`
        connection.query(query, [], (err, result) => {
            if (err) throw err
            console.log(result);
            res.redirect('/')
        })
    })
}

const saveComment = (req, res) => {
    id = req.params.id
    comment = req.body.comment
    req.getConnection((err, connection) => {
        query = `insert into comments values (${id}, "${comment}")`
        connection.query(query, [], (err, result) => {
            if (err) throw err
            res.status(200).redirect('/')

        })
    })
}

const getComments = (req, res) => {
    req.getConnection((err, connection) => {
        id = req.params.id
        query = `select comment from comments where id = ${id}`
        connection.query(query, [], (err, result) => {
            if (err) throw err
            res.send(result)
        })
    })
}

const createPost = (req, res) => {
res.render('./create.ejs').status(400)
}

module.exports = { getAllPost, getOnePost, savePost, saveComment, getComments, createPost }