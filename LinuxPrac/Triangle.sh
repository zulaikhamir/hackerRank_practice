# Given three integers (, , and ) representing the three sides of a triangle, identify whether the triangle is scalene, isosceles, or equilateral.

# If all three sides are equal, output EQUILATERAL.
# Otherwise, if any two sides are equal, output ISOSCELES.
# Otherwise, output SCALENE.
read X
read Y
read Z

if [ "$X" -eq "$Y" ] && [ "$X" -eq "$Z" ]; then
    echo 'EQUILATERAL'
elif [ "$X" -eq "$Y" ] || [ "$X" -eq "$Z" ] || [ "$Y" -eq "$Z" ]; then
    echo 'ISOSCELES'
else
    echo 'SCALENE'
fi


# ✅ Bash Conditional Checklist
# 1. Always put spaces around [ and ].

# [ "$X" -eq "$Y" ]
# Not [ "$X" -eq "$Y"] or ["$X" -eq "$Y" ].

# 2. Use double quotes for variables in conditionals.

# "$X" not '$X'.
# Single quotes kill variable expansion.

# 3. Use -eq, -lt, -gt, etc. for numeric comparisons.

# Bash doesn’t understand == for numbers inside [ ].

# 4. Combine conditions outside the brackets.

# ✅ [ ... ] && [ ... ]
# ❌ [ ... && ... ]

# 5. Don’t put parentheses around conditions unless using [[ ]].

# Old [ test doesn’t use parentheses.

# 6. Always end if, elif, and else blocks with fi.

# Small, but easy to overlook.

# 7. Use then on the same line OR a separate line with semicolon.

# ✅ if [ ... ]; then
# ✅ if [ ... ] then
# ❌ if [ ... ] then

# 8. Echo with double quotes unless you specifically need single quotes.

# Consistency helps avoid escaping issues.

# 9. Validate variable values before comparing (avoid empty-number errors).

# [ -n "$X" ] if needed.

# ✅ Quick mental model

# Bash conditionals are commands, not math expressions.
# Treat every piece like a box with space around it.
