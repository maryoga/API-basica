import { Club, Clubs, Match, Matches } from "./types";

const clubs: Clubs = require("../data/clubs.json")
const resultados: Matches = require("../data/resultados.json")

export function getClub(code: string): string {
    const club = clubs.clubs.find(club => club.code === code)

    if(!club) {
        throw new Error(`Club ${code} not found`)
    }

    return club.name

}

export function getResultado(eq1: string, eq2: string): Match {
    const match = resultados.matches.find(match => {
        return eq1 === match.team1 && eq2 === match.team2
    })

    if(!match){
        throw new Error("No exite este partido este año")
    }

    return match
}