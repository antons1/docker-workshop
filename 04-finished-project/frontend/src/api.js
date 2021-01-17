//GetKittens (backend)
export function getKittens() {
    return fetch("//localhost:3001/kittens").then((res) => res.json()).catch((err) => console.log(err));
}

//StoreKitten (backend)
export function storeKitten({ url, comment }) {
    return fetch("//localhost:3001/kitten", {
        method: "POST",
        body: JSON.stringify({ url, comment }),
        headers: { "Content-Type": "application/json" }
    }).then((res) => res.json())
    .catch((err) => console.log(err));
}

//DeleteKitten (backend)
export function deleteKitten(id) {
    return fetch(`//localhost:3001/kitten/${id}`, {
        method: "DELETE"
    }).then((res) => res.json())
    .catch((err) => console.log(err));
}

//GetKitten (backend)
export function getKitten(id) {
    return fetch(`//localhost:3001/kitten/${id}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}