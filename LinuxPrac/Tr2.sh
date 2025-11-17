Replace all sequences of multiple spaces with just one space.

To collapse **multiple spaces into a single space**, use:

```bash
tr -s ' '
```

`-s` = squeeze repeated characters into one.

### Example

Input:

```
Hello     world    this   is   text
```

Command:

```bash
tr -s ' '
```

Output:

```
Hello world this is text
```

Done.
