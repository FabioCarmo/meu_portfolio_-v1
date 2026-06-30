
export async function buscarProjetosGithub(usuario) {
    try {
        const response = await fetch(`https://api.github.com/users/${usuario}/repos?per_page=3&sort=updated`);
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}