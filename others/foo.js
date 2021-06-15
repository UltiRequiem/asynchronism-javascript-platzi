async function foo() {
  const [characters, episodes, locations] = await Promise.all([
    getCharacters(),
    getEpisodes(),
    getLocations(),
  ]);

  console.log(characters);
  console.log(episodes);
  console.log(locations);
}
