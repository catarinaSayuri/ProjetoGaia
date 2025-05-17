import { forwardRef, useLayoutEffect, useRef } from "react"
import StartGame from "./game/main";

export const PhaserGame = forwardRef(function PhaserGame ({ currentActiveScene },ref)
{
    const game = useRef();

    useLayoutEffect(() => {
        if (game.current === undefined) {
            console.log("creating container")
            game.current = StartGame("game-container")

            if (ref !== null) {
                ref.current = { game: game.current, scene: null} 
            }
        }

        return () => {
            if (game.current) {
                game.current.destroy()
                game.current = undefined
                document.querySelector("#game-container").innerHTML = ""
            }
        }
    }, [ref])

    return (
        <div id="game-container">

        </div>
    )
})