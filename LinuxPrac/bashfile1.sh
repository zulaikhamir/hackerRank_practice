# Write a Bash script which accepts  as input and displays the greeting "Welcome (name)"

# ans: single quotes wont work

# ### **Operational difference (the real reason your script failed):**

# **Single quotes `' '`**

# - Treat everything inside as *literal text*.
# - No variable expansion.
# - No command substitution.
# - `$name` stays **exactly** `$name`.

# **Double quotes `" "`**

# - Allow the shell to *interpret* what’s inside.
# - Variables expand (`$name` → Dan).
# - Command substitutions run.
# - Still protect the text from word splitting.

# ### **In short:**

# - `'Welcome $name'` → prints **Welcome $name**
# - `"Welcome $name"` → prints **Welcome Dan**
read name
echo "Welcome $name"


# echo $(( X / Y ))

# Bash automatically drops the decimal —

# **it only keeps the integer part.**
