import { client } from './client';
import { setImgs } from './setimg';

export async function fetch() {
  const entries = await client.getEntries({
    content_type: "hotel"
  })
  let array = entries.items;
  array.unshift(entries.items[entries.items.length - 1])
  array.push(entries.items[1])
  console.log(array)
  setImgs(entries.items)
}
