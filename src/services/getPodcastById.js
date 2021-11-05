const getById = (id, podcasts) => {
    const found = podcasts.filter((p) => p.id == id);
    return found[0];
}

export default getById;