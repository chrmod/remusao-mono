
export interface Trie {
  chars: (undefined | Trie)[];
  code: number | undefined;
}

function newNode(): Trie {
  return {
    chars: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    code: undefined,
  };
}

export function create(strings: readonly string[]): Trie {
  const node: Trie = newNode();
  for (let i = 0; i < strings.length; i += 1) {
    const tok = strings[i];
    let root = node;
    for (let j = 0; j < tok.length; j += 1) {
      const c = tok.charCodeAt(j);
      let next = root.chars[c];
      if (next === undefined) {
        next = newNode();
        root.chars[c] = next;
      }
      root = next;
    }
    root.code = i;
  }
  return node;
}

export function lookup(trie: Trie, str: string): boolean {
  let node: Trie | undefined = trie;
  for (let i = 0; i < str.length; i += 1) {
    if (node === undefined) {
      return false;
    }

    node = node.chars[str.charCodeAt(i)];
  }

  return node !== undefined && node.code  !== undefined;
}
