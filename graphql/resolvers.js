const hong3 = {
    name:"hong3",
    age:12,
    test:"message"
}

const resolvers = {
    Query : {
        person: () => hong3
    }
}

export default resolvers;