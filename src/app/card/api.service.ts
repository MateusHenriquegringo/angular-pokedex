import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() { }

  getPokemons(offset = '0', limit = '151') {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
      .then(data => data.json())
      .then(data => data.results)
      .then(item => {
        const fetchPromises = item.map((pokemon: any) => fetch(pokemon.url)
          .then(res => res.json()))

          return Promise.all(fetchPromises)
      })
  }

}
