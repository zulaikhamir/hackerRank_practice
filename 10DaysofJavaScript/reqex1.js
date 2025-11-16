// Complete the function in the editor below by returning a RegExp object, , that matches any string  satisfying both of the following conditions:

// String  starts with the prefix Mr., Mrs., Ms., Dr., or Er.
// The remainder of string  (i.e., the rest of the string after the prefix) consists of one or more upper and/or lowercase English alphabetic letters (i.e., [a-z] and [A-Z]).
// Constraints

// The length of string  is  >=3.
// Output Format

// The function must return a RegExp object that matches any string  satisfying both of the given conditions.
let re = /^(Mr|Mrs|Ms|Dr|Er)\.[A-Za-z]+$/;
// 🧠 Explanation of the regex
// ^

// Start of the string.

// (Mr|Mrs|Ms|Dr|Er)

// Matches one prefix.

// \.

// Literal dot (.)
// Dot must be escaped because "." normally means "any character".

// [A-Za-z]+

// One or more letters (the name).

// $

// End of string.

// 🎯 What is the question testing?

// This challenge tests:

// ✔ Your understanding of regex basics:

// Anchors (^, $)

// Character classes ([A-Za-z])

// Quantifiers (+)

// Alternation (|)

// Escaping characters (\.)

// ✔ Your ability to build a pattern that matches specific strings
// ✔ Your understanding of RegExp literals vs strings

// 1. Regex is used everywhere in software development

// You will encounter regex in every area:

// ✔ JavaScript

// Form validation, filtering text, searching strings, parsing logs.

// ✔ Web development

// Validating emails, phone numbers, passwords, URLs.

// ✔ Backend / APIs

// Sanitizing input, routing, parsing request bodies.

// ✔ Databases

// MongoDB, PostgreSQL, MySQL all support regex queries.

// ✔ DevOps & tools

// Git, VS Code search, terminal commands, logs.

// ✔ Data engineering and machine learning

// Cleaning messy text, extracting patterns.

// Regex is a universal language across tech.

// 2. Companies EXPECT you to know it

// Top companies (Google, Amazon, Meta, Microsoft) frequently check regex in:

// Coding rounds

// Web dev rounds

// DSA + string manipulation questions

// Debugging tasks

// Take-home assessments

// Even basic frontend developer roles ask it.

// 3. Regex makes you 10x faster

// If you can use regex, you can do things instantly that others do manually.

// Examples:

// Find all emails inside a 2000-line file:
// [\w.-]+@[\w.-]+\.\w+

// Replace multiple patterns at once

// (such as converting JSX class → className)

// Extract usernames, IDs, dates, tokens instantly

// Regex makes you work faster and smarter.

// 4. Real-world problems NEED regex

// Examples you will face in jobs:

// Form validation

// Is the email valid?

// Is the password strong?

// Is the phone number correct?

// Scraping data

// Extract names, prices, IDs, tokens, codes.

// Searching logs

// Find errors based on patterns.

// API input validation

// Prevent bad data from entering your system.

// Frontend logic

// Highlight words, auto-correct input, formatting text.

// 5. Regex improves your logical thinking

// Your brain learns:

// Pattern matching

// Thinking in sequences

// Breaking problems into smaller parts

// Understanding text processing deeply

// This helps directly in DSA + coding rounds.

// 6. Regex questions show up a LOT in HackerRank

// HackerRank uses regex challenges because:

// They test precision

// They test text manipulation

// They test thinking

// They are practical

// Mastering regex makes these challenges EASY.

// 7. You stand out in interviews

// Interviewers LOVE candidates who use regex efficiently.

// If you write:

// if (/^[A-Z]\w+$/.test(name)) { ... }

// Instead of writing 10–15 lines of manual checking —
// they instantly know you're a strong developer.
