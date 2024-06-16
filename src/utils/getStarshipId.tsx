export function getStarshipId(starship) {
    const apiUrl = starship?.url;
    const segments = apiUrl.split("/");
    const id = segments[segments.length - 2];
    return id;
}
