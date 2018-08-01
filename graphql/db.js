export const people = [
    {
        id:"0",
        name : "hong3",
        age : 100,
        company : "herren"
    },
    {
        id:"1",
        name : "hongdonghyun",
        age : 90,
        company : "herren"
    },
    {
        id:"2",
        name : "2minchul",
        age : 80,
        company : "herren"
    },
    {
        id:"3",
        name : "bada",
        age : 70,
        company : "herren"
    },
    {
        id:"4",
        name : "daldal",
        age : 60,
        company : "herren"
    },
    {
        id:"5",
        name : "nouveau",
        age : 50,
        company : "herren"
    },

]

export const getById = id => {
    const filteredPeople = people.filter(person => people.id === id)
    return filteredPeople[0]
}