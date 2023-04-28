import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://polar-lowlands-54507.herokuapp.com/graphql",
    cache: new InMemoryCache(),
    headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
});

export default client;