  Display the first 20 lines of an input file.
    head -n 20

# -n 20 means print the first 20 lines of the input file
# Works for any input file

# Display the last 20 lines of an input file.
tail -n 20

# -n 20 means print the last 20 lines of the input file
# Works for any input file
# Display the first 20 characters of an input file.
head -c 20

# -c 20 means print the first 20 characters of the input file
# Works for any input file

# Display the last 20 characters of an input file.
tail -c 20

# -c 20 means print the last 20 characters of the input file
# Works for any input file
# Display the lines (from line number 12 to 22, both inclusive) of a given text file.
head -n 22 | tail -n +12

# -n 22 means print the first 22 lines of the input file
# -n +12 means print the lines from the 12th line to the end of the file
# Works for any input file
✅ Goal

Print lines 12 through 22 (inclusive).

✅ Using head + tail

head can only show you the top of the file.
So you grab the first 22 lines → then take the last 11 of those.

Because:
22 − 12 + 1 = 11 lines

✅ Command
head -n 22 file.txt | tail -n 11
we are using pipe to pass the output of head to tail

✅ Breakdown

head -n 22 → fetch the first 22 lines

tail -n 11 → extract the last 11 from that set, which are lines 12 to 22

Display the last 20 lines of an input file.
tail -n 20
tail -c 20 charaters
