You are given a file of tab separated weather data (TSV). There is no header column in this data file.
The first five columns of this data are: (a) the name of the city (b) the average monthly temperature in Jan (in Fahreneit). (c) the average monthly temperature in April (in Fahreneit). (d) the average monthly temperature in July (in Fahreneit). (e) the average monthly temperature in October (in Fahreneit).

You need to sort this file in ascending order of the second column (i.e. the average monthly temperature in January).

sort -t$'\t' -k2,2n


✅ What this command does

It sorts a TSV file (tab-separated file) by the second column, treating that column as a number, not text.

🔍 Breakdown of each part
1️⃣ sort

This is the Unix command that sorts lines in a file.

2️⃣ -t$'\t' → Set TAB as the delimiter

-t means separator (delimiter) for fields.

Normally, sort uses spaces or consecutive spaces as the delimiter.

But here our file is TSV → fields are separated by tabs, not spaces.

So we write:

✔️ -t$'\t'

This means:

-t → delimiter flag

$'\t' → represents a literal TAB character

Because you cannot easily type a tab into the terminal, $'\t' is a safe way to write it.

Why $'\t'?

It's a special Bash syntax to represent escape sequences.

Examples:

$'\n' → newline

$'\t' → tab

$'\r' → carriage return

So $'\t' literally means “a tab character”.

3️⃣ -k2,2 → Select the sort key: column 2 only

-k means “key”, meaning which column(s) to sort by.

-k2,2 means:

Start sorting at column 2

Stop sorting at column 2

i.e., sort ONLY using column 2

If you wrote only -k2, it might use column 2 and the rest of the line as tie-breakers.

But -k2,2 forces sorting strictly by the second field.

4️⃣ n → numeric sort

This ensures column 2 is sorted numerically, not alphabetically.

Example (alphabetical vs numeric):

Alphabetical:

100
20
5


Numeric:

5
20
100


So:

✔️ -k2,2n

Means: sort by column 2 as numbers.

🧠 Putting it all together
Final meaning of the command:
sort -t$'\t' -k2,2n input.tsv


Use tab as the separator

Use only the second column as the sort key

Sort it numerically







ou are given a file of pipe-delimited weather data (TSV). There is no header column in this data file. The first five columns of this data are: (a) the name of the city (b) the average monthly temperature in Jan (in Fahreneit). (c) the average monthly temperature in April (in Fahreneit). (d) the average monthly temperature in July (in Fahreneit). (e) the average monthly temperature in October (in Fahreneit).

You need to sort this file in descending order of the second column (i.e. the average monthly temperature in January).

Input Format

A text file with multiple lines of pipe-delimited data. The first five fields have been explained above

Output Format

Sort the data in descending order of the average monthly temperature in January.
sort -t'|' -k2,2nr


1️⃣ sort

The main Unix command used to sort lines of a file.

2️⃣ -t'|' — delimiter

-t tells sort what character separates the columns.

Your data looks like this:

Albany, N.Y.|22.2|46.6|71.1|49.3


So fields are separated by pipe characters, NOT tabs.

Therefore:

-t'|'


means “use | as the DELIMITER”.

3️⃣ -k2,2 — which column to sort by

-k means “key”.

Start sorting at column 2

End sorting at column 2

So you sort ONLY by column 2

This avoids sort looking at other columns.

If you wrote -k2, sort would use:

column 2

AND everything after it as a tie-breaker (not what we want)

So we write:

-k2,2

4️⃣ n — numeric sort

By default, sort compares text, not numbers.

Example:

100 < 20   (alphabetical)


To force numeric sorting:

n


So:

-k2,2n


means:
→ sort by column 2 as a NUMBER.

5️⃣ r — reverse (descending)

Your requirement says descending order.

r reverses the sorting direction.

So:

nr


means numeric (n) + reverse order (r).

🎉 Final combined meaning
sort -t'|' -k2,2nr

✔️ Use | as delimiter
✔️ Look at column 2 only
✔️ Treat numbers as numbers
✔️ Sort in descending order (highest → lowest)
-k2,2 tells sort:

Start at column 2

End at column 2

So the only sorting key is exactly column 2.
