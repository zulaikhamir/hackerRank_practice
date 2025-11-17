In a given fragment of text, replace all parentheses ()  with box brackets [] .


Use the tr command to translate one set of characters to another.

tr '()'  '[]'

In a given fragment of text, delete all the lowercase characters .

Use tr with the -d (delete) option.

To delete all lowercase letters a–z:

tr -d [a-z]
tr -d 'a-z'



Yes — it “worked,” but **for the wrong reason**.

### Why `tr -d [a-z]` works

`tr` does **not** treat `[...]` as a set expression like regex.
It treats characters **literally**, unless it’s a recognized range like `a-z`.

So in:

```bash
tr -d [a-z]
```

The characters to delete are:

* `[`
* `a`
* `-`
* `z`
* `]`

But **`a-z` inside brackets** is still interpreted as the range `a` to `z`.
So effectively, this command deletes:

* every lowercase letter (`a` → `z`)
* AND the literal characters `[` and `]` (if your text contains them)

### Correct, safe version

```bash
tr -d 'a-z'
```

Use quotes, no brackets.

### Quick proof

Input:

```
a[b]c
```

Command:

```bash
echo "a[b]c" | tr -d [a-z]
```

Output:

```
[]
```

(`[` and `]` also removed)

Correct command:

```bash
echo "a[b]c" | tr -d 'a-z'
```

Output:

```
[b]
```

So always prefer quoting and avoid brackets unless you mean them literally.
