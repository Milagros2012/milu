basic.forever(function () {
    basic.showString("Hola Milu")
    basic.showIcon(IconNames.Heart)
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.LoopingInBackground)
})
