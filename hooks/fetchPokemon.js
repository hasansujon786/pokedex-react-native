export const fetchPokemonById = async (id) => {
  const responsePokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );
  const pokemon = await responsePokemon.json();

  const responseDetails = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );
  const pokemonDetails = await responseDetails.json();

  const name = pokemonDetails.name;

  const description =
    pokemonDetails.flavor_text_entries[0]
      .flavor_text;

  const image =
    pokemon.sprites.other['official-artwork']
      .front_default;

  return { name, description, image };
}
