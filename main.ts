function win () {
    if (info.score() >= 25) {
        game.over(true, effects.smiles)
    }
}
function hero () {
    Hero = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 7 7 7 7 . . . . . . 
. . . 7 7 7 8 7 7 8 7 7 7 . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . . 7 8 8 8 8 8 8 7 . . . . 
. . e . . 7 7 7 7 7 7 . . . . . 
. e e . . . . 8 8 . . . . . . . 
. e e 8 8 8 8 8 8 8 8 8 8 . . . 
. e e . . . . 8 8 . . . . . . . 
. . e . . . . 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
`, SpriteKind.Player)
    Hero.setPosition(80, 60)
    controller.moveSprite(Hero, 100, 0)
}
function score () {
    info.changeScoreBy(1)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    overlap()
})
function overlap () {
    game.over(false, effects.dissolve)
}
function projectile () {
    projectile2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . 7 5 7 7 5 7 . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . 7 5 5 5 5 7 . . . . . 
. . . . . . 7 7 7 7 . . . . . . 
. 7 7 7 7 7 . 7 7 . 7 7 7 7 7 . 
. . . . . . 7 7 7 7 . . . . . . 
. . . 7 . . . 7 7 . . . 7 . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
`, 0, 0)
}
let projectile2: Sprite = null
let Hero: Sprite = null
hero()
game.onUpdateInterval(200, function () {
    projectile()
    score()
    win()
})
