// import express from 'express'
// import * as kbm from 'kbm-robot'

const express = require("express")
const kbm = require("kbm-robot")
const bodyparser = require("body-parser")

const app = express()

kbm.startJar()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next()
})

app.post('/', (req, res) => {

    if (req.body?.move === undefined) {
        res.sendStatus(400)
        return;
    }

    switch (req.body.move) {
        case '5':
            releaseMoveKeys()
            break;
        case '6':
            kbm.press('d')
                .go()
            break;
        case '4':
            kbm.press('a')
                .go()
            break;
        case '1':
            kbm.press('a')
                .press('s')
                .go()
            break;
        case '5lp':
            releaseMoveKeys()
            kbm.press('u')
                .sleep(17)
                .release('u')
                .go()
            break;
        case '5mp':
            releaseMoveKeys()
            kbm.press('i')
                .sleep(17)
                .release('i')
                .go()
            break;
        case '5hp':
            console.log('punch')
            releaseMoveKeys()
            kbm.press('o')
                .sleep(17)
                .release('o')
                .go()
            break;
        case '5lk':
            releaseMoveKeys()
            kbm.press('j')
                .sleep(17)
                .release('j')
                .go()
            break;
        case '5mk':
            releaseMoveKeys()
            kbm.press('k')
                .sleep(17)
                .release('k')
                .go()
            break;
        case '5hk':
            releaseMoveKeys()
            kbm.press('l')
                .sleep(17)
                .release('l')
                .go()
            break;
        case '2lp':
            releaseMoveKeys()
            kbm.press('s')
                .press('u')
                .sleep(17)
                .release('s')
                .release('u')
                .go()
            break;
        case '2mp':
            releaseMoveKeys()
            kbm.press('s')
                .press('i')
                .sleep(17)
                .release('s')
                .release('i')
                .go()
            break;
        case '2hp':
            releaseMoveKeys()
            kbm.press('s')
                .press('o')
                .sleep(17)
                .release('s')
                .release('o')
                .go()
            break;
        case '2lk':
            releaseMoveKeys()
            kbm.press('s')
                .press('j')
                .sleep(17)
                .release('s')
                .release('j')
                .go()
            break;
        case '2mk':
            releaseMoveKeys()
            kbm.press('s')
                .press('k')
                .sleep(17)
                .release('s')
                .release('k')
                .go()
            break;
        case '2hk':
            releaseMoveKeys()
            kbm.press('s')
                .press('l')
                .sleep(17)
                .release('s')
                .release('l')
                .go()
            break;
        case '6mp':
            releaseMoveKeys()
            kbm.press('d')
                .press('i')
                .sleep(17)
                .release('d')
                .release('i')
                .go()
            break;
        case '6hp':
            releaseMoveKeys()
            kbm.press('d')
                .press('o')
                .sleep(17)
                .release('d')
                .release('o')
                .go()
            break;
        case '4hp':
            releaseMoveKeys()
            kbm.press('a')
                .press('o')
                .sleep(17)
                .release('a')
                .release('o')
                .go()
            break;
        case '4hk':
            releaseMoveKeys()
            kbm.press('a')
                .press('l')
                .sleep(17)
                .release('a')
                .release('l')
                .go()
            break;
        case '236lp':
            console.log('hadoken')
            kbm.release('w')
                .release('a')
                .release('d')
                .press('s')
                .sleep(17)
                .press('d')
                .sleep(17)
                .release('s')
                .sleep(17)
                .release('d')
                .press('u')
                .sleep(17)
                .release('u')
                .go()
            break;
        case '236mp':
            console.log('hadoken')
            kbm.release('w')
                .release('a')
                .release('d')
                .press('s')
                .sleep(17)
                .press('d')
                .sleep(17)
                .release('s')
                .sleep(17)
                .release('d')
                .press('i')
                .sleep(17)
                .release('i')
                .go()
            break;
        case '236hp':
            console.log('hadoken')
            kbm.release('w')
                .release('a')
                .release('d')
                .press('s')
                .sleep(17)
                .press('d')
                .sleep(17)
                .release('s')
                .sleep(17)
                .release('d')
                .press('o')
                .sleep(17)
                .release('o')
                .go()
            break;
        default:
            releaseMoveKeys()
            break;
    }

    res.sendStatus(200)
})

function releaseMoveKeys() {
    kbm.release('w')
        .release('a')
        .release('s')
        .release('d')
        .go()
}

app.listen(8000, () => {
    console.log('listening')
})