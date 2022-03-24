const router = require('express').Router()
const {getAllPost, getOnePost, createPost, savePost, saveComment, getComments} = require('../controllers/allreq')


router.get('/', getAllPost)
router.get('/post:id', getOnePost)
router.get('/create', createPost)
router.post('/feedcom:id', saveComment)
router.get('/commentof:id', getComments)
router.post('/save', savePost)

module.exports= router
