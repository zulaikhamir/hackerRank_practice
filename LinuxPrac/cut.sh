# Given n lines of input, print the 3rd character from each line as a new line of output. It is guaranteed that each of the  lines of input will have a  3rd character.

cut -c 3

# cut is a command-line tool that extracts specific parts of text, usually by columns, bytes, or characters.
# -c 3 means extract the 3rd character from each line.
# -f 2-3 means extract the 2nd and 3rd columns from each line.
# -d ',' means use comma as the delimiter.
# -s means suppress duplicate lines.
# -n means sort the output numerically.
# -r means reverse the order of the output.
# -u means sort the output uniquely.
# -t ',' means use comma as the delimiter.
# -k 2,3 means extract the 2nd and 3rd fields from each line.
# -k 2.3 means extract the 2nd and 3rd characters from each line.
# -k 2.3 means extract the 2nd and 3rd characters from each line.


# Display the 2nd  and  7th character from each line of text.
cut -c 2,7


# Display a range of characters starting at the  position of a string and ending at the  position (both positions included).
cut -c 2-7


# Display the first four characters from each line of text.
cut -c 1-4


# Given a tab delimited file with several columns (tsv format) print the first three fields.
cut -d $'\t' -f 1-3
cut -f 1-3


cut -d $'\t' -f 1-3
# -d $'\t' explicitly defines TAB as the delimiter
# This is required when your file may have custom or mixed delimiters
# Guaranteed, explicit, no-ambiguity field extraction


cut -f 1-3
# -f selects fields
# No -d means: cut assumes TAB as the default delimiter
# Works automatically for proper TSV files


# Print the characters from thirteenth position to the end.
cut -c 13-

# Given a sentence, identify and display its fourth word. Assume that the space (' ') is the only delimiter between words
cut -d ' ' -f 4

# -d ' ' explicitly defines space as the delimiter
# -f 4 means extract the 4th field from each line
# Works for sentences with standard spaces


# Given a sentence, identify and display its first three words. Assume that the space (' ') is the only delimiter between words
cut -d ' ' -f 1-3

# -d ' ' explicitly defines space as the delimiter
# -f 1-3 means extract the 1st, 2nd, and 3rd fields from each line
# Works for sentences with standard spaces

# Given a sentence, identify and display its first three words. Assume that the space (' ') is the only delimiter between words.
cut -d ' ' -f 1-3

# -d ' ' explicitly defines space as the delimiter
# -f 1-3 means extract the 1st, 2nd, and 3rd fields from each line
# Works for sentences with standard spaces

# Given a sentence, identify and display its first three words. Assume that the space (' ') is the only delimiter between words.
cut -d ' ' -f 1-3

# -d ' ' explicitly defines space as the delimiter
# -f 1-3 means extract the 1st, 2nd, and 3rd fields from each line
# Works for sentences with standard spaces
# Given a tab delimited file with several columns (tsv format) print the fields from second fields to last field.
cut -d $'\t' -f 2-

# -d $'\t' explicitly defines TAB as the delimiter
# -f 2- means extract the 2nd field to the last field from each line
# Works for tsv files with standard tabs

# Given a tab delimited file with several columns (tsv format) print the fields from second fields to last field.
cut -d $'\t' -f 2-
or
cut -f 2- because cut assumes TAB as the default delimiter for tsv files

# -d $'\t' explicitly defines TAB as the delimiter
# -f 2- means extract the 2nd field to the last field from each line
# Works for tsv files with standard tabs
