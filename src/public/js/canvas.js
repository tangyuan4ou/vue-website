function animate() {
    const S = {
        init: () => {
            S.Drawing.init('.canvas')
            document.body.classList.add('body--ready')
            S.UI.simulate('云沃盾牌|网络|安全产品||')
            S.Drawing.loop(() => {
                S.Shape.render()
            })
        }
    }
    S.Drawing = (function() {
        let canvas,
            context,
            renderFn
        const requestFrame = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60)
            }

        return {
            init(el) {
                canvas = document.getElementById('canvas')
                context = canvas.getContext('2d')

                this.adjustCanvas()

                window.addEventListener('resize', () => {
                    S.Drawing.adjustCanvas()
                })
            },

            loop(fn) {
                renderFn = !renderFn ? fn : renderFn
                this.clearFrame()
                renderFn()
                requestFrame.call(window, this.loop.bind(this))
            },

            adjustCanvas() {
                canvas.width = window.innerWidth
                canvas.height = window.innerHeight - 80
            },

            clearFrame() {
                context.clearRect(0, 0, canvas.width, canvas.height)
            },

            getArea() {
                return { w: canvas.width, h: canvas.height }
            },

            drawCircle(p, c) {
                context.fillStyle = c.render()
                context.beginPath()
                context.arc(p.x, p.y, p.z, 0, 2 * Math.PI, true)
                context.closePath()
                context.fill()
            }
        }
    }())


    S.UI = (function() {
        let interval,
            time,
            sequence = []
        const canvas = document.querySelector('.canvas'),
            cmd = '#'

        function timedAction(fn, delay, max, reverse) {
            clearInterval(interval)
            let currentAction = reverse ? max : 1
            fn(currentAction)

            if (!max || (!reverse && currentAction < max) || (reverse && currentAction > 0)) {
                interval = setInterval(() => {
                    currentAction = reverse ? currentAction - 1 : currentAction + 1
                    fn(currentAction)

                    if ((!reverse && max && currentAction === max) || (reverse && currentAction === 0)) {
                        clearInterval(interval)
                    }
                }, delay)
            }
        }

        function performAction(value) {
            let current

            sequence = typeof value === 'object' ? value : sequence.concat(value.split('|'))

            timedAction(() => {
                current = sequence.shift()
                S.Shape.switchShape(S.ShapeBuilder.letter(current[0] === cmd ? 'What?' : current))
            }, 2000, sequence.length)
        }

        return {
            simulate(action) {
                performAction(action)
            }
        }
    }())

    S.Point = function(args) {
        this.x = args.x
        this.y = args.y
        this.z = args.z
        this.a = args.a
        this.h = args.h
    }


    S.Color = function(r, g, b, a) {
        this.r = r
        this.g = g
        this.b = b
        this.a = a
    }

    S.Color.prototype = {
        render() {
            return 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a + ')'
        }
    }


    S.Dot = function() {
        this.p = new S.Point({
            x: window.innerWidth / 2,
            y: (window.innerHeight - 80) / 2,
            z: 5,
            a: 1,
            h: 0
        })

        this.e = 0.07
        this.s = true

        this.c = new S.Color(198, 226, 243, this.p.a)

        this.t = this.clone()
        this.q = []
    }

    S.Dot.prototype = {
        clone() {
            return new S.Point({
                x: this.x,
                y: this.y,
                z: this.z,
                a: this.a,
                h: this.h
            })
        },

        _draw() {
            this.c.a = this.p.a
            S.Drawing.drawCircle(this.p, this.c)
        },

        _moveTowards(n) {
            const details = this.distanceTo(n, true),
                dx = details[0],
                dy = details[1],
                d = details[2],
                e = this.e * d

            if (this.p.h === -1) {
                this.p.x = n.x
                this.p.y = n.y
                return true
            }

            if (d > 1) {
                this.p.x -= dx / d * e
                this.p.y -= dy / d * e
            } else {
                if (this.p.h > 0) {
                    this.p.h--
                } else {
                    return true
                }
            }

            return false
        },

        _update() {
            if (this._moveTowards(this.t)) {
                const p = this.q.shift()

                if (p) {
                    this.t.x = p.x || this.p.x
                    this.t.y = p.y || this.p.y
                    this.t.z = p.z || this.p.z
                    this.t.a = p.a || this.p.a
                    this.p.h = p.h || 0
                } else {
                    if (this.s) {
                        this.p.x -= Math.sin(Math.random() * 3.142)
                        this.p.y -= Math.sin(Math.random() * 3.142)
                    } else {
                        this.move(new S.Point({
                            x: this.p.x + (Math.random() * 50) - 25,
                            y: this.p.y + (Math.random() * 50) - 25
                        }))
                    }
                }
            }

            let d = this.p.a - this.t.a
            this.p.a = Math.max(0.1, this.p.a - (d * 0.05))
            d = this.p.z - this.t.z
            this.p.z = Math.max(1, this.p.z - (d * 0.05))
        },

        distanceTo(n, details) {
            const dx = this.p.x - n.x,
                dy = this.p.y - n.y,
                d = Math.sqrt(dx * dx + dy * dy)

            return details ? [dx, dy, d] : d
        },

        move(p, avoidStatic) {
            if (!avoidStatic || (avoidStatic && this.distanceTo(p) > 1)) {
                this.q.push(p)
            }
        },

        render() {
            this._update()
            this._draw()
        }
    }


    S.ShapeBuilder = (function() {
        const gap = 13,
            shapeCanvas = document.createElement('canvas'),
            shapeContext = shapeCanvas.getContext('2d'),
            fontSize = 500,
            fontFamily = 'Avenir, Helvetica Neue, Helvetica, Arial, sans-serif'

        function fit() {
            shapeCanvas.width = Math.floor(window.innerWidth / gap) * gap
            shapeCanvas.height = Math.floor(window.innerHeight / gap) * gap
            shapeContext.fillStyle = 'red'
            shapeContext.textBaseline = 'middle'
            shapeContext.textAlign = 'center'
        }

        function processCanvas() {
            const pixels = shapeContext.getImageData(0, 0, shapeCanvas.width, shapeCanvas.height).data,
                dots = []

            let x = 0,
                y = 0
            let obj

            return {
                dots: (() => {
                    for (let p = 0; p < pixels.length; p += 4 * gap) {
                        if (pixels[p + 3] > 0) {
                            dots.push(new S.Point({
                                x: (() => x)(),
                                y: (() => y)()
                            }))
                        }
                        x += gap
                        if (x >= shapeCanvas.width) {
                            x = 0
                            y += gap
                            p += gap * 4 * shapeCanvas.width
                        }
                    }
                    return dots
                })(),
                w: window.innerWidth,
                h: window.innerHeight
            }
        }

        function setFontSize(s) {
            shapeContext.font = 'bold ' + s + 'px ' + fontFamily
        }

        function isNumber(n) {
            return !isNaN(parseFloat(n)) && isFinite(n)
        }

        function init() {
            fit()
            window.addEventListener('resize', fit)
        }

        init()

        return {
            circle(d) {
                const r = Math.max(0, d) / 2
                shapeContext.clearRect(0, 0, shapeCanvas.width, shapeCanvas.height)
                shapeContext.beginPath()
                shapeContext.arc(r * gap, r * gap, r * gap, 0, 2 * Math.PI, false)
                shapeContext.fill()
                shapeContext.closePath()

                return processCanvas()
            },

            letter(l) {
                let s = 0

                setFontSize(fontSize)
                s = Math.min(fontSize,
                    (shapeCanvas.width / shapeContext.measureText(l).width) * 0.8 * fontSize,
                    (shapeCanvas.height / fontSize) * (isNumber(l) ? 1 : 0.45) * fontSize)
                setFontSize(s)

                shapeContext.clearRect(0, 0, shapeCanvas.width, shapeCanvas.height)
                shapeContext.fillText(l, shapeCanvas.width / 2, shapeCanvas.height / 2)

                return processCanvas()
            }
        }
    }())


    S.Shape = (function() {
        const dots = []
        let width = 0,
            height = 0,
            cx = 0,
            cy = 0

        function compensate() {
            const a = S.Drawing.getArea()

            cx = a.w / 2 - width / 2
            cy = a.h / 2 - height / 2
        }

        return {
            shuffleIdle() {
                const a = S.Drawing.getArea()

                for (let d = 0; d < dots.length; d++) {
                    if (!dots[d].s) {
                        dots[d].move({
                            x: Math.random() * a.w,
                            y: Math.random() * a.h
                        })
                    }
                }
            },

            switchShape(n, fast) {
                let size
                const a = S.Drawing.getArea()

                width = n.w
                height = n.h

                compensate()

                if (n.dots.length > dots.length) {
                    size = n.dots.length - dots.length
                    for (let d = 1; d <= size; d++) {
                        dots.push(new S.Dot(a.w / 2, a.h / 2))
                    }
                }

                let d = 0, i = 0

                while (n.dots.length > 0) {
                    i = Math.floor(Math.random() * n.dots.length)
                    dots[d].e = fast ? 0.25 : dots[d].s ? 0.14 : 0.11

                    if (dots[d].s) {
                        dots[d].move(new S.Point({
                            z: Math.random() * 20 + 10,
                            a: Math.random(),
                            h: 18
                        }))
                    } else {
                        dots[d].move(new S.Point({
                            z: Math.random() * 5 + 5,
                            h: fast ? 18 : 30
                        }))
                    }

                    dots[d].s = true
                    dots[d].move(new S.Point({
                        x: n.dots[i].x + cx,
                        y: n.dots[i].y + cy,
                        a: 1,
                        z: 5,
                        h: 0
                    }))

                    n.dots = n.dots.slice(0, i).concat(n.dots.slice(i + 1))
                    d++
                }

                for (let i = d; i < dots.length; i++) {
                    if (dots[i].s) {
                        dots[i].move(new S.Point({
                            z: Math.random() * 20 + 10,
                            a: Math.random(),
                            h: 20
                        }))

                        dots[i].s = false
                        dots[i].e = 0.04
                        dots[i].move(new S.Point({
                            x: Math.random() * a.w,
                            y: Math.random() * a.h,
                            a: 0.3,
                            z: Math.random() * 4,
                            h: 0
                        }))
                    }
                }
            },

            render() {
                for (let d = 0; d < dots.length; d++) {
                    dots[d].render()
                }
            }
        }
    }())

    S.init()
}

function canvasLoad() {
    let canvas = document.getElementById('canvas')

    const time = setInterval(() => {
        canvas = document.getElementById('canvas')
        if (canvas != null) {
            animate()
            clearInterval(time)
        }
    }, 10)
}

export {
    canvasLoad
}


