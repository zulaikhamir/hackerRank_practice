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
