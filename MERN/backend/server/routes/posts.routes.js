import { Router } from "express"
import {createPosts, deletePosts, getPost, getPosts, updatePosts}from '../controllers/posts.controllers.js'
import cors  from "cors"

const router=Router()
router.use(cors())

router.get('/posts', getPosts)
router.post('/posts',createPosts )
router.put('/posts/:id', updatePosts)
router.delete('/posts/:id', deletePosts)
router.get('/posts/:id', getPost)

export default router