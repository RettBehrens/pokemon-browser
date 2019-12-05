import * as React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import PokeTable from './Table'

const POKEDEX_QUERY = gql`
  query Pokemons($first: Int!) {
    pokemons(first: $first){
      id,
      number,
      name
    }
  }
`;

const Pokedex = (props) => {
  const { history } = props;
  return (
    <Query query={POKEDEX_QUERY} variables={{ first: 151 }}>
      {({ loading, error, data }) => {
        if (loading) {
          return 'Loading...'
        }
        return (
          <PokeTable history={history} pokemons={data.pokemons} />
        )
      }}
    </Query>
  )
};

export default Pokedex;
