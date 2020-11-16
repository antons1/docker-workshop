import { v4 as uuid } from 'uuid';

//GetKittens (localStorage)
export function getKittens() {
    const kittens = window.localStorage.getItem("kittens");
    return JSON.parse(kittens || "[]");
}

//StoreKitten (localStorage)
export function storeKitten({ url, comment }) {
    const kittens = getKittens();
    kittens.push({ id: uuid(), url, comment });
    window.localStorage.setItem("kittens", JSON.stringify(kittens));
}

//DeleteKitten (localStorage)
export function deleteKitten(id) {
    const kittens = getKittens();
    const modifiedKittens = kittens.filter((kitten) => kitten.id !== id);
    window.localStorage.setItem("kittens", JSON.stringify(modifiedKittens));
}

export function getKitten(id) {
    const kittens = getKittens();
    const [kitten] = kittens.filter((kitten) => kitten.id === id);
    return kitten;
}