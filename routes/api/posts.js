const express = require("express");
const router = express();

//@route GET api/post
//@desc Test route
//access Public
router.get("/", (req,res) => res.send("Post Profile"));

module.exports = router;