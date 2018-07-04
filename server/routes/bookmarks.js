const Bookmark = require('../models/bookmark');
const express = require('express');
const router = express.Router();


// Get /bookmarks (R)
router.get('/', (req, res) => {
   Bookmark.find().then(
       bookmarks => res.json(bookmarks)
    ).catch(
        error => res.status(500).json({ error: error.message })
    )
})

// post /bookmarks (R)
router.post('/', (req, res) => {
    Bookmark.create(req.body).then(
        bookmark => res.send(bookmark)
    ).catch(
        error => res.status(500).json({ error: error.message })
    )
})

//Delete /bookmarks/:id
router.delete('/:id', (req, res) => {
    Bookmark.findByIdAndRemove(req.params.id).then(
        () => res.send(204)
    ).catch(
        error => res.status(500).json({ error: error.message })
    )
})



module.exports = router