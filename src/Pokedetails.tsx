import * as React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import PokeCard from './Card'

const POKEDETAILS_QUERY = gql`
  query Pokemon($id: String!) {
    pokemon(id: $id) {
      id,
      number,
      name,
      weight {
        minimum,
        maximum
      },
      height {
        minimum,
        maximum
      },
      classification,
      types,
      resistant,
      attacks {
        fast {
          name,
          type,
          damage
        },
        special {
          name,
          type,
          damage
        }
      },
      weaknesses,
      fleeRate,
      maxCP,
      evolutions {
        name
      },
      evolutionRequirements {
        name
      },
      maxHP,
      image
    }
  }
`;

const Pokedetails = (props) => {
  const { location } = props;
  return (
    <Query query={POKEDETAILS_QUERY} variables={{ id: location.pathname.substring(1) }}>
      {({ loading, error, data }) => {
        if (loading) {
          return 'Loading...'
        }
        console.log(data);
        return (
          <PokeCard pokemon={data.pokemon} />
        )
      }}
    </Query>
  )
};

export default Pokedetails;
