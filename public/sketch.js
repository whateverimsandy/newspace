document.body.style.margin   = 0
document.body.style.overflow = `hidden`

const cnv = document.getElementById ("cnv_id")
cnv.width = innerWidth
cnv.height= innerHeight
cnv.style.background = `turquoise`

const ctx = cnv.getContext (`2d`)

cnv.onpointerdown = () => {
   //console.log (`interaction achieved`)
   //console.dir(e)
   console.log(e.x, e.y)
   ctx.fillRect (e.x, e.y, 100, 100)
}
//console.dir (cnv)