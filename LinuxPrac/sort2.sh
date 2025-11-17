You are given a file of text,which contains temperature information about American cities, in TSV (tab-separated) format. The first column is the name of the city and the next four columns are the average temperature in the months of Jan, Feb, March and April (see the sample input). Rearrange the rows of the table in descending order of the values for the average temperature in January.

Input Format

A text file where each line contains a row of data as described above.

Output Format

Rearrange the rows of the table in descending order of the values for the average temperature in January (i.e, the mean temperature value provided in the second column).

To sort by the 2nd column (January temperature) in numeric, descending order, use:

sort -k2,2nr

Breakdown

-k2,2 → use only column 2 as the sort key

n → numeric sort

r → reverse (descending)

sort uses tab as default delimiter, so no need for -t$'\t' unless input is mixed
-k2,2 means “use only column 2 for sorting.”
Breakdown:
-k2,2

k = key

2,2 = from column 2 to column 2

So the sort key starts at column 2 and ends at column 2 → meaning sort ONLY by column 2.

Why do we write it twice?

Because sort keys are defined as a range:

-k START_COLUMN , END_COLUMN


Examples:

-k1,1 → use only column 1

-k2,2 → use only column 2

-k3,3 → use only column 3

-k2,4 → use columns 2 through 4 as the sorting key combined




sort -t$'\t' -k2,2nr this is the asnwer


The judge input is true TSV (fields separated by TABs) and city names contain spaces (e.g. Anchorage, Alaska).
If you don't tell sort to use only tabs as the field separator, it will treat spaces as field separators too and mis-parse the columns — so your key -k2,2 won't reference the January column reliably.

Use this exact command:

sort -t$'\t' -k2,2nr


Explanation, super short:

-t$'\t' — set the delimiter to a tab (not spaces).

-k2,2 — sort by column 2 only (January).

n — numeric sort.

r — reverse (descending).

That matches the judge’s TSV input and will produce the expected output.
