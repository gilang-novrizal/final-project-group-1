const router = require("express").Router()

// import controller
const {favoriteController} = require("../controller")

router.get("/get", favoriteController.getFavoriteAll)
router.get("/get/:id", favoriteController.getFavoriteDataByID)
router.post("/add/:id", favoriteController.addFavorite)
router.delete("/delete/:id", favoriteController.deleteFavorite)

module.exports = router