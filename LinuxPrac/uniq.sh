In this challenge, we practice using the uniq command to eliminate consecutive repetitions of a line when a text file is piped through it.

Given a text file, remove the consecutive repetitions of any line.

Sample Input

00
00
01
01
00
00
02
02
Sample Output

00
01
00
02


answer is uniq





In this challenge, we practice using the uniq command to eliminate consecutive repetitions of a line when a text file is piped through it.

Given a text file, count the number of times each line repeats itself. Only consider consecutive repetitions. Display the space separated count and line, respectively. There shouldn't be any leading or trailing spaces. Please note that the uniq -c command by itself will generate the output in a different format than the one expected here.

Sample Output

Explanation

Sample Input

00
00
01
01
00
00
02
02
03
aa
aa
aa
Sample Output

2 00
2 01
2 00
2 02
1 03
3 aa
Explanation

00 is repeated twice
01 is repeated twice
00 is repeated twice
02 is repeated twice
03 occurs once
aa is repeated thrice




Alright — straight, clear, no circus. Here's exactly what’s happening, step by step, with examples so you see the transformation.

---

# Command

```bash
uniq -c | sed 's/^ *//'
```

You run this while piping the file into it (or run `uniq -c file | sed 's/^ *//'`).

---

# 1) `uniq -c`

* `uniq` collapses **consecutive identical lines** into one.
* `-c` makes it **prefix** each collapsed line with the **count** of how many times it appeared consecutively.

Example input:

```
00
00
01
01
00
00
02
02
03
aa
aa
aa
```

`uniq -c` produces:

```
  2 00
  2 01
  2 00
  2 02
  1 03
  3 aa
```

Notice: the count is printed **with leading spaces** (so columns align). That’s how `uniq -c` formats its output.

---

# 2) `sed 's/^ *//'`

* `sed` is a stream editor; here it runs a *substitution* on every line.
* The pattern `^ *` means:

  * `^` → start of the line
  * ` ` → literal space
  * `*` → zero or more of the preceding token (spaces)
* So `s/^ *//` = **remove all leading spaces** from the start of the line.

Applying it to the `uniq -c` output:

```
  2 00    → sed removes leading spaces → 2 00
  2 01    → 2 01
  3 aa    → 3 aa
```

Final output (exactly as required):

```
2 00
2 01
2 00
2 02
1 03
3 aa
```

---

# Why both are needed

* `uniq -c` gives you the counts — **required**.
* But `uniq -c` pads those counts with spaces for alignment. The problem expects no leading spaces. So `sed` trims those leading spaces.

---

# Edge notes

* `uniq` only collapses **consecutive** duplicates. If the same line appears later non-consecutively, it will be counted separately (that's correct per the problem).
* If lines can start with tabs instead of spaces, use `sed 's/^[ \t]*//'` to remove leading spaces or tabs.
* Alternative (single-tool) using `awk`:

  ```bash
  awk 'prev==$0{c++} prev!=$0{ if (NR>1) print cnt, prev; prev=$0; cnt=1 } END{print cnt, prev}' file
  ```

  — but `uniq -c | sed ...` is simpler and idiomatic.

---

Anything unclear about a specific part (regex, sed syntax, uniq behavior), point to the exact line and I’ll explain that single bit.

